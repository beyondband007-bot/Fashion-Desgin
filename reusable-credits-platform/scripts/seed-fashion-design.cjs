const mysql = require("mysql2/promise");

const APPLICATION = {
  code: "fashion-design",
  name: "FashionDesign",
  description: "AI content generation workflows for fashion ecommerce."
};

const FUNCTIONS = [
  {
    code: "model-try-on",
    name: "Model Try-On",
    description: "Generate on-model product imagery from garment and model inputs.",
    chargeMode: "estimate_required",
    defaultPoints: "30.0000"
  },
  {
    code: "model-generate",
    name: "AI Model Generate",
    description: "Generate or transform AI fashion model imagery.",
    chargeMode: "estimate_required",
    defaultPoints: "30.0000"
  },
  {
    code: "scene-lifestyle",
    name: "Scene Lifestyle Photo",
    description: "Generate ecommerce lifestyle imagery with scene/background selection.",
    chargeMode: "estimate_required",
    defaultPoints: "30.0000"
  },
  {
    code: "template-creative",
    name: "Template Creative",
    description: "Generate creative product images from configured action or creative templates.",
    chargeMode: "estimate_required",
    defaultPoints: "30.0000"
  },
  {
    code: "image-enhance",
    name: "Image Enhance",
    description: "Enhance, clean, relight, or normalize fashion product images.",
    chargeMode: "estimate_required",
    defaultPoints: "20.0000"
  },
  {
    code: "video-generate",
    name: "Video Generate",
    description: "Generate short fashion product or model videos.",
    chargeMode: "estimate_required",
    defaultPoints: "120.0000"
  },
  {
    code: "batch-image-generate",
    name: "Batch Image Generate",
    description: "Generate one billable item inside a batch image workflow.",
    chargeMode: "dynamic",
    defaultPoints: "30.0000"
  },
  {
    code: "batch-video-generate",
    name: "Batch Video Generate",
    description: "Generate one billable item inside a batch video workflow.",
    chargeMode: "dynamic",
    defaultPoints: "120.0000"
  }
];

function mysqlConfig() {
  return {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: Number(process.env.MYSQL_PORT || 3306),
    database: process.env.MYSQL_DATABASE || "credits_platform",
    user: process.env.MYSQL_USER || "credits",
    password: process.env.MYSQL_PASSWORD || "credits",
    multipleStatements: false
  };
}

async function selectOne(client, sql, values = []) {
  const [rows] = await client.execute(sql, values);
  return rows[0] ?? null;
}

async function upsertApplication(client) {
  const [result] = await client.execute(
    `
      insert into applications (code, name, description, status)
      values (?, ?, ?, 'active')
      on duplicate key update
        id = LAST_INSERT_ID(id),
        name = values(name),
        description = values(description),
        status = values(status),
        updated_at = CURRENT_TIMESTAMP
    `,
    [APPLICATION.code, APPLICATION.name, APPLICATION.description]
  );

  return selectOne(client, "select id, code from applications where id = ? limit 1", [result.insertId]);
}

async function upsertFunctions(client, applicationId) {
  const seeded = [];

  for (const item of FUNCTIONS) {
    const [result] = await client.execute(
      `
        insert into application_functions (
          application_id, code, name, description, charge_mode, default_points, status
        )
        values (?, ?, ?, ?, ?, ?, 'active')
        on duplicate key update
          id = LAST_INSERT_ID(id),
          name = values(name),
          description = values(description),
          charge_mode = values(charge_mode),
          default_points = values(default_points),
          status = values(status),
          updated_at = CURRENT_TIMESTAMP
      `,
      [
        applicationId,
        item.code,
        item.name,
        item.description,
        item.chargeMode,
        item.defaultPoints
      ]
    );

    seeded.push(
      await selectOne(
        client,
        "select id, code, charge_mode, default_points from application_functions where id = ? limit 1",
        [result.insertId]
      )
    );
  }

  return seeded;
}

async function main() {
  const client = await mysql.createConnection(mysqlConfig());

  try {
    await client.beginTransaction();

    const application = await upsertApplication(client);
    const functions = await upsertFunctions(client, application.id);

    await client.commit();

    console.log(`Application ready: ${application.code} (${application.id})`);
    console.log(`Functions ready: ${functions.length}`);
    for (const fn of functions) {
      console.log(`- ${fn.code}: ${fn.charge_mode}, ${fn.default_points}`);
    }
  } catch (error) {
    await client.rollback();
    throw error;
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = {
  APPLICATION,
  FUNCTIONS
};
