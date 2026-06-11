
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model TaskQuote
 * 
 */
export type TaskQuote = $Result.DefaultSelection<Prisma.$TaskQuotePayload>
/**
 * Model GenerationTask
 * 
 */
export type GenerationTask = $Result.DefaultSelection<Prisma.$GenerationTaskPayload>
/**
 * Model TaskInput
 * 
 */
export type TaskInput = $Result.DefaultSelection<Prisma.$TaskInputPayload>
/**
 * Model TaskOutput
 * 
 */
export type TaskOutput = $Result.DefaultSelection<Prisma.$TaskOutputPayload>
/**
 * Model TaskEvent
 * 
 */
export type TaskEvent = $Result.DefaultSelection<Prisma.$TaskEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  personal: 'personal',
  enterprise: 'enterprise'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const UserStatus: {
  active: 'active',
  frozen: 'frozen',
  deleted: 'deleted'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const CreditAccountStatus: {
  pending: 'pending',
  ready: 'ready',
  failed: 'failed',
  disabled: 'disabled'
};

export type CreditAccountStatus = (typeof CreditAccountStatus)[keyof typeof CreditAccountStatus]


export const OwnerType: {
  user: 'user',
  enterprise: 'enterprise',
  system: 'system'
};

export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType]


export const AssetStatus: {
  uploading: 'uploading',
  ready: 'ready',
  failed: 'failed',
  deleted: 'deleted'
};

export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus]


export const ReviewStatus: {
  pending: 'pending',
  passed: 'passed',
  rejected: 'rejected'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const ProjectStatus: {
  active: 'active',
  archived: 'archived',
  deleted: 'deleted'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const QuoteStatus: {
  active: 'active',
  used: 'used',
  expired: 'expired'
};

export type QuoteStatus = (typeof QuoteStatus)[keyof typeof QuoteStatus]


export const TaskStatus: {
  created: 'created',
  billing_pending: 'billing_pending',
  queued: 'queued',
  processing: 'processing',
  completed: 'completed',
  failed: 'failed',
  cancelling: 'cancelling',
  cancelled: 'cancelled'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const BillingStatus: {
  not_started: 'not_started',
  freezing: 'freezing',
  frozen: 'frozen',
  settling: 'settling',
  settled: 'settled',
  refunding: 'refunding',
  refunded: 'refunded',
  failed: 'failed'
};

export type BillingStatus = (typeof BillingStatus)[keyof typeof BillingStatus]


export const TaskModule: {
  ai_generate: 'ai_generate',
  creative: 'creative',
  video_beta: 'video_beta',
  delivery: 'delivery'
};

export type TaskModule = (typeof TaskModule)[keyof typeof TaskModule]


export const TaskType: {
  clothes: 'clothes',
  real: 'real',
  mannequin: 'mannequin',
  model_replace: 'model_replace',
  video: 'video',
  creative: 'creative'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type CreditAccountStatus = $Enums.CreditAccountStatus

export const CreditAccountStatus: typeof $Enums.CreditAccountStatus

export type OwnerType = $Enums.OwnerType

export const OwnerType: typeof $Enums.OwnerType

export type AssetStatus = $Enums.AssetStatus

export const AssetStatus: typeof $Enums.AssetStatus

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type QuoteStatus = $Enums.QuoteStatus

export const QuoteStatus: typeof $Enums.QuoteStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type BillingStatus = $Enums.BillingStatus

export const BillingStatus: typeof $Enums.BillingStatus

export type TaskModule = $Enums.TaskModule

export const TaskModule: typeof $Enums.TaskModule

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskQuote`: Exposes CRUD operations for the **TaskQuote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskQuotes
    * const taskQuotes = await prisma.taskQuote.findMany()
    * ```
    */
  get taskQuote(): Prisma.TaskQuoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generationTask`: Exposes CRUD operations for the **GenerationTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenerationTasks
    * const generationTasks = await prisma.generationTask.findMany()
    * ```
    */
  get generationTask(): Prisma.GenerationTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskInput`: Exposes CRUD operations for the **TaskInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskInputs
    * const taskInputs = await prisma.taskInput.findMany()
    * ```
    */
  get taskInput(): Prisma.TaskInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskOutput`: Exposes CRUD operations for the **TaskOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskOutputs
    * const taskOutputs = await prisma.taskOutput.findMany()
    * ```
    */
  get taskOutput(): Prisma.TaskOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskEvent`: Exposes CRUD operations for the **TaskEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskEvents
    * const taskEvents = await prisma.taskEvent.findMany()
    * ```
    */
  get taskEvent(): Prisma.TaskEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AuthSession: 'AuthSession',
    VerificationCode: 'VerificationCode',
    Asset: 'Asset',
    Project: 'Project',
    TaskQuote: 'TaskQuote',
    GenerationTask: 'GenerationTask',
    TaskInput: 'TaskInput',
    TaskOutput: 'TaskOutput',
    TaskEvent: 'TaskEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "authSession" | "verificationCode" | "asset" | "project" | "taskQuote" | "generationTask" | "taskInput" | "taskOutput" | "taskEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      TaskQuote: {
        payload: Prisma.$TaskQuotePayload<ExtArgs>
        fields: Prisma.TaskQuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskQuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskQuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          findFirst: {
            args: Prisma.TaskQuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskQuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          findMany: {
            args: Prisma.TaskQuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>[]
          }
          create: {
            args: Prisma.TaskQuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          createMany: {
            args: Prisma.TaskQuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskQuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          update: {
            args: Prisma.TaskQuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          deleteMany: {
            args: Prisma.TaskQuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskQuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskQuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskQuotePayload>
          }
          aggregate: {
            args: Prisma.TaskQuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskQuote>
          }
          groupBy: {
            args: Prisma.TaskQuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskQuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskQuoteCountArgs<ExtArgs>
            result: $Utils.Optional<TaskQuoteCountAggregateOutputType> | number
          }
        }
      }
      GenerationTask: {
        payload: Prisma.$GenerationTaskPayload<ExtArgs>
        fields: Prisma.GenerationTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          findFirst: {
            args: Prisma.GenerationTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          findMany: {
            args: Prisma.GenerationTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>[]
          }
          create: {
            args: Prisma.GenerationTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          createMany: {
            args: Prisma.GenerationTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenerationTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          update: {
            args: Prisma.GenerationTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          deleteMany: {
            args: Prisma.GenerationTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenerationTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationTaskPayload>
          }
          aggregate: {
            args: Prisma.GenerationTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerationTask>
          }
          groupBy: {
            args: Prisma.GenerationTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationTaskCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationTaskCountAggregateOutputType> | number
          }
        }
      }
      TaskInput: {
        payload: Prisma.$TaskInputPayload<ExtArgs>
        fields: Prisma.TaskInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          findFirst: {
            args: Prisma.TaskInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          findMany: {
            args: Prisma.TaskInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>[]
          }
          create: {
            args: Prisma.TaskInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          createMany: {
            args: Prisma.TaskInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          update: {
            args: Prisma.TaskInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          deleteMany: {
            args: Prisma.TaskInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInputPayload>
          }
          aggregate: {
            args: Prisma.TaskInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskInput>
          }
          groupBy: {
            args: Prisma.TaskInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskInputCountArgs<ExtArgs>
            result: $Utils.Optional<TaskInputCountAggregateOutputType> | number
          }
        }
      }
      TaskOutput: {
        payload: Prisma.$TaskOutputPayload<ExtArgs>
        fields: Prisma.TaskOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          findFirst: {
            args: Prisma.TaskOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          findMany: {
            args: Prisma.TaskOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>[]
          }
          create: {
            args: Prisma.TaskOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          createMany: {
            args: Prisma.TaskOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          update: {
            args: Prisma.TaskOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          deleteMany: {
            args: Prisma.TaskOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOutputPayload>
          }
          aggregate: {
            args: Prisma.TaskOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskOutput>
          }
          groupBy: {
            args: Prisma.TaskOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskOutputCountArgs<ExtArgs>
            result: $Utils.Optional<TaskOutputCountAggregateOutputType> | number
          }
        }
      }
      TaskEvent: {
        payload: Prisma.$TaskEventPayload<ExtArgs>
        fields: Prisma.TaskEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          findFirst: {
            args: Prisma.TaskEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          findMany: {
            args: Prisma.TaskEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>[]
          }
          create: {
            args: Prisma.TaskEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          createMany: {
            args: Prisma.TaskEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          update: {
            args: Prisma.TaskEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          deleteMany: {
            args: Prisma.TaskEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskEventPayload>
          }
          aggregate: {
            args: Prisma.TaskEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskEvent>
          }
          groupBy: {
            args: Prisma.TaskEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskEventCountArgs<ExtArgs>
            result: $Utils.Optional<TaskEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    authSession?: AuthSessionOmit
    verificationCode?: VerificationCodeOmit
    asset?: AssetOmit
    project?: ProjectOmit
    taskQuote?: TaskQuoteOmit
    generationTask?: GenerationTaskOmit
    taskInput?: TaskInputOmit
    taskOutput?: TaskOutputOmit
    taskEvent?: TaskEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authSessions: number
    taskQuotes: number
    generationTasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authSessions?: boolean | UserCountOutputTypeCountAuthSessionsArgs
    taskQuotes?: boolean | UserCountOutputTypeCountTaskQuotesArgs
    generationTasks?: boolean | UserCountOutputTypeCountGenerationTasksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskQuoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGenerationTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationTaskWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationTaskWhereInput
  }


  /**
   * Count Type TaskQuoteCountOutputType
   */

  export type TaskQuoteCountOutputType = {
    tasks: number
  }

  export type TaskQuoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskQuoteCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskQuoteCountOutputType without action
   */
  export type TaskQuoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuoteCountOutputType
     */
    select?: TaskQuoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskQuoteCountOutputType without action
   */
  export type TaskQuoteCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationTaskWhereInput
  }


  /**
   * Count Type GenerationTaskCountOutputType
   */

  export type GenerationTaskCountOutputType = {
    inputs: number
    outputs: number
    events: number
  }

  export type GenerationTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputs?: boolean | GenerationTaskCountOutputTypeCountInputsArgs
    outputs?: boolean | GenerationTaskCountOutputTypeCountOutputsArgs
    events?: boolean | GenerationTaskCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * GenerationTaskCountOutputType without action
   */
  export type GenerationTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTaskCountOutputType
     */
    select?: GenerationTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenerationTaskCountOutputType without action
   */
  export type GenerationTaskCountOutputTypeCountInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskInputWhereInput
  }

  /**
   * GenerationTaskCountOutputType without action
   */
  export type GenerationTaskCountOutputTypeCountOutputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskOutputWhereInput
  }

  /**
   * GenerationTaskCountOutputType without action
   */
  export type GenerationTaskCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phoneCiphertext: Uint8Array | null
    phoneHash: string | null
    emailCiphertext: Uint8Array | null
    emailHash: string | null
    passwordHash: string | null
    nickname: string | null
    avatarAssetId: string | null
    userType: $Enums.UserType | null
    status: $Enums.UserStatus | null
    registerSource: string | null
    creditAccountId: string | null
    creditAccountStatus: $Enums.CreditAccountStatus | null
    nicknameUpdatedAt: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phoneCiphertext: Uint8Array | null
    phoneHash: string | null
    emailCiphertext: Uint8Array | null
    emailHash: string | null
    passwordHash: string | null
    nickname: string | null
    avatarAssetId: string | null
    userType: $Enums.UserType | null
    status: $Enums.UserStatus | null
    registerSource: string | null
    creditAccountId: string | null
    creditAccountStatus: $Enums.CreditAccountStatus | null
    nicknameUpdatedAt: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phoneCiphertext: number
    phoneHash: number
    emailCiphertext: number
    emailHash: number
    passwordHash: number
    nickname: number
    avatarAssetId: number
    userType: number
    status: number
    registerSource: number
    creditAccountId: number
    creditAccountStatus: number
    nicknameUpdatedAt: number
    lastLoginAt: number
    lastLoginIp: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phoneCiphertext?: true
    phoneHash?: true
    emailCiphertext?: true
    emailHash?: true
    passwordHash?: true
    nickname?: true
    avatarAssetId?: true
    userType?: true
    status?: true
    registerSource?: true
    creditAccountId?: true
    creditAccountStatus?: true
    nicknameUpdatedAt?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phoneCiphertext?: true
    phoneHash?: true
    emailCiphertext?: true
    emailHash?: true
    passwordHash?: true
    nickname?: true
    avatarAssetId?: true
    userType?: true
    status?: true
    registerSource?: true
    creditAccountId?: true
    creditAccountStatus?: true
    nicknameUpdatedAt?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phoneCiphertext?: true
    phoneHash?: true
    emailCiphertext?: true
    emailHash?: true
    passwordHash?: true
    nickname?: true
    avatarAssetId?: true
    userType?: true
    status?: true
    registerSource?: true
    creditAccountId?: true
    creditAccountStatus?: true
    nicknameUpdatedAt?: true
    lastLoginAt?: true
    lastLoginIp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phoneCiphertext: Uint8Array | null
    phoneHash: string | null
    emailCiphertext: Uint8Array | null
    emailHash: string | null
    passwordHash: string | null
    nickname: string
    avatarAssetId: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneCiphertext?: boolean
    phoneHash?: boolean
    emailCiphertext?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    nickname?: boolean
    avatarAssetId?: boolean
    userType?: boolean
    status?: boolean
    registerSource?: boolean
    creditAccountId?: boolean
    creditAccountStatus?: boolean
    nicknameUpdatedAt?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    taskQuotes?: boolean | User$taskQuotesArgs<ExtArgs>
    generationTasks?: boolean | User$generationTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    phoneCiphertext?: boolean
    phoneHash?: boolean
    emailCiphertext?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    nickname?: boolean
    avatarAssetId?: boolean
    userType?: boolean
    status?: boolean
    registerSource?: boolean
    creditAccountId?: boolean
    creditAccountStatus?: boolean
    nicknameUpdatedAt?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneCiphertext" | "phoneHash" | "emailCiphertext" | "emailHash" | "passwordHash" | "nickname" | "avatarAssetId" | "userType" | "status" | "registerSource" | "creditAccountId" | "creditAccountStatus" | "nicknameUpdatedAt" | "lastLoginAt" | "lastLoginIp" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    taskQuotes?: boolean | User$taskQuotesArgs<ExtArgs>
    generationTasks?: boolean | User$generationTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      authSessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      taskQuotes: Prisma.$TaskQuotePayload<ExtArgs>[]
      generationTasks: Prisma.$GenerationTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneCiphertext: Uint8Array | null
      phoneHash: string | null
      emailCiphertext: Uint8Array | null
      emailHash: string | null
      passwordHash: string | null
      nickname: string
      avatarAssetId: string | null
      userType: $Enums.UserType
      status: $Enums.UserStatus
      registerSource: string
      creditAccountId: string | null
      creditAccountStatus: $Enums.CreditAccountStatus
      nicknameUpdatedAt: Date | null
      lastLoginAt: Date | null
      lastLoginIp: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authSessions<T extends User$authSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$authSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskQuotes<T extends User$taskQuotesArgs<ExtArgs> = {}>(args?: Subset<T, User$taskQuotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generationTasks<T extends User$generationTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$generationTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phoneCiphertext: FieldRef<"User", 'Bytes'>
    readonly phoneHash: FieldRef<"User", 'String'>
    readonly emailCiphertext: FieldRef<"User", 'Bytes'>
    readonly emailHash: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly avatarAssetId: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly registerSource: FieldRef<"User", 'String'>
    readonly creditAccountId: FieldRef<"User", 'String'>
    readonly creditAccountStatus: FieldRef<"User", 'CreditAccountStatus'>
    readonly nicknameUpdatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginIp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.authSessions
   */
  export type User$authSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * User.taskQuotes
   */
  export type User$taskQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    where?: TaskQuoteWhereInput
    orderBy?: TaskQuoteOrderByWithRelationInput | TaskQuoteOrderByWithRelationInput[]
    cursor?: TaskQuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskQuoteScalarFieldEnum | TaskQuoteScalarFieldEnum[]
  }

  /**
   * User.generationTasks
   */
  export type User$generationTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    where?: GenerationTaskWhereInput
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    cursor?: GenerationTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    deviceId: string | null
    deviceName: string | null
    userAgent: string | null
    ipAddress: string | null
    status: string | null
    expiresAt: Date | null
    lastActiveAt: Date | null
    revokedAt: Date | null
    revokeReason: string | null
    createdAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    deviceId: string | null
    deviceName: string | null
    userAgent: string | null
    ipAddress: string | null
    status: string | null
    expiresAt: Date | null
    lastActiveAt: Date | null
    revokedAt: Date | null
    revokeReason: string | null
    createdAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshTokenHash: number
    deviceId: number
    deviceName: number
    userAgent: number
    ipAddress: number
    status: number
    expiresAt: number
    lastActiveAt: number
    revokedAt: number
    revokeReason: number
    createdAt: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    deviceId?: true
    deviceName?: true
    userAgent?: true
    ipAddress?: true
    status?: true
    expiresAt?: true
    lastActiveAt?: true
    revokedAt?: true
    revokeReason?: true
    createdAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    deviceId?: true
    deviceName?: true
    userAgent?: true
    ipAddress?: true
    status?: true
    expiresAt?: true
    lastActiveAt?: true
    revokedAt?: true
    revokeReason?: true
    createdAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    deviceId?: true
    deviceName?: true
    userAgent?: true
    ipAddress?: true
    status?: true
    expiresAt?: true
    lastActiveAt?: true
    revokedAt?: true
    revokeReason?: true
    createdAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: string
    refreshTokenHash: string
    deviceId: string | null
    deviceName: string | null
    userAgent: string | null
    ipAddress: string | null
    status: string
    expiresAt: Date
    lastActiveAt: Date
    revokedAt: Date | null
    revokeReason: string | null
    createdAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    deviceId?: boolean
    deviceName?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    status?: boolean
    expiresAt?: boolean
    lastActiveAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>



  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    deviceId?: boolean
    deviceName?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    status?: boolean
    expiresAt?: boolean
    lastActiveAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
    createdAt?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshTokenHash" | "deviceId" | "deviceName" | "userAgent" | "ipAddress" | "status" | "expiresAt" | "lastActiveAt" | "revokedAt" | "revokeReason" | "createdAt", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshTokenHash: string
      deviceId: string | null
      deviceName: string | null
      userAgent: string | null
      ipAddress: string | null
      status: string
      expiresAt: Date
      lastActiveAt: Date
      revokedAt: Date | null
      revokeReason: string | null
      createdAt: Date
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
    readonly refreshTokenHash: FieldRef<"AuthSession", 'String'>
    readonly deviceId: FieldRef<"AuthSession", 'String'>
    readonly deviceName: FieldRef<"AuthSession", 'String'>
    readonly userAgent: FieldRef<"AuthSession", 'String'>
    readonly ipAddress: FieldRef<"AuthSession", 'String'>
    readonly status: FieldRef<"AuthSession", 'String'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly lastActiveAt: FieldRef<"AuthSession", 'DateTime'>
    readonly revokedAt: FieldRef<"AuthSession", 'DateTime'>
    readonly revokeReason: FieldRef<"AuthSession", 'String'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeAvgAggregateOutputType = {
    attemptCount: number | null
  }

  export type VerificationCodeSumAggregateOutputType = {
    attemptCount: number | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    targetHash: string | null
    purpose: string | null
    codeHash: string | null
    status: string | null
    attemptCount: number | null
    sendChannel: string | null
    providerMessageId: string | null
    ipAddress: string | null
    expiresAt: Date | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    targetHash: string | null
    purpose: string | null
    codeHash: string | null
    status: string | null
    attemptCount: number | null
    sendChannel: string | null
    providerMessageId: string | null
    ipAddress: string | null
    expiresAt: Date | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    targetHash: number
    purpose: number
    codeHash: number
    status: number
    attemptCount: number
    sendChannel: number
    providerMessageId: number
    ipAddress: number
    expiresAt: number
    verifiedAt: number
    createdAt: number
    _all: number
  }


  export type VerificationCodeAvgAggregateInputType = {
    attemptCount?: true
  }

  export type VerificationCodeSumAggregateInputType = {
    attemptCount?: true
  }

  export type VerificationCodeMinAggregateInputType = {
    id?: true
    targetHash?: true
    purpose?: true
    codeHash?: true
    status?: true
    attemptCount?: true
    sendChannel?: true
    providerMessageId?: true
    ipAddress?: true
    expiresAt?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    targetHash?: true
    purpose?: true
    codeHash?: true
    status?: true
    attemptCount?: true
    sendChannel?: true
    providerMessageId?: true
    ipAddress?: true
    expiresAt?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    targetHash?: true
    purpose?: true
    codeHash?: true
    status?: true
    attemptCount?: true
    sendChannel?: true
    providerMessageId?: true
    ipAddress?: true
    expiresAt?: true
    verifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _avg?: VerificationCodeAvgAggregateInputType
    _sum?: VerificationCodeSumAggregateInputType
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    targetHash: string
    purpose: string
    codeHash: string
    status: string
    attemptCount: number
    sendChannel: string
    providerMessageId: string | null
    ipAddress: string | null
    expiresAt: Date
    verifiedAt: Date | null
    createdAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetHash?: boolean
    purpose?: boolean
    codeHash?: boolean
    status?: boolean
    attemptCount?: boolean
    sendChannel?: boolean
    providerMessageId?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>



  export type VerificationCodeSelectScalar = {
    id?: boolean
    targetHash?: boolean
    purpose?: boolean
    codeHash?: boolean
    status?: boolean
    attemptCount?: boolean
    sendChannel?: boolean
    providerMessageId?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "targetHash" | "purpose" | "codeHash" | "status" | "attemptCount" | "sendChannel" | "providerMessageId" | "ipAddress" | "expiresAt" | "verifiedAt" | "createdAt", ExtArgs["result"]["verificationCode"]>

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targetHash: string
      purpose: string
      codeHash: string
      status: string
      attemptCount: number
      sendChannel: string
      providerMessageId: string | null
      ipAddress: string | null
      expiresAt: Date
      verifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly targetHash: FieldRef<"VerificationCode", 'String'>
    readonly purpose: FieldRef<"VerificationCode", 'String'>
    readonly codeHash: FieldRef<"VerificationCode", 'String'>
    readonly status: FieldRef<"VerificationCode", 'String'>
    readonly attemptCount: FieldRef<"VerificationCode", 'Int'>
    readonly sendChannel: FieldRef<"VerificationCode", 'String'>
    readonly providerMessageId: FieldRef<"VerificationCode", 'String'>
    readonly ipAddress: FieldRef<"VerificationCode", 'String'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly verifiedAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
    durationMs: number | null
  }

  export type AssetSumAggregateOutputType = {
    fileSize: bigint | null
    width: number | null
    height: number | null
    durationMs: bigint | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    folderId: string | null
    name: string | null
    originalFileName: string | null
    purpose: string | null
    mediaType: string | null
    mimeType: string | null
    fileExt: string | null
    fileSize: bigint | null
    sha256: string | null
    storageProvider: string | null
    storageBucket: string | null
    storageKey: string | null
    publicUrl: string | null
    thumbnailUrl: string | null
    width: number | null
    height: number | null
    durationMs: bigint | null
    reviewStatus: $Enums.ReviewStatus | null
    favorite: boolean | null
    status: $Enums.AssetStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    folderId: string | null
    name: string | null
    originalFileName: string | null
    purpose: string | null
    mediaType: string | null
    mimeType: string | null
    fileExt: string | null
    fileSize: bigint | null
    sha256: string | null
    storageProvider: string | null
    storageBucket: string | null
    storageKey: string | null
    publicUrl: string | null
    thumbnailUrl: string | null
    width: number | null
    height: number | null
    durationMs: bigint | null
    reviewStatus: $Enums.ReviewStatus | null
    favorite: boolean | null
    status: $Enums.AssetStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    ownerType: number
    ownerId: number
    folderId: number
    name: number
    originalFileName: number
    purpose: number
    mediaType: number
    mimeType: number
    fileExt: number
    fileSize: number
    sha256: number
    storageProvider: number
    storageBucket: number
    storageKey: number
    publicUrl: number
    thumbnailUrl: number
    width: number
    height: number
    durationMs: number
    metadataJson: number
    reviewStatus: number
    reviewResultJson: number
    favorite: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
    durationMs?: true
  }

  export type AssetSumAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
    durationMs?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    folderId?: true
    name?: true
    originalFileName?: true
    purpose?: true
    mediaType?: true
    mimeType?: true
    fileExt?: true
    fileSize?: true
    sha256?: true
    storageProvider?: true
    storageBucket?: true
    storageKey?: true
    publicUrl?: true
    thumbnailUrl?: true
    width?: true
    height?: true
    durationMs?: true
    reviewStatus?: true
    favorite?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    folderId?: true
    name?: true
    originalFileName?: true
    purpose?: true
    mediaType?: true
    mimeType?: true
    fileExt?: true
    fileSize?: true
    sha256?: true
    storageProvider?: true
    storageBucket?: true
    storageKey?: true
    publicUrl?: true
    thumbnailUrl?: true
    width?: true
    height?: true
    durationMs?: true
    reviewStatus?: true
    favorite?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    folderId?: true
    name?: true
    originalFileName?: true
    purpose?: true
    mediaType?: true
    mimeType?: true
    fileExt?: true
    fileSize?: true
    sha256?: true
    storageProvider?: true
    storageBucket?: true
    storageKey?: true
    publicUrl?: true
    thumbnailUrl?: true
    width?: true
    height?: true
    durationMs?: true
    metadataJson?: true
    reviewStatus?: true
    reviewResultJson?: true
    favorite?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string | null
    folderId: string | null
    name: string
    originalFileName: string
    purpose: string | null
    mediaType: string
    mimeType: string
    fileExt: string
    fileSize: bigint
    sha256: string | null
    storageProvider: string
    storageBucket: string
    storageKey: string
    publicUrl: string | null
    thumbnailUrl: string | null
    width: number | null
    height: number | null
    durationMs: bigint | null
    metadataJson: JsonValue | null
    reviewStatus: $Enums.ReviewStatus
    reviewResultJson: JsonValue | null
    favorite: boolean
    status: $Enums.AssetStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    folderId?: boolean
    name?: boolean
    originalFileName?: boolean
    purpose?: boolean
    mediaType?: boolean
    mimeType?: boolean
    fileExt?: boolean
    fileSize?: boolean
    sha256?: boolean
    storageProvider?: boolean
    storageBucket?: boolean
    storageKey?: boolean
    publicUrl?: boolean
    thumbnailUrl?: boolean
    width?: boolean
    height?: boolean
    durationMs?: boolean
    metadataJson?: boolean
    reviewStatus?: boolean
    reviewResultJson?: boolean
    favorite?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["asset"]>



  export type AssetSelectScalar = {
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    folderId?: boolean
    name?: boolean
    originalFileName?: boolean
    purpose?: boolean
    mediaType?: boolean
    mimeType?: boolean
    fileExt?: boolean
    fileSize?: boolean
    sha256?: boolean
    storageProvider?: boolean
    storageBucket?: boolean
    storageKey?: boolean
    publicUrl?: boolean
    thumbnailUrl?: boolean
    width?: boolean
    height?: boolean
    durationMs?: boolean
    metadataJson?: boolean
    reviewStatus?: boolean
    reviewResultJson?: boolean
    favorite?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerType" | "ownerId" | "folderId" | "name" | "originalFileName" | "purpose" | "mediaType" | "mimeType" | "fileExt" | "fileSize" | "sha256" | "storageProvider" | "storageBucket" | "storageKey" | "publicUrl" | "thumbnailUrl" | "width" | "height" | "durationMs" | "metadataJson" | "reviewStatus" | "reviewResultJson" | "favorite" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["asset"]>

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerType: $Enums.OwnerType
      ownerId: string | null
      folderId: string | null
      name: string
      originalFileName: string
      purpose: string | null
      mediaType: string
      mimeType: string
      fileExt: string
      fileSize: bigint
      sha256: string | null
      storageProvider: string
      storageBucket: string
      storageKey: string
      publicUrl: string | null
      thumbnailUrl: string | null
      width: number | null
      height: number | null
      durationMs: bigint | null
      metadataJson: Prisma.JsonValue | null
      reviewStatus: $Enums.ReviewStatus
      reviewResultJson: Prisma.JsonValue | null
      favorite: boolean
      status: $Enums.AssetStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly ownerType: FieldRef<"Asset", 'OwnerType'>
    readonly ownerId: FieldRef<"Asset", 'String'>
    readonly folderId: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly originalFileName: FieldRef<"Asset", 'String'>
    readonly purpose: FieldRef<"Asset", 'String'>
    readonly mediaType: FieldRef<"Asset", 'String'>
    readonly mimeType: FieldRef<"Asset", 'String'>
    readonly fileExt: FieldRef<"Asset", 'String'>
    readonly fileSize: FieldRef<"Asset", 'BigInt'>
    readonly sha256: FieldRef<"Asset", 'String'>
    readonly storageProvider: FieldRef<"Asset", 'String'>
    readonly storageBucket: FieldRef<"Asset", 'String'>
    readonly storageKey: FieldRef<"Asset", 'String'>
    readonly publicUrl: FieldRef<"Asset", 'String'>
    readonly thumbnailUrl: FieldRef<"Asset", 'String'>
    readonly width: FieldRef<"Asset", 'Int'>
    readonly height: FieldRef<"Asset", 'Int'>
    readonly durationMs: FieldRef<"Asset", 'BigInt'>
    readonly metadataJson: FieldRef<"Asset", 'Json'>
    readonly reviewStatus: FieldRef<"Asset", 'ReviewStatus'>
    readonly reviewResultJson: FieldRef<"Asset", 'Json'>
    readonly favorite: FieldRef<"Asset", 'Boolean'>
    readonly status: FieldRef<"Asset", 'AssetStatus'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
    readonly deletedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    taskCount: number | null
  }

  export type ProjectSumAggregateOutputType = {
    taskCount: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    createdBy: string | null
    name: string | null
    description: string | null
    coverAssetId: string | null
    status: $Enums.ProjectStatus | null
    taskCount: number | null
    lastActivityAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    createdBy: string | null
    name: string | null
    description: string | null
    coverAssetId: string | null
    status: $Enums.ProjectStatus | null
    taskCount: number | null
    lastActivityAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    ownerType: number
    ownerId: number
    createdBy: number
    name: number
    description: number
    coverAssetId: number
    status: number
    taskCount: number
    lastActivityAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    taskCount?: true
  }

  export type ProjectSumAggregateInputType = {
    taskCount?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    createdBy?: true
    name?: true
    description?: true
    coverAssetId?: true
    status?: true
    taskCount?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    createdBy?: true
    name?: true
    description?: true
    coverAssetId?: true
    status?: true
    taskCount?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    createdBy?: true
    name?: true
    description?: true
    coverAssetId?: true
    status?: true
    taskCount?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description: string | null
    coverAssetId: string | null
    status: $Enums.ProjectStatus
    taskCount: number
    lastActivityAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverAssetId?: boolean
    status?: boolean
    taskCount?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverAssetId?: boolean
    status?: boolean
    taskCount?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerType" | "ownerId" | "createdBy" | "name" | "description" | "coverAssetId" | "status" | "taskCount" | "lastActivityAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tasks: Prisma.$GenerationTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerType: $Enums.OwnerType
      ownerId: string
      createdBy: string
      name: string
      description: string | null
      coverAssetId: string | null
      status: $Enums.ProjectStatus
      taskCount: number
      lastActivityAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly ownerType: FieldRef<"Project", 'OwnerType'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly createdBy: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly coverAssetId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly taskCount: FieldRef<"Project", 'Int'>
    readonly lastActivityAt: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    where?: GenerationTaskWhereInput
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    cursor?: GenerationTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model TaskQuote
   */

  export type AggregateTaskQuote = {
    _count: TaskQuoteCountAggregateOutputType | null
    _avg: TaskQuoteAvgAggregateOutputType | null
    _sum: TaskQuoteSumAggregateOutputType | null
    _min: TaskQuoteMinAggregateOutputType | null
    _max: TaskQuoteMaxAggregateOutputType | null
  }

  export type TaskQuoteAvgAggregateOutputType = {
    unitCredits: Decimal | null
    billableQuantity: Decimal | null
    estimatedCredits: Decimal | null
  }

  export type TaskQuoteSumAggregateOutputType = {
    unitCredits: Decimal | null
    billableQuantity: Decimal | null
    estimatedCredits: Decimal | null
  }

  export type TaskQuoteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    billingOwnerType: $Enums.OwnerType | null
    billingOwnerId: string | null
    creditAccountId: string | null
    taskType: $Enums.TaskType | null
    module: $Enums.TaskModule | null
    requestHash: string | null
    planCode: string | null
    ruleVersion: string | null
    unitCredits: Decimal | null
    billableQuantity: Decimal | null
    estimatedCredits: Decimal | null
    status: $Enums.QuoteStatus | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type TaskQuoteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    billingOwnerType: $Enums.OwnerType | null
    billingOwnerId: string | null
    creditAccountId: string | null
    taskType: $Enums.TaskType | null
    module: $Enums.TaskModule | null
    requestHash: string | null
    planCode: string | null
    ruleVersion: string | null
    unitCredits: Decimal | null
    billableQuantity: Decimal | null
    estimatedCredits: Decimal | null
    status: $Enums.QuoteStatus | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type TaskQuoteCountAggregateOutputType = {
    id: number
    userId: number
    billingOwnerType: number
    billingOwnerId: number
    creditAccountId: number
    taskType: number
    module: number
    requestHash: number
    planCode: number
    ruleVersion: number
    unitCredits: number
    billableQuantity: number
    estimatedCredits: number
    configSnapshotJson: number
    status: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type TaskQuoteAvgAggregateInputType = {
    unitCredits?: true
    billableQuantity?: true
    estimatedCredits?: true
  }

  export type TaskQuoteSumAggregateInputType = {
    unitCredits?: true
    billableQuantity?: true
    estimatedCredits?: true
  }

  export type TaskQuoteMinAggregateInputType = {
    id?: true
    userId?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    taskType?: true
    module?: true
    requestHash?: true
    planCode?: true
    ruleVersion?: true
    unitCredits?: true
    billableQuantity?: true
    estimatedCredits?: true
    status?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type TaskQuoteMaxAggregateInputType = {
    id?: true
    userId?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    taskType?: true
    module?: true
    requestHash?: true
    planCode?: true
    ruleVersion?: true
    unitCredits?: true
    billableQuantity?: true
    estimatedCredits?: true
    status?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type TaskQuoteCountAggregateInputType = {
    id?: true
    userId?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    taskType?: true
    module?: true
    requestHash?: true
    planCode?: true
    ruleVersion?: true
    unitCredits?: true
    billableQuantity?: true
    estimatedCredits?: true
    configSnapshotJson?: true
    status?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TaskQuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskQuote to aggregate.
     */
    where?: TaskQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskQuotes to fetch.
     */
    orderBy?: TaskQuoteOrderByWithRelationInput | TaskQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskQuotes
    **/
    _count?: true | TaskQuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskQuoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskQuoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskQuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskQuoteMaxAggregateInputType
  }

  export type GetTaskQuoteAggregateType<T extends TaskQuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskQuote[P]>
      : GetScalarType<T[P], AggregateTaskQuote[P]>
  }




  export type TaskQuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskQuoteWhereInput
    orderBy?: TaskQuoteOrderByWithAggregationInput | TaskQuoteOrderByWithAggregationInput[]
    by: TaskQuoteScalarFieldEnum[] | TaskQuoteScalarFieldEnum
    having?: TaskQuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskQuoteCountAggregateInputType | true
    _avg?: TaskQuoteAvgAggregateInputType
    _sum?: TaskQuoteSumAggregateInputType
    _min?: TaskQuoteMinAggregateInputType
    _max?: TaskQuoteMaxAggregateInputType
  }

  export type TaskQuoteGroupByOutputType = {
    id: string
    userId: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal
    billableQuantity: Decimal
    estimatedCredits: Decimal
    configSnapshotJson: JsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: TaskQuoteCountAggregateOutputType | null
    _avg: TaskQuoteAvgAggregateOutputType | null
    _sum: TaskQuoteSumAggregateOutputType | null
    _min: TaskQuoteMinAggregateOutputType | null
    _max: TaskQuoteMaxAggregateOutputType | null
  }

  type GetTaskQuoteGroupByPayload<T extends TaskQuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskQuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskQuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskQuoteGroupByOutputType[P]>
            : GetScalarType<T[P], TaskQuoteGroupByOutputType[P]>
        }
      >
    >


  export type TaskQuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    billingOwnerType?: boolean
    billingOwnerId?: boolean
    creditAccountId?: boolean
    taskType?: boolean
    module?: boolean
    requestHash?: boolean
    planCode?: boolean
    ruleVersion?: boolean
    unitCredits?: boolean
    billableQuantity?: boolean
    estimatedCredits?: boolean
    configSnapshotJson?: boolean
    status?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | TaskQuote$tasksArgs<ExtArgs>
    _count?: boolean | TaskQuoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskQuote"]>



  export type TaskQuoteSelectScalar = {
    id?: boolean
    userId?: boolean
    billingOwnerType?: boolean
    billingOwnerId?: boolean
    creditAccountId?: boolean
    taskType?: boolean
    module?: boolean
    requestHash?: boolean
    planCode?: boolean
    ruleVersion?: boolean
    unitCredits?: boolean
    billableQuantity?: boolean
    estimatedCredits?: boolean
    configSnapshotJson?: boolean
    status?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type TaskQuoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "billingOwnerType" | "billingOwnerId" | "creditAccountId" | "taskType" | "module" | "requestHash" | "planCode" | "ruleVersion" | "unitCredits" | "billableQuantity" | "estimatedCredits" | "configSnapshotJson" | "status" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["taskQuote"]>
  export type TaskQuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | TaskQuote$tasksArgs<ExtArgs>
    _count?: boolean | TaskQuoteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaskQuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskQuote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$GenerationTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      billingOwnerType: $Enums.OwnerType
      billingOwnerId: string
      creditAccountId: string
      taskType: $Enums.TaskType
      module: $Enums.TaskModule
      requestHash: string
      planCode: string
      ruleVersion: string
      unitCredits: Prisma.Decimal
      billableQuantity: Prisma.Decimal
      estimatedCredits: Prisma.Decimal
      configSnapshotJson: Prisma.JsonValue
      status: $Enums.QuoteStatus
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["taskQuote"]>
    composites: {}
  }

  type TaskQuoteGetPayload<S extends boolean | null | undefined | TaskQuoteDefaultArgs> = $Result.GetResult<Prisma.$TaskQuotePayload, S>

  type TaskQuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskQuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskQuoteCountAggregateInputType | true
    }

  export interface TaskQuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskQuote'], meta: { name: 'TaskQuote' } }
    /**
     * Find zero or one TaskQuote that matches the filter.
     * @param {TaskQuoteFindUniqueArgs} args - Arguments to find a TaskQuote
     * @example
     * // Get one TaskQuote
     * const taskQuote = await prisma.taskQuote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskQuoteFindUniqueArgs>(args: SelectSubset<T, TaskQuoteFindUniqueArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskQuote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskQuoteFindUniqueOrThrowArgs} args - Arguments to find a TaskQuote
     * @example
     * // Get one TaskQuote
     * const taskQuote = await prisma.taskQuote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskQuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskQuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskQuote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteFindFirstArgs} args - Arguments to find a TaskQuote
     * @example
     * // Get one TaskQuote
     * const taskQuote = await prisma.taskQuote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskQuoteFindFirstArgs>(args?: SelectSubset<T, TaskQuoteFindFirstArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskQuote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteFindFirstOrThrowArgs} args - Arguments to find a TaskQuote
     * @example
     * // Get one TaskQuote
     * const taskQuote = await prisma.taskQuote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskQuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskQuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskQuotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskQuotes
     * const taskQuotes = await prisma.taskQuote.findMany()
     * 
     * // Get first 10 TaskQuotes
     * const taskQuotes = await prisma.taskQuote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskQuoteWithIdOnly = await prisma.taskQuote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskQuoteFindManyArgs>(args?: SelectSubset<T, TaskQuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskQuote.
     * @param {TaskQuoteCreateArgs} args - Arguments to create a TaskQuote.
     * @example
     * // Create one TaskQuote
     * const TaskQuote = await prisma.taskQuote.create({
     *   data: {
     *     // ... data to create a TaskQuote
     *   }
     * })
     * 
     */
    create<T extends TaskQuoteCreateArgs>(args: SelectSubset<T, TaskQuoteCreateArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskQuotes.
     * @param {TaskQuoteCreateManyArgs} args - Arguments to create many TaskQuotes.
     * @example
     * // Create many TaskQuotes
     * const taskQuote = await prisma.taskQuote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskQuoteCreateManyArgs>(args?: SelectSubset<T, TaskQuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskQuote.
     * @param {TaskQuoteDeleteArgs} args - Arguments to delete one TaskQuote.
     * @example
     * // Delete one TaskQuote
     * const TaskQuote = await prisma.taskQuote.delete({
     *   where: {
     *     // ... filter to delete one TaskQuote
     *   }
     * })
     * 
     */
    delete<T extends TaskQuoteDeleteArgs>(args: SelectSubset<T, TaskQuoteDeleteArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskQuote.
     * @param {TaskQuoteUpdateArgs} args - Arguments to update one TaskQuote.
     * @example
     * // Update one TaskQuote
     * const taskQuote = await prisma.taskQuote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskQuoteUpdateArgs>(args: SelectSubset<T, TaskQuoteUpdateArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskQuotes.
     * @param {TaskQuoteDeleteManyArgs} args - Arguments to filter TaskQuotes to delete.
     * @example
     * // Delete a few TaskQuotes
     * const { count } = await prisma.taskQuote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskQuoteDeleteManyArgs>(args?: SelectSubset<T, TaskQuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskQuotes
     * const taskQuote = await prisma.taskQuote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskQuoteUpdateManyArgs>(args: SelectSubset<T, TaskQuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskQuote.
     * @param {TaskQuoteUpsertArgs} args - Arguments to update or create a TaskQuote.
     * @example
     * // Update or create a TaskQuote
     * const taskQuote = await prisma.taskQuote.upsert({
     *   create: {
     *     // ... data to create a TaskQuote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskQuote we want to update
     *   }
     * })
     */
    upsert<T extends TaskQuoteUpsertArgs>(args: SelectSubset<T, TaskQuoteUpsertArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteCountArgs} args - Arguments to filter TaskQuotes to count.
     * @example
     * // Count the number of TaskQuotes
     * const count = await prisma.taskQuote.count({
     *   where: {
     *     // ... the filter for the TaskQuotes we want to count
     *   }
     * })
    **/
    count<T extends TaskQuoteCountArgs>(
      args?: Subset<T, TaskQuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskQuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskQuoteAggregateArgs>(args: Subset<T, TaskQuoteAggregateArgs>): Prisma.PrismaPromise<GetTaskQuoteAggregateType<T>>

    /**
     * Group by TaskQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskQuoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskQuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskQuoteGroupByArgs['orderBy'] }
        : { orderBy?: TaskQuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskQuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskQuote model
   */
  readonly fields: TaskQuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskQuote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskQuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends TaskQuote$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskQuote$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskQuote model
   */
  interface TaskQuoteFieldRefs {
    readonly id: FieldRef<"TaskQuote", 'String'>
    readonly userId: FieldRef<"TaskQuote", 'String'>
    readonly billingOwnerType: FieldRef<"TaskQuote", 'OwnerType'>
    readonly billingOwnerId: FieldRef<"TaskQuote", 'String'>
    readonly creditAccountId: FieldRef<"TaskQuote", 'String'>
    readonly taskType: FieldRef<"TaskQuote", 'TaskType'>
    readonly module: FieldRef<"TaskQuote", 'TaskModule'>
    readonly requestHash: FieldRef<"TaskQuote", 'String'>
    readonly planCode: FieldRef<"TaskQuote", 'String'>
    readonly ruleVersion: FieldRef<"TaskQuote", 'String'>
    readonly unitCredits: FieldRef<"TaskQuote", 'Decimal'>
    readonly billableQuantity: FieldRef<"TaskQuote", 'Decimal'>
    readonly estimatedCredits: FieldRef<"TaskQuote", 'Decimal'>
    readonly configSnapshotJson: FieldRef<"TaskQuote", 'Json'>
    readonly status: FieldRef<"TaskQuote", 'QuoteStatus'>
    readonly expiresAt: FieldRef<"TaskQuote", 'DateTime'>
    readonly usedAt: FieldRef<"TaskQuote", 'DateTime'>
    readonly createdAt: FieldRef<"TaskQuote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskQuote findUnique
   */
  export type TaskQuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter, which TaskQuote to fetch.
     */
    where: TaskQuoteWhereUniqueInput
  }

  /**
   * TaskQuote findUniqueOrThrow
   */
  export type TaskQuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter, which TaskQuote to fetch.
     */
    where: TaskQuoteWhereUniqueInput
  }

  /**
   * TaskQuote findFirst
   */
  export type TaskQuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter, which TaskQuote to fetch.
     */
    where?: TaskQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskQuotes to fetch.
     */
    orderBy?: TaskQuoteOrderByWithRelationInput | TaskQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskQuotes.
     */
    cursor?: TaskQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskQuotes.
     */
    distinct?: TaskQuoteScalarFieldEnum | TaskQuoteScalarFieldEnum[]
  }

  /**
   * TaskQuote findFirstOrThrow
   */
  export type TaskQuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter, which TaskQuote to fetch.
     */
    where?: TaskQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskQuotes to fetch.
     */
    orderBy?: TaskQuoteOrderByWithRelationInput | TaskQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskQuotes.
     */
    cursor?: TaskQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskQuotes.
     */
    distinct?: TaskQuoteScalarFieldEnum | TaskQuoteScalarFieldEnum[]
  }

  /**
   * TaskQuote findMany
   */
  export type TaskQuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter, which TaskQuotes to fetch.
     */
    where?: TaskQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskQuotes to fetch.
     */
    orderBy?: TaskQuoteOrderByWithRelationInput | TaskQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskQuotes.
     */
    cursor?: TaskQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskQuotes.
     */
    skip?: number
    distinct?: TaskQuoteScalarFieldEnum | TaskQuoteScalarFieldEnum[]
  }

  /**
   * TaskQuote create
   */
  export type TaskQuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskQuote.
     */
    data: XOR<TaskQuoteCreateInput, TaskQuoteUncheckedCreateInput>
  }

  /**
   * TaskQuote createMany
   */
  export type TaskQuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskQuotes.
     */
    data: TaskQuoteCreateManyInput | TaskQuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskQuote update
   */
  export type TaskQuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskQuote.
     */
    data: XOR<TaskQuoteUpdateInput, TaskQuoteUncheckedUpdateInput>
    /**
     * Choose, which TaskQuote to update.
     */
    where: TaskQuoteWhereUniqueInput
  }

  /**
   * TaskQuote updateMany
   */
  export type TaskQuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskQuotes.
     */
    data: XOR<TaskQuoteUpdateManyMutationInput, TaskQuoteUncheckedUpdateManyInput>
    /**
     * Filter which TaskQuotes to update
     */
    where?: TaskQuoteWhereInput
    /**
     * Limit how many TaskQuotes to update.
     */
    limit?: number
  }

  /**
   * TaskQuote upsert
   */
  export type TaskQuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskQuote to update in case it exists.
     */
    where: TaskQuoteWhereUniqueInput
    /**
     * In case the TaskQuote found by the `where` argument doesn't exist, create a new TaskQuote with this data.
     */
    create: XOR<TaskQuoteCreateInput, TaskQuoteUncheckedCreateInput>
    /**
     * In case the TaskQuote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskQuoteUpdateInput, TaskQuoteUncheckedUpdateInput>
  }

  /**
   * TaskQuote delete
   */
  export type TaskQuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    /**
     * Filter which TaskQuote to delete.
     */
    where: TaskQuoteWhereUniqueInput
  }

  /**
   * TaskQuote deleteMany
   */
  export type TaskQuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskQuotes to delete
     */
    where?: TaskQuoteWhereInput
    /**
     * Limit how many TaskQuotes to delete.
     */
    limit?: number
  }

  /**
   * TaskQuote.tasks
   */
  export type TaskQuote$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    where?: GenerationTaskWhereInput
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    cursor?: GenerationTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * TaskQuote without action
   */
  export type TaskQuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
  }


  /**
   * Model GenerationTask
   */

  export type AggregateGenerationTask = {
    _count: GenerationTaskCountAggregateOutputType | null
    _avg: GenerationTaskAvgAggregateOutputType | null
    _sum: GenerationTaskSumAggregateOutputType | null
    _min: GenerationTaskMinAggregateOutputType | null
    _max: GenerationTaskMaxAggregateOutputType | null
  }

  export type GenerationTaskAvgAggregateOutputType = {
    progress: number | null
    queuePriority: number | null
    queuePosition: number | null
    estimatedCredits: Decimal | null
    settledCredits: Decimal | null
    retryCount: number | null
    version: number | null
  }

  export type GenerationTaskSumAggregateOutputType = {
    progress: number | null
    queuePriority: number | null
    queuePosition: number | null
    estimatedCredits: Decimal | null
    settledCredits: Decimal | null
    retryCount: number | null
    version: number | null
  }

  export type GenerationTaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    projectId: string | null
    parentTaskId: string | null
    quoteId: string | null
    name: string | null
    module: $Enums.TaskModule | null
    scene: string | null
    taskType: $Enums.TaskType | null
    sourcePage: string | null
    batchId: string | null
    status: $Enums.TaskStatus | null
    progress: number | null
    stage: string | null
    queuePriority: number | null
    queuePosition: number | null
    modelId: string | null
    sceneId: string | null
    templateId: string | null
    configVersion: string | null
    billingOwnerType: $Enums.OwnerType | null
    billingOwnerId: string | null
    creditAccountId: string | null
    billingTaskId: string | null
    billingStatus: $Enums.BillingStatus | null
    estimatedCredits: Decimal | null
    settledCredits: Decimal | null
    errorCode: string | null
    errorMessage: string | null
    retryCount: number | null
    cancellable: boolean | null
    deadlineAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    version: number | null
  }

  export type GenerationTaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ownerType: $Enums.OwnerType | null
    ownerId: string | null
    projectId: string | null
    parentTaskId: string | null
    quoteId: string | null
    name: string | null
    module: $Enums.TaskModule | null
    scene: string | null
    taskType: $Enums.TaskType | null
    sourcePage: string | null
    batchId: string | null
    status: $Enums.TaskStatus | null
    progress: number | null
    stage: string | null
    queuePriority: number | null
    queuePosition: number | null
    modelId: string | null
    sceneId: string | null
    templateId: string | null
    configVersion: string | null
    billingOwnerType: $Enums.OwnerType | null
    billingOwnerId: string | null
    creditAccountId: string | null
    billingTaskId: string | null
    billingStatus: $Enums.BillingStatus | null
    estimatedCredits: Decimal | null
    settledCredits: Decimal | null
    errorCode: string | null
    errorMessage: string | null
    retryCount: number | null
    cancellable: boolean | null
    deadlineAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    version: number | null
  }

  export type GenerationTaskCountAggregateOutputType = {
    id: number
    userId: number
    ownerType: number
    ownerId: number
    projectId: number
    parentTaskId: number
    quoteId: number
    name: number
    module: number
    scene: number
    taskType: number
    sourcePage: number
    batchId: number
    status: number
    progress: number
    stage: number
    queuePriority: number
    queuePosition: number
    modelId: number
    sceneId: number
    templateId: number
    configJson: number
    configVersion: number
    billingOwnerType: number
    billingOwnerId: number
    creditAccountId: number
    billingTaskId: number
    billingStatus: number
    estimatedCredits: number
    settledCredits: number
    errorCode: number
    errorMessage: number
    retryCount: number
    cancellable: number
    deadlineAt: number
    startedAt: number
    completedAt: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    version: number
    _all: number
  }


  export type GenerationTaskAvgAggregateInputType = {
    progress?: true
    queuePriority?: true
    queuePosition?: true
    estimatedCredits?: true
    settledCredits?: true
    retryCount?: true
    version?: true
  }

  export type GenerationTaskSumAggregateInputType = {
    progress?: true
    queuePriority?: true
    queuePosition?: true
    estimatedCredits?: true
    settledCredits?: true
    retryCount?: true
    version?: true
  }

  export type GenerationTaskMinAggregateInputType = {
    id?: true
    userId?: true
    ownerType?: true
    ownerId?: true
    projectId?: true
    parentTaskId?: true
    quoteId?: true
    name?: true
    module?: true
    scene?: true
    taskType?: true
    sourcePage?: true
    batchId?: true
    status?: true
    progress?: true
    stage?: true
    queuePriority?: true
    queuePosition?: true
    modelId?: true
    sceneId?: true
    templateId?: true
    configVersion?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    billingTaskId?: true
    billingStatus?: true
    estimatedCredits?: true
    settledCredits?: true
    errorCode?: true
    errorMessage?: true
    retryCount?: true
    cancellable?: true
    deadlineAt?: true
    startedAt?: true
    completedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    version?: true
  }

  export type GenerationTaskMaxAggregateInputType = {
    id?: true
    userId?: true
    ownerType?: true
    ownerId?: true
    projectId?: true
    parentTaskId?: true
    quoteId?: true
    name?: true
    module?: true
    scene?: true
    taskType?: true
    sourcePage?: true
    batchId?: true
    status?: true
    progress?: true
    stage?: true
    queuePriority?: true
    queuePosition?: true
    modelId?: true
    sceneId?: true
    templateId?: true
    configVersion?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    billingTaskId?: true
    billingStatus?: true
    estimatedCredits?: true
    settledCredits?: true
    errorCode?: true
    errorMessage?: true
    retryCount?: true
    cancellable?: true
    deadlineAt?: true
    startedAt?: true
    completedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    version?: true
  }

  export type GenerationTaskCountAggregateInputType = {
    id?: true
    userId?: true
    ownerType?: true
    ownerId?: true
    projectId?: true
    parentTaskId?: true
    quoteId?: true
    name?: true
    module?: true
    scene?: true
    taskType?: true
    sourcePage?: true
    batchId?: true
    status?: true
    progress?: true
    stage?: true
    queuePriority?: true
    queuePosition?: true
    modelId?: true
    sceneId?: true
    templateId?: true
    configJson?: true
    configVersion?: true
    billingOwnerType?: true
    billingOwnerId?: true
    creditAccountId?: true
    billingTaskId?: true
    billingStatus?: true
    estimatedCredits?: true
    settledCredits?: true
    errorCode?: true
    errorMessage?: true
    retryCount?: true
    cancellable?: true
    deadlineAt?: true
    startedAt?: true
    completedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    version?: true
    _all?: true
  }

  export type GenerationTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationTask to aggregate.
     */
    where?: GenerationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationTasks to fetch.
     */
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenerationTasks
    **/
    _count?: true | GenerationTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerationTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerationTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationTaskMaxAggregateInputType
  }

  export type GetGenerationTaskAggregateType<T extends GenerationTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerationTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerationTask[P]>
      : GetScalarType<T[P], AggregateGenerationTask[P]>
  }




  export type GenerationTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationTaskWhereInput
    orderBy?: GenerationTaskOrderByWithAggregationInput | GenerationTaskOrderByWithAggregationInput[]
    by: GenerationTaskScalarFieldEnum[] | GenerationTaskScalarFieldEnum
    having?: GenerationTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationTaskCountAggregateInputType | true
    _avg?: GenerationTaskAvgAggregateInputType
    _sum?: GenerationTaskSumAggregateInputType
    _min?: GenerationTaskMinAggregateInputType
    _max?: GenerationTaskMaxAggregateInputType
  }

  export type GenerationTaskGroupByOutputType = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId: string | null
    parentTaskId: string | null
    quoteId: string | null
    name: string
    module: $Enums.TaskModule
    scene: string | null
    taskType: $Enums.TaskType
    sourcePage: string | null
    batchId: string | null
    status: $Enums.TaskStatus
    progress: number
    stage: string | null
    queuePriority: number
    queuePosition: number | null
    modelId: string | null
    sceneId: string | null
    templateId: string | null
    configJson: JsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal
    settledCredits: Decimal | null
    errorCode: string | null
    errorMessage: string | null
    retryCount: number
    cancellable: boolean
    deadlineAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    version: number
    _count: GenerationTaskCountAggregateOutputType | null
    _avg: GenerationTaskAvgAggregateOutputType | null
    _sum: GenerationTaskSumAggregateOutputType | null
    _min: GenerationTaskMinAggregateOutputType | null
    _max: GenerationTaskMaxAggregateOutputType | null
  }

  type GetGenerationTaskGroupByPayload<T extends GenerationTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationTaskGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationTaskGroupByOutputType[P]>
        }
      >
    >


  export type GenerationTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    projectId?: boolean
    parentTaskId?: boolean
    quoteId?: boolean
    name?: boolean
    module?: boolean
    scene?: boolean
    taskType?: boolean
    sourcePage?: boolean
    batchId?: boolean
    status?: boolean
    progress?: boolean
    stage?: boolean
    queuePriority?: boolean
    queuePosition?: boolean
    modelId?: boolean
    sceneId?: boolean
    templateId?: boolean
    configJson?: boolean
    configVersion?: boolean
    billingOwnerType?: boolean
    billingOwnerId?: boolean
    creditAccountId?: boolean
    billingTaskId?: boolean
    billingStatus?: boolean
    estimatedCredits?: boolean
    settledCredits?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    cancellable?: boolean
    deadlineAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | GenerationTask$projectArgs<ExtArgs>
    quote?: boolean | GenerationTask$quoteArgs<ExtArgs>
    inputs?: boolean | GenerationTask$inputsArgs<ExtArgs>
    outputs?: boolean | GenerationTask$outputsArgs<ExtArgs>
    events?: boolean | GenerationTask$eventsArgs<ExtArgs>
    _count?: boolean | GenerationTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generationTask"]>



  export type GenerationTaskSelectScalar = {
    id?: boolean
    userId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    projectId?: boolean
    parentTaskId?: boolean
    quoteId?: boolean
    name?: boolean
    module?: boolean
    scene?: boolean
    taskType?: boolean
    sourcePage?: boolean
    batchId?: boolean
    status?: boolean
    progress?: boolean
    stage?: boolean
    queuePriority?: boolean
    queuePosition?: boolean
    modelId?: boolean
    sceneId?: boolean
    templateId?: boolean
    configJson?: boolean
    configVersion?: boolean
    billingOwnerType?: boolean
    billingOwnerId?: boolean
    creditAccountId?: boolean
    billingTaskId?: boolean
    billingStatus?: boolean
    estimatedCredits?: boolean
    settledCredits?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    cancellable?: boolean
    deadlineAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    version?: boolean
  }

  export type GenerationTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ownerType" | "ownerId" | "projectId" | "parentTaskId" | "quoteId" | "name" | "module" | "scene" | "taskType" | "sourcePage" | "batchId" | "status" | "progress" | "stage" | "queuePriority" | "queuePosition" | "modelId" | "sceneId" | "templateId" | "configJson" | "configVersion" | "billingOwnerType" | "billingOwnerId" | "creditAccountId" | "billingTaskId" | "billingStatus" | "estimatedCredits" | "settledCredits" | "errorCode" | "errorMessage" | "retryCount" | "cancellable" | "deadlineAt" | "startedAt" | "completedAt" | "cancelledAt" | "createdAt" | "updatedAt" | "deletedAt" | "version", ExtArgs["result"]["generationTask"]>
  export type GenerationTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | GenerationTask$projectArgs<ExtArgs>
    quote?: boolean | GenerationTask$quoteArgs<ExtArgs>
    inputs?: boolean | GenerationTask$inputsArgs<ExtArgs>
    outputs?: boolean | GenerationTask$outputsArgs<ExtArgs>
    events?: boolean | GenerationTask$eventsArgs<ExtArgs>
    _count?: boolean | GenerationTaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenerationTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenerationTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs> | null
      quote: Prisma.$TaskQuotePayload<ExtArgs> | null
      inputs: Prisma.$TaskInputPayload<ExtArgs>[]
      outputs: Prisma.$TaskOutputPayload<ExtArgs>[]
      events: Prisma.$TaskEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ownerType: $Enums.OwnerType
      ownerId: string
      projectId: string | null
      parentTaskId: string | null
      quoteId: string | null
      name: string
      module: $Enums.TaskModule
      scene: string | null
      taskType: $Enums.TaskType
      sourcePage: string | null
      batchId: string | null
      status: $Enums.TaskStatus
      progress: number
      stage: string | null
      queuePriority: number
      queuePosition: number | null
      modelId: string | null
      sceneId: string | null
      templateId: string | null
      configJson: Prisma.JsonValue
      configVersion: string
      billingOwnerType: $Enums.OwnerType
      billingOwnerId: string
      creditAccountId: string
      billingTaskId: string | null
      billingStatus: $Enums.BillingStatus
      estimatedCredits: Prisma.Decimal
      settledCredits: Prisma.Decimal | null
      errorCode: string | null
      errorMessage: string | null
      retryCount: number
      cancellable: boolean
      deadlineAt: Date | null
      startedAt: Date | null
      completedAt: Date | null
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      version: number
    }, ExtArgs["result"]["generationTask"]>
    composites: {}
  }

  type GenerationTaskGetPayload<S extends boolean | null | undefined | GenerationTaskDefaultArgs> = $Result.GetResult<Prisma.$GenerationTaskPayload, S>

  type GenerationTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationTaskCountAggregateInputType | true
    }

  export interface GenerationTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenerationTask'], meta: { name: 'GenerationTask' } }
    /**
     * Find zero or one GenerationTask that matches the filter.
     * @param {GenerationTaskFindUniqueArgs} args - Arguments to find a GenerationTask
     * @example
     * // Get one GenerationTask
     * const generationTask = await prisma.generationTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationTaskFindUniqueArgs>(args: SelectSubset<T, GenerationTaskFindUniqueArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenerationTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationTaskFindUniqueOrThrowArgs} args - Arguments to find a GenerationTask
     * @example
     * // Get one GenerationTask
     * const generationTask = await prisma.generationTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskFindFirstArgs} args - Arguments to find a GenerationTask
     * @example
     * // Get one GenerationTask
     * const generationTask = await prisma.generationTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationTaskFindFirstArgs>(args?: SelectSubset<T, GenerationTaskFindFirstArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskFindFirstOrThrowArgs} args - Arguments to find a GenerationTask
     * @example
     * // Get one GenerationTask
     * const generationTask = await prisma.generationTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenerationTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenerationTasks
     * const generationTasks = await prisma.generationTask.findMany()
     * 
     * // Get first 10 GenerationTasks
     * const generationTasks = await prisma.generationTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationTaskWithIdOnly = await prisma.generationTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationTaskFindManyArgs>(args?: SelectSubset<T, GenerationTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenerationTask.
     * @param {GenerationTaskCreateArgs} args - Arguments to create a GenerationTask.
     * @example
     * // Create one GenerationTask
     * const GenerationTask = await prisma.generationTask.create({
     *   data: {
     *     // ... data to create a GenerationTask
     *   }
     * })
     * 
     */
    create<T extends GenerationTaskCreateArgs>(args: SelectSubset<T, GenerationTaskCreateArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenerationTasks.
     * @param {GenerationTaskCreateManyArgs} args - Arguments to create many GenerationTasks.
     * @example
     * // Create many GenerationTasks
     * const generationTask = await prisma.generationTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationTaskCreateManyArgs>(args?: SelectSubset<T, GenerationTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenerationTask.
     * @param {GenerationTaskDeleteArgs} args - Arguments to delete one GenerationTask.
     * @example
     * // Delete one GenerationTask
     * const GenerationTask = await prisma.generationTask.delete({
     *   where: {
     *     // ... filter to delete one GenerationTask
     *   }
     * })
     * 
     */
    delete<T extends GenerationTaskDeleteArgs>(args: SelectSubset<T, GenerationTaskDeleteArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenerationTask.
     * @param {GenerationTaskUpdateArgs} args - Arguments to update one GenerationTask.
     * @example
     * // Update one GenerationTask
     * const generationTask = await prisma.generationTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationTaskUpdateArgs>(args: SelectSubset<T, GenerationTaskUpdateArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenerationTasks.
     * @param {GenerationTaskDeleteManyArgs} args - Arguments to filter GenerationTasks to delete.
     * @example
     * // Delete a few GenerationTasks
     * const { count } = await prisma.generationTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationTaskDeleteManyArgs>(args?: SelectSubset<T, GenerationTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenerationTasks
     * const generationTask = await prisma.generationTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationTaskUpdateManyArgs>(args: SelectSubset<T, GenerationTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenerationTask.
     * @param {GenerationTaskUpsertArgs} args - Arguments to update or create a GenerationTask.
     * @example
     * // Update or create a GenerationTask
     * const generationTask = await prisma.generationTask.upsert({
     *   create: {
     *     // ... data to create a GenerationTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenerationTask we want to update
     *   }
     * })
     */
    upsert<T extends GenerationTaskUpsertArgs>(args: SelectSubset<T, GenerationTaskUpsertArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenerationTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskCountArgs} args - Arguments to filter GenerationTasks to count.
     * @example
     * // Count the number of GenerationTasks
     * const count = await prisma.generationTask.count({
     *   where: {
     *     // ... the filter for the GenerationTasks we want to count
     *   }
     * })
    **/
    count<T extends GenerationTaskCountArgs>(
      args?: Subset<T, GenerationTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenerationTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenerationTaskAggregateArgs>(args: Subset<T, GenerationTaskAggregateArgs>): Prisma.PrismaPromise<GetGenerationTaskAggregateType<T>>

    /**
     * Group by GenerationTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenerationTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationTaskGroupByArgs['orderBy'] }
        : { orderBy?: GenerationTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenerationTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenerationTask model
   */
  readonly fields: GenerationTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenerationTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends GenerationTask$projectArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTask$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quote<T extends GenerationTask$quoteArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTask$quoteArgs<ExtArgs>>): Prisma__TaskQuoteClient<$Result.GetResult<Prisma.$TaskQuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inputs<T extends GenerationTask$inputsArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTask$inputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outputs<T extends GenerationTask$outputsArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTask$outputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends GenerationTask$eventsArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTask$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GenerationTask model
   */
  interface GenerationTaskFieldRefs {
    readonly id: FieldRef<"GenerationTask", 'String'>
    readonly userId: FieldRef<"GenerationTask", 'String'>
    readonly ownerType: FieldRef<"GenerationTask", 'OwnerType'>
    readonly ownerId: FieldRef<"GenerationTask", 'String'>
    readonly projectId: FieldRef<"GenerationTask", 'String'>
    readonly parentTaskId: FieldRef<"GenerationTask", 'String'>
    readonly quoteId: FieldRef<"GenerationTask", 'String'>
    readonly name: FieldRef<"GenerationTask", 'String'>
    readonly module: FieldRef<"GenerationTask", 'TaskModule'>
    readonly scene: FieldRef<"GenerationTask", 'String'>
    readonly taskType: FieldRef<"GenerationTask", 'TaskType'>
    readonly sourcePage: FieldRef<"GenerationTask", 'String'>
    readonly batchId: FieldRef<"GenerationTask", 'String'>
    readonly status: FieldRef<"GenerationTask", 'TaskStatus'>
    readonly progress: FieldRef<"GenerationTask", 'Int'>
    readonly stage: FieldRef<"GenerationTask", 'String'>
    readonly queuePriority: FieldRef<"GenerationTask", 'Int'>
    readonly queuePosition: FieldRef<"GenerationTask", 'Int'>
    readonly modelId: FieldRef<"GenerationTask", 'String'>
    readonly sceneId: FieldRef<"GenerationTask", 'String'>
    readonly templateId: FieldRef<"GenerationTask", 'String'>
    readonly configJson: FieldRef<"GenerationTask", 'Json'>
    readonly configVersion: FieldRef<"GenerationTask", 'String'>
    readonly billingOwnerType: FieldRef<"GenerationTask", 'OwnerType'>
    readonly billingOwnerId: FieldRef<"GenerationTask", 'String'>
    readonly creditAccountId: FieldRef<"GenerationTask", 'String'>
    readonly billingTaskId: FieldRef<"GenerationTask", 'String'>
    readonly billingStatus: FieldRef<"GenerationTask", 'BillingStatus'>
    readonly estimatedCredits: FieldRef<"GenerationTask", 'Decimal'>
    readonly settledCredits: FieldRef<"GenerationTask", 'Decimal'>
    readonly errorCode: FieldRef<"GenerationTask", 'String'>
    readonly errorMessage: FieldRef<"GenerationTask", 'String'>
    readonly retryCount: FieldRef<"GenerationTask", 'Int'>
    readonly cancellable: FieldRef<"GenerationTask", 'Boolean'>
    readonly deadlineAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly startedAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly completedAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly cancelledAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly createdAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly updatedAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly deletedAt: FieldRef<"GenerationTask", 'DateTime'>
    readonly version: FieldRef<"GenerationTask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GenerationTask findUnique
   */
  export type GenerationTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter, which GenerationTask to fetch.
     */
    where: GenerationTaskWhereUniqueInput
  }

  /**
   * GenerationTask findUniqueOrThrow
   */
  export type GenerationTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter, which GenerationTask to fetch.
     */
    where: GenerationTaskWhereUniqueInput
  }

  /**
   * GenerationTask findFirst
   */
  export type GenerationTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter, which GenerationTask to fetch.
     */
    where?: GenerationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationTasks to fetch.
     */
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationTasks.
     */
    cursor?: GenerationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationTasks.
     */
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * GenerationTask findFirstOrThrow
   */
  export type GenerationTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter, which GenerationTask to fetch.
     */
    where?: GenerationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationTasks to fetch.
     */
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationTasks.
     */
    cursor?: GenerationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationTasks.
     */
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * GenerationTask findMany
   */
  export type GenerationTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter, which GenerationTasks to fetch.
     */
    where?: GenerationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationTasks to fetch.
     */
    orderBy?: GenerationTaskOrderByWithRelationInput | GenerationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenerationTasks.
     */
    cursor?: GenerationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationTasks.
     */
    skip?: number
    distinct?: GenerationTaskScalarFieldEnum | GenerationTaskScalarFieldEnum[]
  }

  /**
   * GenerationTask create
   */
  export type GenerationTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a GenerationTask.
     */
    data: XOR<GenerationTaskCreateInput, GenerationTaskUncheckedCreateInput>
  }

  /**
   * GenerationTask createMany
   */
  export type GenerationTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenerationTasks.
     */
    data: GenerationTaskCreateManyInput | GenerationTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationTask update
   */
  export type GenerationTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a GenerationTask.
     */
    data: XOR<GenerationTaskUpdateInput, GenerationTaskUncheckedUpdateInput>
    /**
     * Choose, which GenerationTask to update.
     */
    where: GenerationTaskWhereUniqueInput
  }

  /**
   * GenerationTask updateMany
   */
  export type GenerationTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenerationTasks.
     */
    data: XOR<GenerationTaskUpdateManyMutationInput, GenerationTaskUncheckedUpdateManyInput>
    /**
     * Filter which GenerationTasks to update
     */
    where?: GenerationTaskWhereInput
    /**
     * Limit how many GenerationTasks to update.
     */
    limit?: number
  }

  /**
   * GenerationTask upsert
   */
  export type GenerationTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the GenerationTask to update in case it exists.
     */
    where: GenerationTaskWhereUniqueInput
    /**
     * In case the GenerationTask found by the `where` argument doesn't exist, create a new GenerationTask with this data.
     */
    create: XOR<GenerationTaskCreateInput, GenerationTaskUncheckedCreateInput>
    /**
     * In case the GenerationTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationTaskUpdateInput, GenerationTaskUncheckedUpdateInput>
  }

  /**
   * GenerationTask delete
   */
  export type GenerationTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
    /**
     * Filter which GenerationTask to delete.
     */
    where: GenerationTaskWhereUniqueInput
  }

  /**
   * GenerationTask deleteMany
   */
  export type GenerationTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationTasks to delete
     */
    where?: GenerationTaskWhereInput
    /**
     * Limit how many GenerationTasks to delete.
     */
    limit?: number
  }

  /**
   * GenerationTask.project
   */
  export type GenerationTask$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * GenerationTask.quote
   */
  export type GenerationTask$quoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskQuote
     */
    select?: TaskQuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskQuote
     */
    omit?: TaskQuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskQuoteInclude<ExtArgs> | null
    where?: TaskQuoteWhereInput
  }

  /**
   * GenerationTask.inputs
   */
  export type GenerationTask$inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    where?: TaskInputWhereInput
    orderBy?: TaskInputOrderByWithRelationInput | TaskInputOrderByWithRelationInput[]
    cursor?: TaskInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskInputScalarFieldEnum | TaskInputScalarFieldEnum[]
  }

  /**
   * GenerationTask.outputs
   */
  export type GenerationTask$outputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    where?: TaskOutputWhereInput
    orderBy?: TaskOutputOrderByWithRelationInput | TaskOutputOrderByWithRelationInput[]
    cursor?: TaskOutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskOutputScalarFieldEnum | TaskOutputScalarFieldEnum[]
  }

  /**
   * GenerationTask.events
   */
  export type GenerationTask$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    where?: TaskEventWhereInput
    orderBy?: TaskEventOrderByWithRelationInput | TaskEventOrderByWithRelationInput[]
    cursor?: TaskEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskEventScalarFieldEnum | TaskEventScalarFieldEnum[]
  }

  /**
   * GenerationTask without action
   */
  export type GenerationTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationTask
     */
    select?: GenerationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationTask
     */
    omit?: GenerationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationTaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskInput
   */

  export type AggregateTaskInput = {
    _count: TaskInputCountAggregateOutputType | null
    _avg: TaskInputAvgAggregateOutputType | null
    _sum: TaskInputSumAggregateOutputType | null
    _min: TaskInputMinAggregateOutputType | null
    _max: TaskInputMaxAggregateOutputType | null
  }

  export type TaskInputAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskInputSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskInputMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    assetId: string | null
    inputRole: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type TaskInputMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    assetId: string | null
    inputRole: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type TaskInputCountAggregateOutputType = {
    id: number
    taskId: number
    assetId: number
    inputRole: number
    sortOrder: number
    snapshotJson: number
    createdAt: number
    _all: number
  }


  export type TaskInputAvgAggregateInputType = {
    sortOrder?: true
  }

  export type TaskInputSumAggregateInputType = {
    sortOrder?: true
  }

  export type TaskInputMinAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    inputRole?: true
    sortOrder?: true
    createdAt?: true
  }

  export type TaskInputMaxAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    inputRole?: true
    sortOrder?: true
    createdAt?: true
  }

  export type TaskInputCountAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    inputRole?: true
    sortOrder?: true
    snapshotJson?: true
    createdAt?: true
    _all?: true
  }

  export type TaskInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskInput to aggregate.
     */
    where?: TaskInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInputs to fetch.
     */
    orderBy?: TaskInputOrderByWithRelationInput | TaskInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskInputs
    **/
    _count?: true | TaskInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskInputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskInputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskInputMaxAggregateInputType
  }

  export type GetTaskInputAggregateType<T extends TaskInputAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskInput[P]>
      : GetScalarType<T[P], AggregateTaskInput[P]>
  }




  export type TaskInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskInputWhereInput
    orderBy?: TaskInputOrderByWithAggregationInput | TaskInputOrderByWithAggregationInput[]
    by: TaskInputScalarFieldEnum[] | TaskInputScalarFieldEnum
    having?: TaskInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskInputCountAggregateInputType | true
    _avg?: TaskInputAvgAggregateInputType
    _sum?: TaskInputSumAggregateInputType
    _min?: TaskInputMinAggregateInputType
    _max?: TaskInputMaxAggregateInputType
  }

  export type TaskInputGroupByOutputType = {
    id: string
    taskId: string
    assetId: string
    inputRole: string
    sortOrder: number
    snapshotJson: JsonValue | null
    createdAt: Date
    _count: TaskInputCountAggregateOutputType | null
    _avg: TaskInputAvgAggregateOutputType | null
    _sum: TaskInputSumAggregateOutputType | null
    _min: TaskInputMinAggregateOutputType | null
    _max: TaskInputMaxAggregateOutputType | null
  }

  type GetTaskInputGroupByPayload<T extends TaskInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskInputGroupByOutputType[P]>
            : GetScalarType<T[P], TaskInputGroupByOutputType[P]>
        }
      >
    >


  export type TaskInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    assetId?: boolean
    inputRole?: boolean
    sortOrder?: boolean
    snapshotJson?: boolean
    createdAt?: boolean
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskInput"]>



  export type TaskInputSelectScalar = {
    id?: boolean
    taskId?: boolean
    assetId?: boolean
    inputRole?: boolean
    sortOrder?: boolean
    snapshotJson?: boolean
    createdAt?: boolean
  }

  export type TaskInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "assetId" | "inputRole" | "sortOrder" | "snapshotJson" | "createdAt", ExtArgs["result"]["taskInput"]>
  export type TaskInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }

  export type $TaskInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskInput"
    objects: {
      task: Prisma.$GenerationTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      assetId: string
      inputRole: string
      sortOrder: number
      snapshotJson: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["taskInput"]>
    composites: {}
  }

  type TaskInputGetPayload<S extends boolean | null | undefined | TaskInputDefaultArgs> = $Result.GetResult<Prisma.$TaskInputPayload, S>

  type TaskInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskInputCountAggregateInputType | true
    }

  export interface TaskInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskInput'], meta: { name: 'TaskInput' } }
    /**
     * Find zero or one TaskInput that matches the filter.
     * @param {TaskInputFindUniqueArgs} args - Arguments to find a TaskInput
     * @example
     * // Get one TaskInput
     * const taskInput = await prisma.taskInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskInputFindUniqueArgs>(args: SelectSubset<T, TaskInputFindUniqueArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskInputFindUniqueOrThrowArgs} args - Arguments to find a TaskInput
     * @example
     * // Get one TaskInput
     * const taskInput = await prisma.taskInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskInputFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputFindFirstArgs} args - Arguments to find a TaskInput
     * @example
     * // Get one TaskInput
     * const taskInput = await prisma.taskInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskInputFindFirstArgs>(args?: SelectSubset<T, TaskInputFindFirstArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputFindFirstOrThrowArgs} args - Arguments to find a TaskInput
     * @example
     * // Get one TaskInput
     * const taskInput = await prisma.taskInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskInputFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskInputs
     * const taskInputs = await prisma.taskInput.findMany()
     * 
     * // Get first 10 TaskInputs
     * const taskInputs = await prisma.taskInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskInputWithIdOnly = await prisma.taskInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskInputFindManyArgs>(args?: SelectSubset<T, TaskInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskInput.
     * @param {TaskInputCreateArgs} args - Arguments to create a TaskInput.
     * @example
     * // Create one TaskInput
     * const TaskInput = await prisma.taskInput.create({
     *   data: {
     *     // ... data to create a TaskInput
     *   }
     * })
     * 
     */
    create<T extends TaskInputCreateArgs>(args: SelectSubset<T, TaskInputCreateArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskInputs.
     * @param {TaskInputCreateManyArgs} args - Arguments to create many TaskInputs.
     * @example
     * // Create many TaskInputs
     * const taskInput = await prisma.taskInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskInputCreateManyArgs>(args?: SelectSubset<T, TaskInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskInput.
     * @param {TaskInputDeleteArgs} args - Arguments to delete one TaskInput.
     * @example
     * // Delete one TaskInput
     * const TaskInput = await prisma.taskInput.delete({
     *   where: {
     *     // ... filter to delete one TaskInput
     *   }
     * })
     * 
     */
    delete<T extends TaskInputDeleteArgs>(args: SelectSubset<T, TaskInputDeleteArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskInput.
     * @param {TaskInputUpdateArgs} args - Arguments to update one TaskInput.
     * @example
     * // Update one TaskInput
     * const taskInput = await prisma.taskInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskInputUpdateArgs>(args: SelectSubset<T, TaskInputUpdateArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskInputs.
     * @param {TaskInputDeleteManyArgs} args - Arguments to filter TaskInputs to delete.
     * @example
     * // Delete a few TaskInputs
     * const { count } = await prisma.taskInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskInputDeleteManyArgs>(args?: SelectSubset<T, TaskInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskInputs
     * const taskInput = await prisma.taskInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskInputUpdateManyArgs>(args: SelectSubset<T, TaskInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskInput.
     * @param {TaskInputUpsertArgs} args - Arguments to update or create a TaskInput.
     * @example
     * // Update or create a TaskInput
     * const taskInput = await prisma.taskInput.upsert({
     *   create: {
     *     // ... data to create a TaskInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskInput we want to update
     *   }
     * })
     */
    upsert<T extends TaskInputUpsertArgs>(args: SelectSubset<T, TaskInputUpsertArgs<ExtArgs>>): Prisma__TaskInputClient<$Result.GetResult<Prisma.$TaskInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputCountArgs} args - Arguments to filter TaskInputs to count.
     * @example
     * // Count the number of TaskInputs
     * const count = await prisma.taskInput.count({
     *   where: {
     *     // ... the filter for the TaskInputs we want to count
     *   }
     * })
    **/
    count<T extends TaskInputCountArgs>(
      args?: Subset<T, TaskInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskInputAggregateArgs>(args: Subset<T, TaskInputAggregateArgs>): Prisma.PrismaPromise<GetTaskInputAggregateType<T>>

    /**
     * Group by TaskInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskInputGroupByArgs['orderBy'] }
        : { orderBy?: TaskInputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskInput model
   */
  readonly fields: TaskInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends GenerationTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTaskDefaultArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskInput model
   */
  interface TaskInputFieldRefs {
    readonly id: FieldRef<"TaskInput", 'String'>
    readonly taskId: FieldRef<"TaskInput", 'String'>
    readonly assetId: FieldRef<"TaskInput", 'String'>
    readonly inputRole: FieldRef<"TaskInput", 'String'>
    readonly sortOrder: FieldRef<"TaskInput", 'Int'>
    readonly snapshotJson: FieldRef<"TaskInput", 'Json'>
    readonly createdAt: FieldRef<"TaskInput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskInput findUnique
   */
  export type TaskInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter, which TaskInput to fetch.
     */
    where: TaskInputWhereUniqueInput
  }

  /**
   * TaskInput findUniqueOrThrow
   */
  export type TaskInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter, which TaskInput to fetch.
     */
    where: TaskInputWhereUniqueInput
  }

  /**
   * TaskInput findFirst
   */
  export type TaskInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter, which TaskInput to fetch.
     */
    where?: TaskInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInputs to fetch.
     */
    orderBy?: TaskInputOrderByWithRelationInput | TaskInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskInputs.
     */
    cursor?: TaskInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskInputs.
     */
    distinct?: TaskInputScalarFieldEnum | TaskInputScalarFieldEnum[]
  }

  /**
   * TaskInput findFirstOrThrow
   */
  export type TaskInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter, which TaskInput to fetch.
     */
    where?: TaskInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInputs to fetch.
     */
    orderBy?: TaskInputOrderByWithRelationInput | TaskInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskInputs.
     */
    cursor?: TaskInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskInputs.
     */
    distinct?: TaskInputScalarFieldEnum | TaskInputScalarFieldEnum[]
  }

  /**
   * TaskInput findMany
   */
  export type TaskInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter, which TaskInputs to fetch.
     */
    where?: TaskInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInputs to fetch.
     */
    orderBy?: TaskInputOrderByWithRelationInput | TaskInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskInputs.
     */
    cursor?: TaskInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInputs.
     */
    skip?: number
    distinct?: TaskInputScalarFieldEnum | TaskInputScalarFieldEnum[]
  }

  /**
   * TaskInput create
   */
  export type TaskInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskInput.
     */
    data: XOR<TaskInputCreateInput, TaskInputUncheckedCreateInput>
  }

  /**
   * TaskInput createMany
   */
  export type TaskInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskInputs.
     */
    data: TaskInputCreateManyInput | TaskInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskInput update
   */
  export type TaskInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskInput.
     */
    data: XOR<TaskInputUpdateInput, TaskInputUncheckedUpdateInput>
    /**
     * Choose, which TaskInput to update.
     */
    where: TaskInputWhereUniqueInput
  }

  /**
   * TaskInput updateMany
   */
  export type TaskInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskInputs.
     */
    data: XOR<TaskInputUpdateManyMutationInput, TaskInputUncheckedUpdateManyInput>
    /**
     * Filter which TaskInputs to update
     */
    where?: TaskInputWhereInput
    /**
     * Limit how many TaskInputs to update.
     */
    limit?: number
  }

  /**
   * TaskInput upsert
   */
  export type TaskInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskInput to update in case it exists.
     */
    where: TaskInputWhereUniqueInput
    /**
     * In case the TaskInput found by the `where` argument doesn't exist, create a new TaskInput with this data.
     */
    create: XOR<TaskInputCreateInput, TaskInputUncheckedCreateInput>
    /**
     * In case the TaskInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskInputUpdateInput, TaskInputUncheckedUpdateInput>
  }

  /**
   * TaskInput delete
   */
  export type TaskInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
    /**
     * Filter which TaskInput to delete.
     */
    where: TaskInputWhereUniqueInput
  }

  /**
   * TaskInput deleteMany
   */
  export type TaskInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskInputs to delete
     */
    where?: TaskInputWhereInput
    /**
     * Limit how many TaskInputs to delete.
     */
    limit?: number
  }

  /**
   * TaskInput without action
   */
  export type TaskInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInput
     */
    select?: TaskInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInput
     */
    omit?: TaskInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInputInclude<ExtArgs> | null
  }


  /**
   * Model TaskOutput
   */

  export type AggregateTaskOutput = {
    _count: TaskOutputCountAggregateOutputType | null
    _avg: TaskOutputAvgAggregateOutputType | null
    _sum: TaskOutputSumAggregateOutputType | null
    _min: TaskOutputMinAggregateOutputType | null
    _max: TaskOutputMaxAggregateOutputType | null
  }

  export type TaskOutputAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskOutputSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskOutputMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    assetId: string | null
    outputType: string | null
    sortOrder: number | null
    providerOutputRef: string | null
    reviewStatus: string | null
    createdAt: Date | null
  }

  export type TaskOutputMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    assetId: string | null
    outputType: string | null
    sortOrder: number | null
    providerOutputRef: string | null
    reviewStatus: string | null
    createdAt: Date | null
  }

  export type TaskOutputCountAggregateOutputType = {
    id: number
    taskId: number
    assetId: number
    outputType: number
    sortOrder: number
    providerOutputRef: number
    reviewStatus: number
    createdAt: number
    _all: number
  }


  export type TaskOutputAvgAggregateInputType = {
    sortOrder?: true
  }

  export type TaskOutputSumAggregateInputType = {
    sortOrder?: true
  }

  export type TaskOutputMinAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    outputType?: true
    sortOrder?: true
    providerOutputRef?: true
    reviewStatus?: true
    createdAt?: true
  }

  export type TaskOutputMaxAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    outputType?: true
    sortOrder?: true
    providerOutputRef?: true
    reviewStatus?: true
    createdAt?: true
  }

  export type TaskOutputCountAggregateInputType = {
    id?: true
    taskId?: true
    assetId?: true
    outputType?: true
    sortOrder?: true
    providerOutputRef?: true
    reviewStatus?: true
    createdAt?: true
    _all?: true
  }

  export type TaskOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOutput to aggregate.
     */
    where?: TaskOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOutputs to fetch.
     */
    orderBy?: TaskOutputOrderByWithRelationInput | TaskOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskOutputs
    **/
    _count?: true | TaskOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskOutputMaxAggregateInputType
  }

  export type GetTaskOutputAggregateType<T extends TaskOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskOutput[P]>
      : GetScalarType<T[P], AggregateTaskOutput[P]>
  }




  export type TaskOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskOutputWhereInput
    orderBy?: TaskOutputOrderByWithAggregationInput | TaskOutputOrderByWithAggregationInput[]
    by: TaskOutputScalarFieldEnum[] | TaskOutputScalarFieldEnum
    having?: TaskOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskOutputCountAggregateInputType | true
    _avg?: TaskOutputAvgAggregateInputType
    _sum?: TaskOutputSumAggregateInputType
    _min?: TaskOutputMinAggregateInputType
    _max?: TaskOutputMaxAggregateInputType
  }

  export type TaskOutputGroupByOutputType = {
    id: string
    taskId: string
    assetId: string
    outputType: string
    sortOrder: number
    providerOutputRef: string | null
    reviewStatus: string
    createdAt: Date
    _count: TaskOutputCountAggregateOutputType | null
    _avg: TaskOutputAvgAggregateOutputType | null
    _sum: TaskOutputSumAggregateOutputType | null
    _min: TaskOutputMinAggregateOutputType | null
    _max: TaskOutputMaxAggregateOutputType | null
  }

  type GetTaskOutputGroupByPayload<T extends TaskOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskOutputGroupByOutputType[P]>
            : GetScalarType<T[P], TaskOutputGroupByOutputType[P]>
        }
      >
    >


  export type TaskOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    assetId?: boolean
    outputType?: boolean
    sortOrder?: boolean
    providerOutputRef?: boolean
    reviewStatus?: boolean
    createdAt?: boolean
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskOutput"]>



  export type TaskOutputSelectScalar = {
    id?: boolean
    taskId?: boolean
    assetId?: boolean
    outputType?: boolean
    sortOrder?: boolean
    providerOutputRef?: boolean
    reviewStatus?: boolean
    createdAt?: boolean
  }

  export type TaskOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "assetId" | "outputType" | "sortOrder" | "providerOutputRef" | "reviewStatus" | "createdAt", ExtArgs["result"]["taskOutput"]>
  export type TaskOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }

  export type $TaskOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskOutput"
    objects: {
      task: Prisma.$GenerationTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      assetId: string
      outputType: string
      sortOrder: number
      providerOutputRef: string | null
      reviewStatus: string
      createdAt: Date
    }, ExtArgs["result"]["taskOutput"]>
    composites: {}
  }

  type TaskOutputGetPayload<S extends boolean | null | undefined | TaskOutputDefaultArgs> = $Result.GetResult<Prisma.$TaskOutputPayload, S>

  type TaskOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskOutputCountAggregateInputType | true
    }

  export interface TaskOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskOutput'], meta: { name: 'TaskOutput' } }
    /**
     * Find zero or one TaskOutput that matches the filter.
     * @param {TaskOutputFindUniqueArgs} args - Arguments to find a TaskOutput
     * @example
     * // Get one TaskOutput
     * const taskOutput = await prisma.taskOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskOutputFindUniqueArgs>(args: SelectSubset<T, TaskOutputFindUniqueArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskOutputFindUniqueOrThrowArgs} args - Arguments to find a TaskOutput
     * @example
     * // Get one TaskOutput
     * const taskOutput = await prisma.taskOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputFindFirstArgs} args - Arguments to find a TaskOutput
     * @example
     * // Get one TaskOutput
     * const taskOutput = await prisma.taskOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskOutputFindFirstArgs>(args?: SelectSubset<T, TaskOutputFindFirstArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputFindFirstOrThrowArgs} args - Arguments to find a TaskOutput
     * @example
     * // Get one TaskOutput
     * const taskOutput = await prisma.taskOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskOutputs
     * const taskOutputs = await prisma.taskOutput.findMany()
     * 
     * // Get first 10 TaskOutputs
     * const taskOutputs = await prisma.taskOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskOutputWithIdOnly = await prisma.taskOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskOutputFindManyArgs>(args?: SelectSubset<T, TaskOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskOutput.
     * @param {TaskOutputCreateArgs} args - Arguments to create a TaskOutput.
     * @example
     * // Create one TaskOutput
     * const TaskOutput = await prisma.taskOutput.create({
     *   data: {
     *     // ... data to create a TaskOutput
     *   }
     * })
     * 
     */
    create<T extends TaskOutputCreateArgs>(args: SelectSubset<T, TaskOutputCreateArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskOutputs.
     * @param {TaskOutputCreateManyArgs} args - Arguments to create many TaskOutputs.
     * @example
     * // Create many TaskOutputs
     * const taskOutput = await prisma.taskOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskOutputCreateManyArgs>(args?: SelectSubset<T, TaskOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskOutput.
     * @param {TaskOutputDeleteArgs} args - Arguments to delete one TaskOutput.
     * @example
     * // Delete one TaskOutput
     * const TaskOutput = await prisma.taskOutput.delete({
     *   where: {
     *     // ... filter to delete one TaskOutput
     *   }
     * })
     * 
     */
    delete<T extends TaskOutputDeleteArgs>(args: SelectSubset<T, TaskOutputDeleteArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskOutput.
     * @param {TaskOutputUpdateArgs} args - Arguments to update one TaskOutput.
     * @example
     * // Update one TaskOutput
     * const taskOutput = await prisma.taskOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskOutputUpdateArgs>(args: SelectSubset<T, TaskOutputUpdateArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskOutputs.
     * @param {TaskOutputDeleteManyArgs} args - Arguments to filter TaskOutputs to delete.
     * @example
     * // Delete a few TaskOutputs
     * const { count } = await prisma.taskOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskOutputDeleteManyArgs>(args?: SelectSubset<T, TaskOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskOutputs
     * const taskOutput = await prisma.taskOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskOutputUpdateManyArgs>(args: SelectSubset<T, TaskOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskOutput.
     * @param {TaskOutputUpsertArgs} args - Arguments to update or create a TaskOutput.
     * @example
     * // Update or create a TaskOutput
     * const taskOutput = await prisma.taskOutput.upsert({
     *   create: {
     *     // ... data to create a TaskOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskOutput we want to update
     *   }
     * })
     */
    upsert<T extends TaskOutputUpsertArgs>(args: SelectSubset<T, TaskOutputUpsertArgs<ExtArgs>>): Prisma__TaskOutputClient<$Result.GetResult<Prisma.$TaskOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputCountArgs} args - Arguments to filter TaskOutputs to count.
     * @example
     * // Count the number of TaskOutputs
     * const count = await prisma.taskOutput.count({
     *   where: {
     *     // ... the filter for the TaskOutputs we want to count
     *   }
     * })
    **/
    count<T extends TaskOutputCountArgs>(
      args?: Subset<T, TaskOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskOutputAggregateArgs>(args: Subset<T, TaskOutputAggregateArgs>): Prisma.PrismaPromise<GetTaskOutputAggregateType<T>>

    /**
     * Group by TaskOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOutputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskOutputGroupByArgs['orderBy'] }
        : { orderBy?: TaskOutputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskOutput model
   */
  readonly fields: TaskOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends GenerationTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTaskDefaultArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskOutput model
   */
  interface TaskOutputFieldRefs {
    readonly id: FieldRef<"TaskOutput", 'String'>
    readonly taskId: FieldRef<"TaskOutput", 'String'>
    readonly assetId: FieldRef<"TaskOutput", 'String'>
    readonly outputType: FieldRef<"TaskOutput", 'String'>
    readonly sortOrder: FieldRef<"TaskOutput", 'Int'>
    readonly providerOutputRef: FieldRef<"TaskOutput", 'String'>
    readonly reviewStatus: FieldRef<"TaskOutput", 'String'>
    readonly createdAt: FieldRef<"TaskOutput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskOutput findUnique
   */
  export type TaskOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter, which TaskOutput to fetch.
     */
    where: TaskOutputWhereUniqueInput
  }

  /**
   * TaskOutput findUniqueOrThrow
   */
  export type TaskOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter, which TaskOutput to fetch.
     */
    where: TaskOutputWhereUniqueInput
  }

  /**
   * TaskOutput findFirst
   */
  export type TaskOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter, which TaskOutput to fetch.
     */
    where?: TaskOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOutputs to fetch.
     */
    orderBy?: TaskOutputOrderByWithRelationInput | TaskOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskOutputs.
     */
    cursor?: TaskOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskOutputs.
     */
    distinct?: TaskOutputScalarFieldEnum | TaskOutputScalarFieldEnum[]
  }

  /**
   * TaskOutput findFirstOrThrow
   */
  export type TaskOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter, which TaskOutput to fetch.
     */
    where?: TaskOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOutputs to fetch.
     */
    orderBy?: TaskOutputOrderByWithRelationInput | TaskOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskOutputs.
     */
    cursor?: TaskOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskOutputs.
     */
    distinct?: TaskOutputScalarFieldEnum | TaskOutputScalarFieldEnum[]
  }

  /**
   * TaskOutput findMany
   */
  export type TaskOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter, which TaskOutputs to fetch.
     */
    where?: TaskOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOutputs to fetch.
     */
    orderBy?: TaskOutputOrderByWithRelationInput | TaskOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskOutputs.
     */
    cursor?: TaskOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOutputs.
     */
    skip?: number
    distinct?: TaskOutputScalarFieldEnum | TaskOutputScalarFieldEnum[]
  }

  /**
   * TaskOutput create
   */
  export type TaskOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskOutput.
     */
    data: XOR<TaskOutputCreateInput, TaskOutputUncheckedCreateInput>
  }

  /**
   * TaskOutput createMany
   */
  export type TaskOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskOutputs.
     */
    data: TaskOutputCreateManyInput | TaskOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskOutput update
   */
  export type TaskOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskOutput.
     */
    data: XOR<TaskOutputUpdateInput, TaskOutputUncheckedUpdateInput>
    /**
     * Choose, which TaskOutput to update.
     */
    where: TaskOutputWhereUniqueInput
  }

  /**
   * TaskOutput updateMany
   */
  export type TaskOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskOutputs.
     */
    data: XOR<TaskOutputUpdateManyMutationInput, TaskOutputUncheckedUpdateManyInput>
    /**
     * Filter which TaskOutputs to update
     */
    where?: TaskOutputWhereInput
    /**
     * Limit how many TaskOutputs to update.
     */
    limit?: number
  }

  /**
   * TaskOutput upsert
   */
  export type TaskOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskOutput to update in case it exists.
     */
    where: TaskOutputWhereUniqueInput
    /**
     * In case the TaskOutput found by the `where` argument doesn't exist, create a new TaskOutput with this data.
     */
    create: XOR<TaskOutputCreateInput, TaskOutputUncheckedCreateInput>
    /**
     * In case the TaskOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskOutputUpdateInput, TaskOutputUncheckedUpdateInput>
  }

  /**
   * TaskOutput delete
   */
  export type TaskOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
    /**
     * Filter which TaskOutput to delete.
     */
    where: TaskOutputWhereUniqueInput
  }

  /**
   * TaskOutput deleteMany
   */
  export type TaskOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOutputs to delete
     */
    where?: TaskOutputWhereInput
    /**
     * Limit how many TaskOutputs to delete.
     */
    limit?: number
  }

  /**
   * TaskOutput without action
   */
  export type TaskOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOutput
     */
    select?: TaskOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOutput
     */
    omit?: TaskOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOutputInclude<ExtArgs> | null
  }


  /**
   * Model TaskEvent
   */

  export type AggregateTaskEvent = {
    _count: TaskEventCountAggregateOutputType | null
    _avg: TaskEventAvgAggregateOutputType | null
    _sum: TaskEventSumAggregateOutputType | null
    _min: TaskEventMinAggregateOutputType | null
    _max: TaskEventMaxAggregateOutputType | null
  }

  export type TaskEventAvgAggregateOutputType = {
    id: number | null
    progress: number | null
  }

  export type TaskEventSumAggregateOutputType = {
    id: bigint | null
    progress: number | null
  }

  export type TaskEventMinAggregateOutputType = {
    id: bigint | null
    taskId: string | null
    eventType: string | null
    fromStatus: string | null
    toStatus: string | null
    progress: number | null
    requestId: string | null
    createdAt: Date | null
  }

  export type TaskEventMaxAggregateOutputType = {
    id: bigint | null
    taskId: string | null
    eventType: string | null
    fromStatus: string | null
    toStatus: string | null
    progress: number | null
    requestId: string | null
    createdAt: Date | null
  }

  export type TaskEventCountAggregateOutputType = {
    id: number
    taskId: number
    eventType: number
    fromStatus: number
    toStatus: number
    progress: number
    payloadJson: number
    requestId: number
    createdAt: number
    _all: number
  }


  export type TaskEventAvgAggregateInputType = {
    id?: true
    progress?: true
  }

  export type TaskEventSumAggregateInputType = {
    id?: true
    progress?: true
  }

  export type TaskEventMinAggregateInputType = {
    id?: true
    taskId?: true
    eventType?: true
    fromStatus?: true
    toStatus?: true
    progress?: true
    requestId?: true
    createdAt?: true
  }

  export type TaskEventMaxAggregateInputType = {
    id?: true
    taskId?: true
    eventType?: true
    fromStatus?: true
    toStatus?: true
    progress?: true
    requestId?: true
    createdAt?: true
  }

  export type TaskEventCountAggregateInputType = {
    id?: true
    taskId?: true
    eventType?: true
    fromStatus?: true
    toStatus?: true
    progress?: true
    payloadJson?: true
    requestId?: true
    createdAt?: true
    _all?: true
  }

  export type TaskEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskEvent to aggregate.
     */
    where?: TaskEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskEvents to fetch.
     */
    orderBy?: TaskEventOrderByWithRelationInput | TaskEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskEvents
    **/
    _count?: true | TaskEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskEventMaxAggregateInputType
  }

  export type GetTaskEventAggregateType<T extends TaskEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskEvent[P]>
      : GetScalarType<T[P], AggregateTaskEvent[P]>
  }




  export type TaskEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskEventWhereInput
    orderBy?: TaskEventOrderByWithAggregationInput | TaskEventOrderByWithAggregationInput[]
    by: TaskEventScalarFieldEnum[] | TaskEventScalarFieldEnum
    having?: TaskEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskEventCountAggregateInputType | true
    _avg?: TaskEventAvgAggregateInputType
    _sum?: TaskEventSumAggregateInputType
    _min?: TaskEventMinAggregateInputType
    _max?: TaskEventMaxAggregateInputType
  }

  export type TaskEventGroupByOutputType = {
    id: bigint
    taskId: string
    eventType: string
    fromStatus: string | null
    toStatus: string | null
    progress: number | null
    payloadJson: JsonValue | null
    requestId: string | null
    createdAt: Date
    _count: TaskEventCountAggregateOutputType | null
    _avg: TaskEventAvgAggregateOutputType | null
    _sum: TaskEventSumAggregateOutputType | null
    _min: TaskEventMinAggregateOutputType | null
    _max: TaskEventMaxAggregateOutputType | null
  }

  type GetTaskEventGroupByPayload<T extends TaskEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskEventGroupByOutputType[P]>
            : GetScalarType<T[P], TaskEventGroupByOutputType[P]>
        }
      >
    >


  export type TaskEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    eventType?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    progress?: boolean
    payloadJson?: boolean
    requestId?: boolean
    createdAt?: boolean
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskEvent"]>



  export type TaskEventSelectScalar = {
    id?: boolean
    taskId?: boolean
    eventType?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    progress?: boolean
    payloadJson?: boolean
    requestId?: boolean
    createdAt?: boolean
  }

  export type TaskEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "eventType" | "fromStatus" | "toStatus" | "progress" | "payloadJson" | "requestId" | "createdAt", ExtArgs["result"]["taskEvent"]>
  export type TaskEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GenerationTaskDefaultArgs<ExtArgs>
  }

  export type $TaskEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskEvent"
    objects: {
      task: Prisma.$GenerationTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      taskId: string
      eventType: string
      fromStatus: string | null
      toStatus: string | null
      progress: number | null
      payloadJson: Prisma.JsonValue | null
      requestId: string | null
      createdAt: Date
    }, ExtArgs["result"]["taskEvent"]>
    composites: {}
  }

  type TaskEventGetPayload<S extends boolean | null | undefined | TaskEventDefaultArgs> = $Result.GetResult<Prisma.$TaskEventPayload, S>

  type TaskEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskEventCountAggregateInputType | true
    }

  export interface TaskEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskEvent'], meta: { name: 'TaskEvent' } }
    /**
     * Find zero or one TaskEvent that matches the filter.
     * @param {TaskEventFindUniqueArgs} args - Arguments to find a TaskEvent
     * @example
     * // Get one TaskEvent
     * const taskEvent = await prisma.taskEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskEventFindUniqueArgs>(args: SelectSubset<T, TaskEventFindUniqueArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskEventFindUniqueOrThrowArgs} args - Arguments to find a TaskEvent
     * @example
     * // Get one TaskEvent
     * const taskEvent = await prisma.taskEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventFindFirstArgs} args - Arguments to find a TaskEvent
     * @example
     * // Get one TaskEvent
     * const taskEvent = await prisma.taskEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskEventFindFirstArgs>(args?: SelectSubset<T, TaskEventFindFirstArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventFindFirstOrThrowArgs} args - Arguments to find a TaskEvent
     * @example
     * // Get one TaskEvent
     * const taskEvent = await prisma.taskEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskEvents
     * const taskEvents = await prisma.taskEvent.findMany()
     * 
     * // Get first 10 TaskEvents
     * const taskEvents = await prisma.taskEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskEventWithIdOnly = await prisma.taskEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskEventFindManyArgs>(args?: SelectSubset<T, TaskEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskEvent.
     * @param {TaskEventCreateArgs} args - Arguments to create a TaskEvent.
     * @example
     * // Create one TaskEvent
     * const TaskEvent = await prisma.taskEvent.create({
     *   data: {
     *     // ... data to create a TaskEvent
     *   }
     * })
     * 
     */
    create<T extends TaskEventCreateArgs>(args: SelectSubset<T, TaskEventCreateArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskEvents.
     * @param {TaskEventCreateManyArgs} args - Arguments to create many TaskEvents.
     * @example
     * // Create many TaskEvents
     * const taskEvent = await prisma.taskEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskEventCreateManyArgs>(args?: SelectSubset<T, TaskEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskEvent.
     * @param {TaskEventDeleteArgs} args - Arguments to delete one TaskEvent.
     * @example
     * // Delete one TaskEvent
     * const TaskEvent = await prisma.taskEvent.delete({
     *   where: {
     *     // ... filter to delete one TaskEvent
     *   }
     * })
     * 
     */
    delete<T extends TaskEventDeleteArgs>(args: SelectSubset<T, TaskEventDeleteArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskEvent.
     * @param {TaskEventUpdateArgs} args - Arguments to update one TaskEvent.
     * @example
     * // Update one TaskEvent
     * const taskEvent = await prisma.taskEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskEventUpdateArgs>(args: SelectSubset<T, TaskEventUpdateArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskEvents.
     * @param {TaskEventDeleteManyArgs} args - Arguments to filter TaskEvents to delete.
     * @example
     * // Delete a few TaskEvents
     * const { count } = await prisma.taskEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskEventDeleteManyArgs>(args?: SelectSubset<T, TaskEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskEvents
     * const taskEvent = await prisma.taskEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskEventUpdateManyArgs>(args: SelectSubset<T, TaskEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskEvent.
     * @param {TaskEventUpsertArgs} args - Arguments to update or create a TaskEvent.
     * @example
     * // Update or create a TaskEvent
     * const taskEvent = await prisma.taskEvent.upsert({
     *   create: {
     *     // ... data to create a TaskEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskEvent we want to update
     *   }
     * })
     */
    upsert<T extends TaskEventUpsertArgs>(args: SelectSubset<T, TaskEventUpsertArgs<ExtArgs>>): Prisma__TaskEventClient<$Result.GetResult<Prisma.$TaskEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventCountArgs} args - Arguments to filter TaskEvents to count.
     * @example
     * // Count the number of TaskEvents
     * const count = await prisma.taskEvent.count({
     *   where: {
     *     // ... the filter for the TaskEvents we want to count
     *   }
     * })
    **/
    count<T extends TaskEventCountArgs>(
      args?: Subset<T, TaskEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskEventAggregateArgs>(args: Subset<T, TaskEventAggregateArgs>): Prisma.PrismaPromise<GetTaskEventAggregateType<T>>

    /**
     * Group by TaskEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskEventGroupByArgs['orderBy'] }
        : { orderBy?: TaskEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskEvent model
   */
  readonly fields: TaskEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends GenerationTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenerationTaskDefaultArgs<ExtArgs>>): Prisma__GenerationTaskClient<$Result.GetResult<Prisma.$GenerationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskEvent model
   */
  interface TaskEventFieldRefs {
    readonly id: FieldRef<"TaskEvent", 'BigInt'>
    readonly taskId: FieldRef<"TaskEvent", 'String'>
    readonly eventType: FieldRef<"TaskEvent", 'String'>
    readonly fromStatus: FieldRef<"TaskEvent", 'String'>
    readonly toStatus: FieldRef<"TaskEvent", 'String'>
    readonly progress: FieldRef<"TaskEvent", 'Int'>
    readonly payloadJson: FieldRef<"TaskEvent", 'Json'>
    readonly requestId: FieldRef<"TaskEvent", 'String'>
    readonly createdAt: FieldRef<"TaskEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskEvent findUnique
   */
  export type TaskEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter, which TaskEvent to fetch.
     */
    where: TaskEventWhereUniqueInput
  }

  /**
   * TaskEvent findUniqueOrThrow
   */
  export type TaskEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter, which TaskEvent to fetch.
     */
    where: TaskEventWhereUniqueInput
  }

  /**
   * TaskEvent findFirst
   */
  export type TaskEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter, which TaskEvent to fetch.
     */
    where?: TaskEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskEvents to fetch.
     */
    orderBy?: TaskEventOrderByWithRelationInput | TaskEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskEvents.
     */
    cursor?: TaskEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskEvents.
     */
    distinct?: TaskEventScalarFieldEnum | TaskEventScalarFieldEnum[]
  }

  /**
   * TaskEvent findFirstOrThrow
   */
  export type TaskEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter, which TaskEvent to fetch.
     */
    where?: TaskEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskEvents to fetch.
     */
    orderBy?: TaskEventOrderByWithRelationInput | TaskEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskEvents.
     */
    cursor?: TaskEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskEvents.
     */
    distinct?: TaskEventScalarFieldEnum | TaskEventScalarFieldEnum[]
  }

  /**
   * TaskEvent findMany
   */
  export type TaskEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter, which TaskEvents to fetch.
     */
    where?: TaskEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskEvents to fetch.
     */
    orderBy?: TaskEventOrderByWithRelationInput | TaskEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskEvents.
     */
    cursor?: TaskEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskEvents.
     */
    skip?: number
    distinct?: TaskEventScalarFieldEnum | TaskEventScalarFieldEnum[]
  }

  /**
   * TaskEvent create
   */
  export type TaskEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskEvent.
     */
    data: XOR<TaskEventCreateInput, TaskEventUncheckedCreateInput>
  }

  /**
   * TaskEvent createMany
   */
  export type TaskEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskEvents.
     */
    data: TaskEventCreateManyInput | TaskEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskEvent update
   */
  export type TaskEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskEvent.
     */
    data: XOR<TaskEventUpdateInput, TaskEventUncheckedUpdateInput>
    /**
     * Choose, which TaskEvent to update.
     */
    where: TaskEventWhereUniqueInput
  }

  /**
   * TaskEvent updateMany
   */
  export type TaskEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskEvents.
     */
    data: XOR<TaskEventUpdateManyMutationInput, TaskEventUncheckedUpdateManyInput>
    /**
     * Filter which TaskEvents to update
     */
    where?: TaskEventWhereInput
    /**
     * Limit how many TaskEvents to update.
     */
    limit?: number
  }

  /**
   * TaskEvent upsert
   */
  export type TaskEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskEvent to update in case it exists.
     */
    where: TaskEventWhereUniqueInput
    /**
     * In case the TaskEvent found by the `where` argument doesn't exist, create a new TaskEvent with this data.
     */
    create: XOR<TaskEventCreateInput, TaskEventUncheckedCreateInput>
    /**
     * In case the TaskEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskEventUpdateInput, TaskEventUncheckedUpdateInput>
  }

  /**
   * TaskEvent delete
   */
  export type TaskEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
    /**
     * Filter which TaskEvent to delete.
     */
    where: TaskEventWhereUniqueInput
  }

  /**
   * TaskEvent deleteMany
   */
  export type TaskEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskEvents to delete
     */
    where?: TaskEventWhereInput
    /**
     * Limit how many TaskEvents to delete.
     */
    limit?: number
  }

  /**
   * TaskEvent without action
   */
  export type TaskEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskEvent
     */
    select?: TaskEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskEvent
     */
    omit?: TaskEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phoneCiphertext: 'phoneCiphertext',
    phoneHash: 'phoneHash',
    emailCiphertext: 'emailCiphertext',
    emailHash: 'emailHash',
    passwordHash: 'passwordHash',
    nickname: 'nickname',
    avatarAssetId: 'avatarAssetId',
    userType: 'userType',
    status: 'status',
    registerSource: 'registerSource',
    creditAccountId: 'creditAccountId',
    creditAccountStatus: 'creditAccountStatus',
    nicknameUpdatedAt: 'nicknameUpdatedAt',
    lastLoginAt: 'lastLoginAt',
    lastLoginIp: 'lastLoginIp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    deviceId: 'deviceId',
    deviceName: 'deviceName',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    status: 'status',
    expiresAt: 'expiresAt',
    lastActiveAt: 'lastActiveAt',
    revokedAt: 'revokedAt',
    revokeReason: 'revokeReason',
    createdAt: 'createdAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    targetHash: 'targetHash',
    purpose: 'purpose',
    codeHash: 'codeHash',
    status: 'status',
    attemptCount: 'attemptCount',
    sendChannel: 'sendChannel',
    providerMessageId: 'providerMessageId',
    ipAddress: 'ipAddress',
    expiresAt: 'expiresAt',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    folderId: 'folderId',
    name: 'name',
    originalFileName: 'originalFileName',
    purpose: 'purpose',
    mediaType: 'mediaType',
    mimeType: 'mimeType',
    fileExt: 'fileExt',
    fileSize: 'fileSize',
    sha256: 'sha256',
    storageProvider: 'storageProvider',
    storageBucket: 'storageBucket',
    storageKey: 'storageKey',
    publicUrl: 'publicUrl',
    thumbnailUrl: 'thumbnailUrl',
    width: 'width',
    height: 'height',
    durationMs: 'durationMs',
    metadataJson: 'metadataJson',
    reviewStatus: 'reviewStatus',
    reviewResultJson: 'reviewResultJson',
    favorite: 'favorite',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    createdBy: 'createdBy',
    name: 'name',
    description: 'description',
    coverAssetId: 'coverAssetId',
    status: 'status',
    taskCount: 'taskCount',
    lastActivityAt: 'lastActivityAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskQuoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    billingOwnerType: 'billingOwnerType',
    billingOwnerId: 'billingOwnerId',
    creditAccountId: 'creditAccountId',
    taskType: 'taskType',
    module: 'module',
    requestHash: 'requestHash',
    planCode: 'planCode',
    ruleVersion: 'ruleVersion',
    unitCredits: 'unitCredits',
    billableQuantity: 'billableQuantity',
    estimatedCredits: 'estimatedCredits',
    configSnapshotJson: 'configSnapshotJson',
    status: 'status',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type TaskQuoteScalarFieldEnum = (typeof TaskQuoteScalarFieldEnum)[keyof typeof TaskQuoteScalarFieldEnum]


  export const GenerationTaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    projectId: 'projectId',
    parentTaskId: 'parentTaskId',
    quoteId: 'quoteId',
    name: 'name',
    module: 'module',
    scene: 'scene',
    taskType: 'taskType',
    sourcePage: 'sourcePage',
    batchId: 'batchId',
    status: 'status',
    progress: 'progress',
    stage: 'stage',
    queuePriority: 'queuePriority',
    queuePosition: 'queuePosition',
    modelId: 'modelId',
    sceneId: 'sceneId',
    templateId: 'templateId',
    configJson: 'configJson',
    configVersion: 'configVersion',
    billingOwnerType: 'billingOwnerType',
    billingOwnerId: 'billingOwnerId',
    creditAccountId: 'creditAccountId',
    billingTaskId: 'billingTaskId',
    billingStatus: 'billingStatus',
    estimatedCredits: 'estimatedCredits',
    settledCredits: 'settledCredits',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount',
    cancellable: 'cancellable',
    deadlineAt: 'deadlineAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    version: 'version'
  };

  export type GenerationTaskScalarFieldEnum = (typeof GenerationTaskScalarFieldEnum)[keyof typeof GenerationTaskScalarFieldEnum]


  export const TaskInputScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    assetId: 'assetId',
    inputRole: 'inputRole',
    sortOrder: 'sortOrder',
    snapshotJson: 'snapshotJson',
    createdAt: 'createdAt'
  };

  export type TaskInputScalarFieldEnum = (typeof TaskInputScalarFieldEnum)[keyof typeof TaskInputScalarFieldEnum]


  export const TaskOutputScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    assetId: 'assetId',
    outputType: 'outputType',
    sortOrder: 'sortOrder',
    providerOutputRef: 'providerOutputRef',
    reviewStatus: 'reviewStatus',
    createdAt: 'createdAt'
  };

  export type TaskOutputScalarFieldEnum = (typeof TaskOutputScalarFieldEnum)[keyof typeof TaskOutputScalarFieldEnum]


  export const TaskEventScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    eventType: 'eventType',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    progress: 'progress',
    payloadJson: 'payloadJson',
    requestId: 'requestId',
    createdAt: 'createdAt'
  };

  export type TaskEventScalarFieldEnum = (typeof TaskEventScalarFieldEnum)[keyof typeof TaskEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    phoneHash: 'phoneHash',
    emailHash: 'emailHash',
    passwordHash: 'passwordHash',
    nickname: 'nickname',
    avatarAssetId: 'avatarAssetId',
    registerSource: 'registerSource',
    creditAccountId: 'creditAccountId',
    lastLoginIp: 'lastLoginIp'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AuthSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    deviceId: 'deviceId',
    deviceName: 'deviceName',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    status: 'status',
    revokeReason: 'revokeReason'
  };

  export type AuthSessionOrderByRelevanceFieldEnum = (typeof AuthSessionOrderByRelevanceFieldEnum)[keyof typeof AuthSessionOrderByRelevanceFieldEnum]


  export const VerificationCodeOrderByRelevanceFieldEnum: {
    id: 'id',
    targetHash: 'targetHash',
    purpose: 'purpose',
    codeHash: 'codeHash',
    status: 'status',
    sendChannel: 'sendChannel',
    providerMessageId: 'providerMessageId',
    ipAddress: 'ipAddress'
  };

  export type VerificationCodeOrderByRelevanceFieldEnum = (typeof VerificationCodeOrderByRelevanceFieldEnum)[keyof typeof VerificationCodeOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AssetOrderByRelevanceFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    folderId: 'folderId',
    name: 'name',
    originalFileName: 'originalFileName',
    purpose: 'purpose',
    mediaType: 'mediaType',
    mimeType: 'mimeType',
    fileExt: 'fileExt',
    sha256: 'sha256',
    storageProvider: 'storageProvider',
    storageBucket: 'storageBucket',
    storageKey: 'storageKey',
    publicUrl: 'publicUrl',
    thumbnailUrl: 'thumbnailUrl'
  };

  export type AssetOrderByRelevanceFieldEnum = (typeof AssetOrderByRelevanceFieldEnum)[keyof typeof AssetOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    createdBy: 'createdBy',
    name: 'name',
    description: 'description',
    coverAssetId: 'coverAssetId'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const TaskQuoteOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    billingOwnerId: 'billingOwnerId',
    creditAccountId: 'creditAccountId',
    requestHash: 'requestHash',
    planCode: 'planCode',
    ruleVersion: 'ruleVersion'
  };

  export type TaskQuoteOrderByRelevanceFieldEnum = (typeof TaskQuoteOrderByRelevanceFieldEnum)[keyof typeof TaskQuoteOrderByRelevanceFieldEnum]


  export const GenerationTaskOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    ownerId: 'ownerId',
    projectId: 'projectId',
    parentTaskId: 'parentTaskId',
    quoteId: 'quoteId',
    name: 'name',
    scene: 'scene',
    sourcePage: 'sourcePage',
    batchId: 'batchId',
    stage: 'stage',
    modelId: 'modelId',
    sceneId: 'sceneId',
    templateId: 'templateId',
    configVersion: 'configVersion',
    billingOwnerId: 'billingOwnerId',
    creditAccountId: 'creditAccountId',
    billingTaskId: 'billingTaskId',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage'
  };

  export type GenerationTaskOrderByRelevanceFieldEnum = (typeof GenerationTaskOrderByRelevanceFieldEnum)[keyof typeof GenerationTaskOrderByRelevanceFieldEnum]


  export const TaskInputOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    assetId: 'assetId',
    inputRole: 'inputRole'
  };

  export type TaskInputOrderByRelevanceFieldEnum = (typeof TaskInputOrderByRelevanceFieldEnum)[keyof typeof TaskInputOrderByRelevanceFieldEnum]


  export const TaskOutputOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    assetId: 'assetId',
    outputType: 'outputType',
    providerOutputRef: 'providerOutputRef',
    reviewStatus: 'reviewStatus'
  };

  export type TaskOutputOrderByRelevanceFieldEnum = (typeof TaskOutputOrderByRelevanceFieldEnum)[keyof typeof TaskOutputOrderByRelevanceFieldEnum]


  export const TaskEventOrderByRelevanceFieldEnum: {
    taskId: 'taskId',
    eventType: 'eventType',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    requestId: 'requestId'
  };

  export type TaskEventOrderByRelevanceFieldEnum = (typeof TaskEventOrderByRelevanceFieldEnum)[keyof typeof TaskEventOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'CreditAccountStatus'
   */
  export type EnumCreditAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditAccountStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'OwnerType'
   */
  export type EnumOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerType'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AssetStatus'
   */
  export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskModule'
   */
  export type EnumTaskModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskModule'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'QuoteStatus'
   */
  export type EnumQuoteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuoteStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'BillingStatus'
   */
  export type EnumBillingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phoneCiphertext?: BytesNullableFilter<"User"> | Uint8Array | null
    phoneHash?: StringNullableFilter<"User"> | string | null
    emailCiphertext?: BytesNullableFilter<"User"> | Uint8Array | null
    emailHash?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    avatarAssetId?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    registerSource?: StringFilter<"User"> | string
    creditAccountId?: StringNullableFilter<"User"> | string | null
    creditAccountStatus?: EnumCreditAccountStatusFilter<"User"> | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    authSessions?: AuthSessionListRelationFilter
    taskQuotes?: TaskQuoteListRelationFilter
    generationTasks?: GenerationTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phoneCiphertext?: SortOrderInput | SortOrder
    phoneHash?: SortOrderInput | SortOrder
    emailCiphertext?: SortOrderInput | SortOrder
    emailHash?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    nickname?: SortOrder
    avatarAssetId?: SortOrderInput | SortOrder
    userType?: SortOrder
    status?: SortOrder
    registerSource?: SortOrder
    creditAccountId?: SortOrderInput | SortOrder
    creditAccountStatus?: SortOrder
    nicknameUpdatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authSessions?: AuthSessionOrderByRelationAggregateInput
    taskQuotes?: TaskQuoteOrderByRelationAggregateInput
    generationTasks?: GenerationTaskOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneHash?: string
    emailHash?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phoneCiphertext?: BytesNullableFilter<"User"> | Uint8Array | null
    emailCiphertext?: BytesNullableFilter<"User"> | Uint8Array | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    avatarAssetId?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    registerSource?: StringFilter<"User"> | string
    creditAccountId?: StringNullableFilter<"User"> | string | null
    creditAccountStatus?: EnumCreditAccountStatusFilter<"User"> | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    authSessions?: AuthSessionListRelationFilter
    taskQuotes?: TaskQuoteListRelationFilter
    generationTasks?: GenerationTaskListRelationFilter
  }, "id" | "phoneHash" | "emailHash">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phoneCiphertext?: SortOrderInput | SortOrder
    phoneHash?: SortOrderInput | SortOrder
    emailCiphertext?: SortOrderInput | SortOrder
    emailHash?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    nickname?: SortOrder
    avatarAssetId?: SortOrderInput | SortOrder
    userType?: SortOrder
    status?: SortOrder
    registerSource?: SortOrder
    creditAccountId?: SortOrderInput | SortOrder
    creditAccountStatus?: SortOrder
    nicknameUpdatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phoneCiphertext?: BytesNullableWithAggregatesFilter<"User"> | Uint8Array | null
    phoneHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailCiphertext?: BytesNullableWithAggregatesFilter<"User"> | Uint8Array | null
    emailHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringWithAggregatesFilter<"User"> | string
    avatarAssetId?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    registerSource?: StringWithAggregatesFilter<"User"> | string
    creditAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
    creditAccountStatus?: EnumCreditAccountStatusWithAggregatesFilter<"User"> | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    refreshTokenHash?: StringFilter<"AuthSession"> | string
    deviceId?: StringNullableFilter<"AuthSession"> | string | null
    deviceName?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    status?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastActiveAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokeReason?: StringNullableFilter<"AuthSession"> | string | null
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    lastActiveAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuthSessionOrderByRelevanceInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshTokenHash?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: StringFilter<"AuthSession"> | string
    deviceId?: StringNullableFilter<"AuthSession"> | string | null
    deviceName?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    status?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastActiveAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokeReason?: StringNullableFilter<"AuthSession"> | string | null
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshTokenHash">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    lastActiveAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
    refreshTokenHash?: StringWithAggregatesFilter<"AuthSession"> | string
    deviceId?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    deviceName?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    status?: StringWithAggregatesFilter<"AuthSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    lastActiveAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"AuthSession"> | Date | string | null
    revokeReason?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    targetHash?: StringFilter<"VerificationCode"> | string
    purpose?: StringFilter<"VerificationCode"> | string
    codeHash?: StringFilter<"VerificationCode"> | string
    status?: StringFilter<"VerificationCode"> | string
    attemptCount?: IntFilter<"VerificationCode"> | number
    sendChannel?: StringFilter<"VerificationCode"> | string
    providerMessageId?: StringNullableFilter<"VerificationCode"> | string | null
    ipAddress?: StringNullableFilter<"VerificationCode"> | string | null
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"VerificationCode"> | Date | string | null
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    targetHash?: SortOrder
    purpose?: SortOrder
    codeHash?: SortOrder
    status?: SortOrder
    attemptCount?: SortOrder
    sendChannel?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: VerificationCodeOrderByRelevanceInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    targetHash?: StringFilter<"VerificationCode"> | string
    purpose?: StringFilter<"VerificationCode"> | string
    codeHash?: StringFilter<"VerificationCode"> | string
    status?: StringFilter<"VerificationCode"> | string
    attemptCount?: IntFilter<"VerificationCode"> | number
    sendChannel?: StringFilter<"VerificationCode"> | string
    providerMessageId?: StringNullableFilter<"VerificationCode"> | string | null
    ipAddress?: StringNullableFilter<"VerificationCode"> | string | null
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"VerificationCode"> | Date | string | null
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    targetHash?: SortOrder
    purpose?: SortOrder
    codeHash?: SortOrder
    status?: SortOrder
    attemptCount?: SortOrder
    sendChannel?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _avg?: VerificationCodeAvgOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
    _sum?: VerificationCodeSumOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    targetHash?: StringWithAggregatesFilter<"VerificationCode"> | string
    purpose?: StringWithAggregatesFilter<"VerificationCode"> | string
    codeHash?: StringWithAggregatesFilter<"VerificationCode"> | string
    status?: StringWithAggregatesFilter<"VerificationCode"> | string
    attemptCount?: IntWithAggregatesFilter<"VerificationCode"> | number
    sendChannel?: StringWithAggregatesFilter<"VerificationCode"> | string
    providerMessageId?: StringNullableWithAggregatesFilter<"VerificationCode"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"VerificationCode"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"VerificationCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    ownerType?: EnumOwnerTypeFilter<"Asset"> | $Enums.OwnerType
    ownerId?: StringNullableFilter<"Asset"> | string | null
    folderId?: StringNullableFilter<"Asset"> | string | null
    name?: StringFilter<"Asset"> | string
    originalFileName?: StringFilter<"Asset"> | string
    purpose?: StringNullableFilter<"Asset"> | string | null
    mediaType?: StringFilter<"Asset"> | string
    mimeType?: StringFilter<"Asset"> | string
    fileExt?: StringFilter<"Asset"> | string
    fileSize?: BigIntFilter<"Asset"> | bigint | number
    sha256?: StringNullableFilter<"Asset"> | string | null
    storageProvider?: StringFilter<"Asset"> | string
    storageBucket?: StringFilter<"Asset"> | string
    storageKey?: StringFilter<"Asset"> | string
    publicUrl?: StringNullableFilter<"Asset"> | string | null
    thumbnailUrl?: StringNullableFilter<"Asset"> | string | null
    width?: IntNullableFilter<"Asset"> | number | null
    height?: IntNullableFilter<"Asset"> | number | null
    durationMs?: BigIntNullableFilter<"Asset"> | bigint | number | null
    metadataJson?: JsonNullableFilter<"Asset">
    reviewStatus?: EnumReviewStatusFilter<"Asset"> | $Enums.ReviewStatus
    reviewResultJson?: JsonNullableFilter<"Asset">
    favorite?: BoolFilter<"Asset"> | boolean
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    name?: SortOrder
    originalFileName?: SortOrder
    purpose?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    mimeType?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    sha256?: SortOrderInput | SortOrder
    storageProvider?: SortOrder
    storageBucket?: SortOrder
    storageKey?: SortOrder
    publicUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    metadataJson?: SortOrderInput | SortOrder
    reviewStatus?: SortOrder
    reviewResultJson?: SortOrderInput | SortOrder
    favorite?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: AssetOrderByRelevanceInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    ownerType?: EnumOwnerTypeFilter<"Asset"> | $Enums.OwnerType
    ownerId?: StringNullableFilter<"Asset"> | string | null
    folderId?: StringNullableFilter<"Asset"> | string | null
    name?: StringFilter<"Asset"> | string
    originalFileName?: StringFilter<"Asset"> | string
    purpose?: StringNullableFilter<"Asset"> | string | null
    mediaType?: StringFilter<"Asset"> | string
    mimeType?: StringFilter<"Asset"> | string
    fileExt?: StringFilter<"Asset"> | string
    fileSize?: BigIntFilter<"Asset"> | bigint | number
    sha256?: StringNullableFilter<"Asset"> | string | null
    storageProvider?: StringFilter<"Asset"> | string
    storageBucket?: StringFilter<"Asset"> | string
    storageKey?: StringFilter<"Asset"> | string
    publicUrl?: StringNullableFilter<"Asset"> | string | null
    thumbnailUrl?: StringNullableFilter<"Asset"> | string | null
    width?: IntNullableFilter<"Asset"> | number | null
    height?: IntNullableFilter<"Asset"> | number | null
    durationMs?: BigIntNullableFilter<"Asset"> | bigint | number | null
    metadataJson?: JsonNullableFilter<"Asset">
    reviewStatus?: EnumReviewStatusFilter<"Asset"> | $Enums.ReviewStatus
    reviewResultJson?: JsonNullableFilter<"Asset">
    favorite?: BoolFilter<"Asset"> | boolean
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    name?: SortOrder
    originalFileName?: SortOrder
    purpose?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    mimeType?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    sha256?: SortOrderInput | SortOrder
    storageProvider?: SortOrder
    storageBucket?: SortOrder
    storageKey?: SortOrder
    publicUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    metadataJson?: SortOrderInput | SortOrder
    reviewStatus?: SortOrder
    reviewResultJson?: SortOrderInput | SortOrder
    favorite?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    ownerType?: EnumOwnerTypeWithAggregatesFilter<"Asset"> | $Enums.OwnerType
    ownerId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    folderId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    name?: StringWithAggregatesFilter<"Asset"> | string
    originalFileName?: StringWithAggregatesFilter<"Asset"> | string
    purpose?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    mediaType?: StringWithAggregatesFilter<"Asset"> | string
    mimeType?: StringWithAggregatesFilter<"Asset"> | string
    fileExt?: StringWithAggregatesFilter<"Asset"> | string
    fileSize?: BigIntWithAggregatesFilter<"Asset"> | bigint | number
    sha256?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    storageProvider?: StringWithAggregatesFilter<"Asset"> | string
    storageBucket?: StringWithAggregatesFilter<"Asset"> | string
    storageKey?: StringWithAggregatesFilter<"Asset"> | string
    publicUrl?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    width?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    height?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    durationMs?: BigIntNullableWithAggregatesFilter<"Asset"> | bigint | number | null
    metadataJson?: JsonNullableWithAggregatesFilter<"Asset">
    reviewStatus?: EnumReviewStatusWithAggregatesFilter<"Asset"> | $Enums.ReviewStatus
    reviewResultJson?: JsonNullableWithAggregatesFilter<"Asset">
    favorite?: BoolWithAggregatesFilter<"Asset"> | boolean
    status?: EnumAssetStatusWithAggregatesFilter<"Asset"> | $Enums.AssetStatus
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerType?: EnumOwnerTypeFilter<"Project"> | $Enums.OwnerType
    ownerId?: StringFilter<"Project"> | string
    createdBy?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    coverAssetId?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    taskCount?: IntFilter<"Project"> | number
    lastActivityAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    tasks?: GenerationTaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverAssetId?: SortOrderInput | SortOrder
    status?: SortOrder
    taskCount?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tasks?: GenerationTaskOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    ownerType?: EnumOwnerTypeFilter<"Project"> | $Enums.OwnerType
    ownerId?: StringFilter<"Project"> | string
    createdBy?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    coverAssetId?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    taskCount?: IntFilter<"Project"> | number
    lastActivityAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    tasks?: GenerationTaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverAssetId?: SortOrderInput | SortOrder
    status?: SortOrder
    taskCount?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    ownerType?: EnumOwnerTypeWithAggregatesFilter<"Project"> | $Enums.OwnerType
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    createdBy?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    coverAssetId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    taskCount?: IntWithAggregatesFilter<"Project"> | number
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type TaskQuoteWhereInput = {
    AND?: TaskQuoteWhereInput | TaskQuoteWhereInput[]
    OR?: TaskQuoteWhereInput[]
    NOT?: TaskQuoteWhereInput | TaskQuoteWhereInput[]
    id?: StringFilter<"TaskQuote"> | string
    userId?: StringFilter<"TaskQuote"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"TaskQuote"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"TaskQuote"> | string
    creditAccountId?: StringFilter<"TaskQuote"> | string
    taskType?: EnumTaskTypeFilter<"TaskQuote"> | $Enums.TaskType
    module?: EnumTaskModuleFilter<"TaskQuote"> | $Enums.TaskModule
    requestHash?: StringFilter<"TaskQuote"> | string
    planCode?: StringFilter<"TaskQuote"> | string
    ruleVersion?: StringFilter<"TaskQuote"> | string
    unitCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonFilter<"TaskQuote">
    status?: EnumQuoteStatusFilter<"TaskQuote"> | $Enums.QuoteStatus
    expiresAt?: DateTimeFilter<"TaskQuote"> | Date | string
    usedAt?: DateTimeNullableFilter<"TaskQuote"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskQuote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: GenerationTaskListRelationFilter
  }

  export type TaskQuoteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    taskType?: SortOrder
    module?: SortOrder
    requestHash?: SortOrder
    planCode?: SortOrder
    ruleVersion?: SortOrder
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
    configSnapshotJson?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: GenerationTaskOrderByRelationAggregateInput
    _relevance?: TaskQuoteOrderByRelevanceInput
  }

  export type TaskQuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskQuoteWhereInput | TaskQuoteWhereInput[]
    OR?: TaskQuoteWhereInput[]
    NOT?: TaskQuoteWhereInput | TaskQuoteWhereInput[]
    userId?: StringFilter<"TaskQuote"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"TaskQuote"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"TaskQuote"> | string
    creditAccountId?: StringFilter<"TaskQuote"> | string
    taskType?: EnumTaskTypeFilter<"TaskQuote"> | $Enums.TaskType
    module?: EnumTaskModuleFilter<"TaskQuote"> | $Enums.TaskModule
    requestHash?: StringFilter<"TaskQuote"> | string
    planCode?: StringFilter<"TaskQuote"> | string
    ruleVersion?: StringFilter<"TaskQuote"> | string
    unitCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonFilter<"TaskQuote">
    status?: EnumQuoteStatusFilter<"TaskQuote"> | $Enums.QuoteStatus
    expiresAt?: DateTimeFilter<"TaskQuote"> | Date | string
    usedAt?: DateTimeNullableFilter<"TaskQuote"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskQuote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: GenerationTaskListRelationFilter
  }, "id">

  export type TaskQuoteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    taskType?: SortOrder
    module?: SortOrder
    requestHash?: SortOrder
    planCode?: SortOrder
    ruleVersion?: SortOrder
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
    configSnapshotJson?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskQuoteCountOrderByAggregateInput
    _avg?: TaskQuoteAvgOrderByAggregateInput
    _max?: TaskQuoteMaxOrderByAggregateInput
    _min?: TaskQuoteMinOrderByAggregateInput
    _sum?: TaskQuoteSumOrderByAggregateInput
  }

  export type TaskQuoteScalarWhereWithAggregatesInput = {
    AND?: TaskQuoteScalarWhereWithAggregatesInput | TaskQuoteScalarWhereWithAggregatesInput[]
    OR?: TaskQuoteScalarWhereWithAggregatesInput[]
    NOT?: TaskQuoteScalarWhereWithAggregatesInput | TaskQuoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskQuote"> | string
    userId?: StringWithAggregatesFilter<"TaskQuote"> | string
    billingOwnerType?: EnumOwnerTypeWithAggregatesFilter<"TaskQuote"> | $Enums.OwnerType
    billingOwnerId?: StringWithAggregatesFilter<"TaskQuote"> | string
    creditAccountId?: StringWithAggregatesFilter<"TaskQuote"> | string
    taskType?: EnumTaskTypeWithAggregatesFilter<"TaskQuote"> | $Enums.TaskType
    module?: EnumTaskModuleWithAggregatesFilter<"TaskQuote"> | $Enums.TaskModule
    requestHash?: StringWithAggregatesFilter<"TaskQuote"> | string
    planCode?: StringWithAggregatesFilter<"TaskQuote"> | string
    ruleVersion?: StringWithAggregatesFilter<"TaskQuote"> | string
    unitCredits?: DecimalWithAggregatesFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalWithAggregatesFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalWithAggregatesFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonWithAggregatesFilter<"TaskQuote">
    status?: EnumQuoteStatusWithAggregatesFilter<"TaskQuote"> | $Enums.QuoteStatus
    expiresAt?: DateTimeWithAggregatesFilter<"TaskQuote"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"TaskQuote"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskQuote"> | Date | string
  }

  export type GenerationTaskWhereInput = {
    AND?: GenerationTaskWhereInput | GenerationTaskWhereInput[]
    OR?: GenerationTaskWhereInput[]
    NOT?: GenerationTaskWhereInput | GenerationTaskWhereInput[]
    id?: StringFilter<"GenerationTask"> | string
    userId?: StringFilter<"GenerationTask"> | string
    ownerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    ownerId?: StringFilter<"GenerationTask"> | string
    projectId?: StringNullableFilter<"GenerationTask"> | string | null
    parentTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    quoteId?: StringNullableFilter<"GenerationTask"> | string | null
    name?: StringFilter<"GenerationTask"> | string
    module?: EnumTaskModuleFilter<"GenerationTask"> | $Enums.TaskModule
    scene?: StringNullableFilter<"GenerationTask"> | string | null
    taskType?: EnumTaskTypeFilter<"GenerationTask"> | $Enums.TaskType
    sourcePage?: StringNullableFilter<"GenerationTask"> | string | null
    batchId?: StringNullableFilter<"GenerationTask"> | string | null
    status?: EnumTaskStatusFilter<"GenerationTask"> | $Enums.TaskStatus
    progress?: IntFilter<"GenerationTask"> | number
    stage?: StringNullableFilter<"GenerationTask"> | string | null
    queuePriority?: IntFilter<"GenerationTask"> | number
    queuePosition?: IntNullableFilter<"GenerationTask"> | number | null
    modelId?: StringNullableFilter<"GenerationTask"> | string | null
    sceneId?: StringNullableFilter<"GenerationTask"> | string | null
    templateId?: StringNullableFilter<"GenerationTask"> | string | null
    configJson?: JsonFilter<"GenerationTask">
    configVersion?: StringFilter<"GenerationTask"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"GenerationTask"> | string
    creditAccountId?: StringFilter<"GenerationTask"> | string
    billingTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    billingStatus?: EnumBillingStatusFilter<"GenerationTask"> | $Enums.BillingStatus
    estimatedCredits?: DecimalFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string
    settledCredits?: DecimalNullableFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string | null
    errorCode?: StringNullableFilter<"GenerationTask"> | string | null
    errorMessage?: StringNullableFilter<"GenerationTask"> | string | null
    retryCount?: IntFilter<"GenerationTask"> | number
    cancellable?: BoolFilter<"GenerationTask"> | boolean
    deadlineAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    createdAt?: DateTimeFilter<"GenerationTask"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationTask"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    version?: IntFilter<"GenerationTask"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    quote?: XOR<TaskQuoteNullableScalarRelationFilter, TaskQuoteWhereInput> | null
    inputs?: TaskInputListRelationFilter
    outputs?: TaskOutputListRelationFilter
    events?: TaskEventListRelationFilter
  }

  export type GenerationTaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    quoteId?: SortOrderInput | SortOrder
    name?: SortOrder
    module?: SortOrder
    scene?: SortOrderInput | SortOrder
    taskType?: SortOrder
    sourcePage?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    stage?: SortOrderInput | SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    sceneId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    configJson?: SortOrder
    configVersion?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    billingTaskId?: SortOrderInput | SortOrder
    billingStatus?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    cancellable?: SortOrder
    deadlineAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    version?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    quote?: TaskQuoteOrderByWithRelationInput
    inputs?: TaskInputOrderByRelationAggregateInput
    outputs?: TaskOutputOrderByRelationAggregateInput
    events?: TaskEventOrderByRelationAggregateInput
    _relevance?: GenerationTaskOrderByRelevanceInput
  }

  export type GenerationTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenerationTaskWhereInput | GenerationTaskWhereInput[]
    OR?: GenerationTaskWhereInput[]
    NOT?: GenerationTaskWhereInput | GenerationTaskWhereInput[]
    userId?: StringFilter<"GenerationTask"> | string
    ownerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    ownerId?: StringFilter<"GenerationTask"> | string
    projectId?: StringNullableFilter<"GenerationTask"> | string | null
    parentTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    quoteId?: StringNullableFilter<"GenerationTask"> | string | null
    name?: StringFilter<"GenerationTask"> | string
    module?: EnumTaskModuleFilter<"GenerationTask"> | $Enums.TaskModule
    scene?: StringNullableFilter<"GenerationTask"> | string | null
    taskType?: EnumTaskTypeFilter<"GenerationTask"> | $Enums.TaskType
    sourcePage?: StringNullableFilter<"GenerationTask"> | string | null
    batchId?: StringNullableFilter<"GenerationTask"> | string | null
    status?: EnumTaskStatusFilter<"GenerationTask"> | $Enums.TaskStatus
    progress?: IntFilter<"GenerationTask"> | number
    stage?: StringNullableFilter<"GenerationTask"> | string | null
    queuePriority?: IntFilter<"GenerationTask"> | number
    queuePosition?: IntNullableFilter<"GenerationTask"> | number | null
    modelId?: StringNullableFilter<"GenerationTask"> | string | null
    sceneId?: StringNullableFilter<"GenerationTask"> | string | null
    templateId?: StringNullableFilter<"GenerationTask"> | string | null
    configJson?: JsonFilter<"GenerationTask">
    configVersion?: StringFilter<"GenerationTask"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"GenerationTask"> | string
    creditAccountId?: StringFilter<"GenerationTask"> | string
    billingTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    billingStatus?: EnumBillingStatusFilter<"GenerationTask"> | $Enums.BillingStatus
    estimatedCredits?: DecimalFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string
    settledCredits?: DecimalNullableFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string | null
    errorCode?: StringNullableFilter<"GenerationTask"> | string | null
    errorMessage?: StringNullableFilter<"GenerationTask"> | string | null
    retryCount?: IntFilter<"GenerationTask"> | number
    cancellable?: BoolFilter<"GenerationTask"> | boolean
    deadlineAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    createdAt?: DateTimeFilter<"GenerationTask"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationTask"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    version?: IntFilter<"GenerationTask"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    quote?: XOR<TaskQuoteNullableScalarRelationFilter, TaskQuoteWhereInput> | null
    inputs?: TaskInputListRelationFilter
    outputs?: TaskOutputListRelationFilter
    events?: TaskEventListRelationFilter
  }, "id">

  export type GenerationTaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    quoteId?: SortOrderInput | SortOrder
    name?: SortOrder
    module?: SortOrder
    scene?: SortOrderInput | SortOrder
    taskType?: SortOrder
    sourcePage?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    stage?: SortOrderInput | SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    sceneId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    configJson?: SortOrder
    configVersion?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    billingTaskId?: SortOrderInput | SortOrder
    billingStatus?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    cancellable?: SortOrder
    deadlineAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: GenerationTaskCountOrderByAggregateInput
    _avg?: GenerationTaskAvgOrderByAggregateInput
    _max?: GenerationTaskMaxOrderByAggregateInput
    _min?: GenerationTaskMinOrderByAggregateInput
    _sum?: GenerationTaskSumOrderByAggregateInput
  }

  export type GenerationTaskScalarWhereWithAggregatesInput = {
    AND?: GenerationTaskScalarWhereWithAggregatesInput | GenerationTaskScalarWhereWithAggregatesInput[]
    OR?: GenerationTaskScalarWhereWithAggregatesInput[]
    NOT?: GenerationTaskScalarWhereWithAggregatesInput | GenerationTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenerationTask"> | string
    userId?: StringWithAggregatesFilter<"GenerationTask"> | string
    ownerType?: EnumOwnerTypeWithAggregatesFilter<"GenerationTask"> | $Enums.OwnerType
    ownerId?: StringWithAggregatesFilter<"GenerationTask"> | string
    projectId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    parentTaskId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    quoteId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    name?: StringWithAggregatesFilter<"GenerationTask"> | string
    module?: EnumTaskModuleWithAggregatesFilter<"GenerationTask"> | $Enums.TaskModule
    scene?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    taskType?: EnumTaskTypeWithAggregatesFilter<"GenerationTask"> | $Enums.TaskType
    sourcePage?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    batchId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"GenerationTask"> | $Enums.TaskStatus
    progress?: IntWithAggregatesFilter<"GenerationTask"> | number
    stage?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    queuePriority?: IntWithAggregatesFilter<"GenerationTask"> | number
    queuePosition?: IntNullableWithAggregatesFilter<"GenerationTask"> | number | null
    modelId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    sceneId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    configJson?: JsonWithAggregatesFilter<"GenerationTask">
    configVersion?: StringWithAggregatesFilter<"GenerationTask"> | string
    billingOwnerType?: EnumOwnerTypeWithAggregatesFilter<"GenerationTask"> | $Enums.OwnerType
    billingOwnerId?: StringWithAggregatesFilter<"GenerationTask"> | string
    creditAccountId?: StringWithAggregatesFilter<"GenerationTask"> | string
    billingTaskId?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    billingStatus?: EnumBillingStatusWithAggregatesFilter<"GenerationTask"> | $Enums.BillingStatus
    estimatedCredits?: DecimalWithAggregatesFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string
    settledCredits?: DecimalNullableWithAggregatesFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string | null
    errorCode?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"GenerationTask"> | string | null
    retryCount?: IntWithAggregatesFilter<"GenerationTask"> | number
    cancellable?: BoolWithAggregatesFilter<"GenerationTask"> | boolean
    deadlineAt?: DateTimeNullableWithAggregatesFilter<"GenerationTask"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"GenerationTask"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"GenerationTask"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"GenerationTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GenerationTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GenerationTask"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GenerationTask"> | Date | string | null
    version?: IntWithAggregatesFilter<"GenerationTask"> | number
  }

  export type TaskInputWhereInput = {
    AND?: TaskInputWhereInput | TaskInputWhereInput[]
    OR?: TaskInputWhereInput[]
    NOT?: TaskInputWhereInput | TaskInputWhereInput[]
    id?: StringFilter<"TaskInput"> | string
    taskId?: StringFilter<"TaskInput"> | string
    assetId?: StringFilter<"TaskInput"> | string
    inputRole?: StringFilter<"TaskInput"> | string
    sortOrder?: IntFilter<"TaskInput"> | number
    snapshotJson?: JsonNullableFilter<"TaskInput">
    createdAt?: DateTimeFilter<"TaskInput"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }

  export type TaskInputOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    inputRole?: SortOrder
    sortOrder?: SortOrder
    snapshotJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: GenerationTaskOrderByWithRelationInput
    _relevance?: TaskInputOrderByRelevanceInput
  }

  export type TaskInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskInputWhereInput | TaskInputWhereInput[]
    OR?: TaskInputWhereInput[]
    NOT?: TaskInputWhereInput | TaskInputWhereInput[]
    taskId?: StringFilter<"TaskInput"> | string
    assetId?: StringFilter<"TaskInput"> | string
    inputRole?: StringFilter<"TaskInput"> | string
    sortOrder?: IntFilter<"TaskInput"> | number
    snapshotJson?: JsonNullableFilter<"TaskInput">
    createdAt?: DateTimeFilter<"TaskInput"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }, "id">

  export type TaskInputOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    inputRole?: SortOrder
    sortOrder?: SortOrder
    snapshotJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskInputCountOrderByAggregateInput
    _avg?: TaskInputAvgOrderByAggregateInput
    _max?: TaskInputMaxOrderByAggregateInput
    _min?: TaskInputMinOrderByAggregateInput
    _sum?: TaskInputSumOrderByAggregateInput
  }

  export type TaskInputScalarWhereWithAggregatesInput = {
    AND?: TaskInputScalarWhereWithAggregatesInput | TaskInputScalarWhereWithAggregatesInput[]
    OR?: TaskInputScalarWhereWithAggregatesInput[]
    NOT?: TaskInputScalarWhereWithAggregatesInput | TaskInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskInput"> | string
    taskId?: StringWithAggregatesFilter<"TaskInput"> | string
    assetId?: StringWithAggregatesFilter<"TaskInput"> | string
    inputRole?: StringWithAggregatesFilter<"TaskInput"> | string
    sortOrder?: IntWithAggregatesFilter<"TaskInput"> | number
    snapshotJson?: JsonNullableWithAggregatesFilter<"TaskInput">
    createdAt?: DateTimeWithAggregatesFilter<"TaskInput"> | Date | string
  }

  export type TaskOutputWhereInput = {
    AND?: TaskOutputWhereInput | TaskOutputWhereInput[]
    OR?: TaskOutputWhereInput[]
    NOT?: TaskOutputWhereInput | TaskOutputWhereInput[]
    id?: StringFilter<"TaskOutput"> | string
    taskId?: StringFilter<"TaskOutput"> | string
    assetId?: StringFilter<"TaskOutput"> | string
    outputType?: StringFilter<"TaskOutput"> | string
    sortOrder?: IntFilter<"TaskOutput"> | number
    providerOutputRef?: StringNullableFilter<"TaskOutput"> | string | null
    reviewStatus?: StringFilter<"TaskOutput"> | string
    createdAt?: DateTimeFilter<"TaskOutput"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }

  export type TaskOutputOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    outputType?: SortOrder
    sortOrder?: SortOrder
    providerOutputRef?: SortOrderInput | SortOrder
    reviewStatus?: SortOrder
    createdAt?: SortOrder
    task?: GenerationTaskOrderByWithRelationInput
    _relevance?: TaskOutputOrderByRelevanceInput
  }

  export type TaskOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskOutputWhereInput | TaskOutputWhereInput[]
    OR?: TaskOutputWhereInput[]
    NOT?: TaskOutputWhereInput | TaskOutputWhereInput[]
    taskId?: StringFilter<"TaskOutput"> | string
    assetId?: StringFilter<"TaskOutput"> | string
    outputType?: StringFilter<"TaskOutput"> | string
    sortOrder?: IntFilter<"TaskOutput"> | number
    providerOutputRef?: StringNullableFilter<"TaskOutput"> | string | null
    reviewStatus?: StringFilter<"TaskOutput"> | string
    createdAt?: DateTimeFilter<"TaskOutput"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }, "id">

  export type TaskOutputOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    outputType?: SortOrder
    sortOrder?: SortOrder
    providerOutputRef?: SortOrderInput | SortOrder
    reviewStatus?: SortOrder
    createdAt?: SortOrder
    _count?: TaskOutputCountOrderByAggregateInput
    _avg?: TaskOutputAvgOrderByAggregateInput
    _max?: TaskOutputMaxOrderByAggregateInput
    _min?: TaskOutputMinOrderByAggregateInput
    _sum?: TaskOutputSumOrderByAggregateInput
  }

  export type TaskOutputScalarWhereWithAggregatesInput = {
    AND?: TaskOutputScalarWhereWithAggregatesInput | TaskOutputScalarWhereWithAggregatesInput[]
    OR?: TaskOutputScalarWhereWithAggregatesInput[]
    NOT?: TaskOutputScalarWhereWithAggregatesInput | TaskOutputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskOutput"> | string
    taskId?: StringWithAggregatesFilter<"TaskOutput"> | string
    assetId?: StringWithAggregatesFilter<"TaskOutput"> | string
    outputType?: StringWithAggregatesFilter<"TaskOutput"> | string
    sortOrder?: IntWithAggregatesFilter<"TaskOutput"> | number
    providerOutputRef?: StringNullableWithAggregatesFilter<"TaskOutput"> | string | null
    reviewStatus?: StringWithAggregatesFilter<"TaskOutput"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskOutput"> | Date | string
  }

  export type TaskEventWhereInput = {
    AND?: TaskEventWhereInput | TaskEventWhereInput[]
    OR?: TaskEventWhereInput[]
    NOT?: TaskEventWhereInput | TaskEventWhereInput[]
    id?: BigIntFilter<"TaskEvent"> | bigint | number
    taskId?: StringFilter<"TaskEvent"> | string
    eventType?: StringFilter<"TaskEvent"> | string
    fromStatus?: StringNullableFilter<"TaskEvent"> | string | null
    toStatus?: StringNullableFilter<"TaskEvent"> | string | null
    progress?: IntNullableFilter<"TaskEvent"> | number | null
    payloadJson?: JsonNullableFilter<"TaskEvent">
    requestId?: StringNullableFilter<"TaskEvent"> | string | null
    createdAt?: DateTimeFilter<"TaskEvent"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }

  export type TaskEventOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    eventType?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    payloadJson?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: GenerationTaskOrderByWithRelationInput
    _relevance?: TaskEventOrderByRelevanceInput
  }

  export type TaskEventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TaskEventWhereInput | TaskEventWhereInput[]
    OR?: TaskEventWhereInput[]
    NOT?: TaskEventWhereInput | TaskEventWhereInput[]
    taskId?: StringFilter<"TaskEvent"> | string
    eventType?: StringFilter<"TaskEvent"> | string
    fromStatus?: StringNullableFilter<"TaskEvent"> | string | null
    toStatus?: StringNullableFilter<"TaskEvent"> | string | null
    progress?: IntNullableFilter<"TaskEvent"> | number | null
    payloadJson?: JsonNullableFilter<"TaskEvent">
    requestId?: StringNullableFilter<"TaskEvent"> | string | null
    createdAt?: DateTimeFilter<"TaskEvent"> | Date | string
    task?: XOR<GenerationTaskScalarRelationFilter, GenerationTaskWhereInput>
  }, "id">

  export type TaskEventOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    eventType?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    payloadJson?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskEventCountOrderByAggregateInput
    _avg?: TaskEventAvgOrderByAggregateInput
    _max?: TaskEventMaxOrderByAggregateInput
    _min?: TaskEventMinOrderByAggregateInput
    _sum?: TaskEventSumOrderByAggregateInput
  }

  export type TaskEventScalarWhereWithAggregatesInput = {
    AND?: TaskEventScalarWhereWithAggregatesInput | TaskEventScalarWhereWithAggregatesInput[]
    OR?: TaskEventScalarWhereWithAggregatesInput[]
    NOT?: TaskEventScalarWhereWithAggregatesInput | TaskEventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TaskEvent"> | bigint | number
    taskId?: StringWithAggregatesFilter<"TaskEvent"> | string
    eventType?: StringWithAggregatesFilter<"TaskEvent"> | string
    fromStatus?: StringNullableWithAggregatesFilter<"TaskEvent"> | string | null
    toStatus?: StringNullableWithAggregatesFilter<"TaskEvent"> | string | null
    progress?: IntNullableWithAggregatesFilter<"TaskEvent"> | number | null
    payloadJson?: JsonNullableWithAggregatesFilter<"TaskEvent">
    requestId?: StringNullableWithAggregatesFilter<"TaskEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskEvent"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    taskQuotes?: TaskQuoteCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    taskQuotes?: TaskQuoteUncheckedCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    taskQuotes?: TaskQuoteUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    taskQuotes?: TaskQuoteUncheckedUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthSessionCreateInput = {
    id: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id: string
    userId: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id: string
    userId: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    id: string
    targetHash: string
    purpose: string
    codeHash: string
    status: string
    attemptCount?: number
    sendChannel: string
    providerMessageId?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateInput = {
    id: string
    targetHash: string
    purpose: string
    codeHash: string
    status: string
    attemptCount?: number
    sendChannel: string
    providerMessageId?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    sendChannel?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    sendChannel?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    id: string
    targetHash: string
    purpose: string
    codeHash: string
    status: string
    attemptCount?: number
    sendChannel: string
    providerMessageId?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    sendChannel?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    sendChannel?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId?: string | null
    folderId?: string | null
    name: string
    originalFileName: string
    purpose?: string | null
    mediaType: string
    mimeType: string
    fileExt: string
    fileSize: bigint | number
    sha256?: string | null
    storageProvider: string
    storageBucket: string
    storageKey: string
    publicUrl?: string | null
    thumbnailUrl?: string | null
    width?: number | null
    height?: number | null
    durationMs?: bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus: $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: boolean
    status: $Enums.AssetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUncheckedCreateInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId?: string | null
    folderId?: string | null
    name: string
    originalFileName: string
    purpose?: string | null
    mediaType: string
    mimeType: string
    fileExt: string
    fileSize: bigint | number
    sha256?: string | null
    storageProvider: string
    storageBucket: string
    storageKey: string
    publicUrl?: string | null
    thumbnailUrl?: string | null
    width?: number | null
    height?: number | null
    durationMs?: bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus: $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: boolean
    status: $Enums.AssetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: StringFieldUpdateOperationsInput | string
    storageBucket?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: StringFieldUpdateOperationsInput | string
    storageBucket?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetCreateManyInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId?: string | null
    folderId?: string | null
    name: string
    originalFileName: string
    purpose?: string | null
    mediaType: string
    mimeType: string
    fileExt: string
    fileSize: bigint | number
    sha256?: string | null
    storageProvider: string
    storageBucket: string
    storageKey: string
    publicUrl?: string | null
    thumbnailUrl?: string | null
    width?: number | null
    height?: number | null
    durationMs?: bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus: $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: boolean
    status: $Enums.AssetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: StringFieldUpdateOperationsInput | string
    storageBucket?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: StringFieldUpdateOperationsInput | string
    storageBucket?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    reviewResultJson?: NullableJsonNullValueInput | InputJsonValue
    favorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description?: string | null
    coverAssetId?: string | null
    status: $Enums.ProjectStatus
    taskCount?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tasks?: GenerationTaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description?: string | null
    coverAssetId?: string | null
    status: $Enums.ProjectStatus
    taskCount?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tasks?: GenerationTaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: GenerationTaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: GenerationTaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description?: string | null
    coverAssetId?: string | null
    status: $Enums.ProjectStatus
    taskCount?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskQuoteCreateInput = {
    id: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTaskQuotesInput
    tasks?: GenerationTaskCreateNestedManyWithoutQuoteInput
  }

  export type TaskQuoteUncheckedCreateInput = {
    id: string
    userId: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    tasks?: GenerationTaskUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type TaskQuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskQuotesNestedInput
    tasks?: GenerationTaskUpdateManyWithoutQuoteNestedInput
  }

  export type TaskQuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: GenerationTaskUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type TaskQuoteCreateManyInput = {
    id: string
    userId: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TaskQuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskQuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationTaskCreateInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskCreateManyInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
  }

  export type GenerationTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type GenerationTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskInputCreateInput = {
    id: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    task: GenerationTaskCreateNestedOneWithoutInputsInput
  }

  export type TaskInputUncheckedCreateInput = {
    id: string
    taskId: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: GenerationTaskUpdateOneRequiredWithoutInputsNestedInput
  }

  export type TaskInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInputCreateManyInput = {
    id: string
    taskId: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputCreateInput = {
    id: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
    task: GenerationTaskCreateNestedOneWithoutOutputsInput
  }

  export type TaskOutputUncheckedCreateInput = {
    id: string
    taskId: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
  }

  export type TaskOutputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: GenerationTaskUpdateOneRequiredWithoutOutputsNestedInput
  }

  export type TaskOutputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputCreateManyInput = {
    id: string
    taskId: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
  }

  export type TaskOutputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventCreateInput = {
    id?: bigint | number
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    task: GenerationTaskCreateNestedOneWithoutEventsInput
  }

  export type TaskEventUncheckedCreateInput = {
    id?: bigint | number
    taskId: string
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
  }

  export type TaskEventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: GenerationTaskUpdateOneRequiredWithoutEventsNestedInput
  }

  export type TaskEventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    taskId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventCreateManyInput = {
    id?: bigint | number
    taskId: string
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
  }

  export type TaskEventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    taskId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumCreditAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusFilter<$PrismaModel> | $Enums.CreditAccountStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type TaskQuoteListRelationFilter = {
    every?: TaskQuoteWhereInput
    some?: TaskQuoteWhereInput
    none?: TaskQuoteWhereInput
  }

  export type GenerationTaskListRelationFilter = {
    every?: GenerationTaskWhereInput
    some?: GenerationTaskWhereInput
    none?: GenerationTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskQuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenerationTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phoneCiphertext?: SortOrder
    phoneHash?: SortOrder
    emailCiphertext?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    avatarAssetId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    registerSource?: SortOrder
    creditAccountId?: SortOrder
    creditAccountStatus?: SortOrder
    nicknameUpdatedAt?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneCiphertext?: SortOrder
    phoneHash?: SortOrder
    emailCiphertext?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    avatarAssetId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    registerSource?: SortOrder
    creditAccountId?: SortOrder
    creditAccountStatus?: SortOrder
    nicknameUpdatedAt?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phoneCiphertext?: SortOrder
    phoneHash?: SortOrder
    emailCiphertext?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    avatarAssetId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    registerSource?: SortOrder
    creditAccountId?: SortOrder
    creditAccountStatus?: SortOrder
    nicknameUpdatedAt?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumCreditAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuthSessionOrderByRelevanceInput = {
    fields: AuthSessionOrderByRelevanceFieldEnum | AuthSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    lastActiveAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    lastActiveAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    lastActiveAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VerificationCodeOrderByRelevanceInput = {
    fields: VerificationCodeOrderByRelevanceFieldEnum | VerificationCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    targetHash?: SortOrder
    purpose?: SortOrder
    codeHash?: SortOrder
    status?: SortOrder
    attemptCount?: SortOrder
    sendChannel?: SortOrder
    providerMessageId?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeAvgOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    targetHash?: SortOrder
    purpose?: SortOrder
    codeHash?: SortOrder
    status?: SortOrder
    attemptCount?: SortOrder
    sendChannel?: SortOrder
    providerMessageId?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    targetHash?: SortOrder
    purpose?: SortOrder
    codeHash?: SortOrder
    status?: SortOrder
    attemptCount?: SortOrder
    sendChannel?: SortOrder
    providerMessageId?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeSumOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[]
    notIn?: $Enums.OwnerType[]
    not?: NestedEnumOwnerTypeFilter<$PrismaModel> | $Enums.OwnerType
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type AssetOrderByRelevanceInput = {
    fields: AssetOrderByRelevanceFieldEnum | AssetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    name?: SortOrder
    originalFileName?: SortOrder
    purpose?: SortOrder
    mediaType?: SortOrder
    mimeType?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    sha256?: SortOrder
    storageProvider?: SortOrder
    storageBucket?: SortOrder
    storageKey?: SortOrder
    publicUrl?: SortOrder
    thumbnailUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    durationMs?: SortOrder
    metadataJson?: SortOrder
    reviewStatus?: SortOrder
    reviewResultJson?: SortOrder
    favorite?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    durationMs?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    name?: SortOrder
    originalFileName?: SortOrder
    purpose?: SortOrder
    mediaType?: SortOrder
    mimeType?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    sha256?: SortOrder
    storageProvider?: SortOrder
    storageBucket?: SortOrder
    storageKey?: SortOrder
    publicUrl?: SortOrder
    thumbnailUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    durationMs?: SortOrder
    reviewStatus?: SortOrder
    favorite?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    name?: SortOrder
    originalFileName?: SortOrder
    purpose?: SortOrder
    mediaType?: SortOrder
    mimeType?: SortOrder
    fileExt?: SortOrder
    fileSize?: SortOrder
    sha256?: SortOrder
    storageProvider?: SortOrder
    storageBucket?: SortOrder
    storageKey?: SortOrder
    publicUrl?: SortOrder
    thumbnailUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    durationMs?: SortOrder
    reviewStatus?: SortOrder
    favorite?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    durationMs?: SortOrder
  }

  export type EnumOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[]
    notIn?: $Enums.OwnerType[]
    not?: NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnerTypeFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverAssetId?: SortOrder
    status?: SortOrder
    taskCount?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    taskCount?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverAssetId?: SortOrder
    status?: SortOrder
    taskCount?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverAssetId?: SortOrder
    status?: SortOrder
    taskCount?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    taskCount?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[]
    notIn?: $Enums.TaskType[]
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumTaskModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskModule | EnumTaskModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TaskModule[]
    notIn?: $Enums.TaskModule[]
    not?: NestedEnumTaskModuleFilter<$PrismaModel> | $Enums.TaskModule
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumQuoteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusFilter<$PrismaModel> | $Enums.QuoteStatus
  }

  export type TaskQuoteOrderByRelevanceInput = {
    fields: TaskQuoteOrderByRelevanceFieldEnum | TaskQuoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskQuoteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    taskType?: SortOrder
    module?: SortOrder
    requestHash?: SortOrder
    planCode?: SortOrder
    ruleVersion?: SortOrder
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
    configSnapshotJson?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskQuoteAvgOrderByAggregateInput = {
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
  }

  export type TaskQuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    taskType?: SortOrder
    module?: SortOrder
    requestHash?: SortOrder
    planCode?: SortOrder
    ruleVersion?: SortOrder
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskQuoteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    taskType?: SortOrder
    module?: SortOrder
    requestHash?: SortOrder
    planCode?: SortOrder
    ruleVersion?: SortOrder
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskQuoteSumOrderByAggregateInput = {
    unitCredits?: SortOrder
    billableQuantity?: SortOrder
    estimatedCredits?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[]
    notIn?: $Enums.TaskType[]
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumTaskModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskModule | EnumTaskModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TaskModule[]
    notIn?: $Enums.TaskModule[]
    not?: NestedEnumTaskModuleWithAggregatesFilter<$PrismaModel> | $Enums.TaskModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskModuleFilter<$PrismaModel>
    _max?: NestedEnumTaskModuleFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumQuoteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteStatusFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumBillingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[]
    notIn?: $Enums.BillingStatus[]
    not?: NestedEnumBillingStatusFilter<$PrismaModel> | $Enums.BillingStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type TaskQuoteNullableScalarRelationFilter = {
    is?: TaskQuoteWhereInput | null
    isNot?: TaskQuoteWhereInput | null
  }

  export type TaskInputListRelationFilter = {
    every?: TaskInputWhereInput
    some?: TaskInputWhereInput
    none?: TaskInputWhereInput
  }

  export type TaskOutputListRelationFilter = {
    every?: TaskOutputWhereInput
    some?: TaskOutputWhereInput
    none?: TaskOutputWhereInput
  }

  export type TaskEventListRelationFilter = {
    every?: TaskEventWhereInput
    some?: TaskEventWhereInput
    none?: TaskEventWhereInput
  }

  export type TaskInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenerationTaskOrderByRelevanceInput = {
    fields: GenerationTaskOrderByRelevanceFieldEnum | GenerationTaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenerationTaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    projectId?: SortOrder
    parentTaskId?: SortOrder
    quoteId?: SortOrder
    name?: SortOrder
    module?: SortOrder
    scene?: SortOrder
    taskType?: SortOrder
    sourcePage?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    stage?: SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrder
    modelId?: SortOrder
    sceneId?: SortOrder
    templateId?: SortOrder
    configJson?: SortOrder
    configVersion?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    billingTaskId?: SortOrder
    billingStatus?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    cancellable?: SortOrder
    deadlineAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
  }

  export type GenerationTaskAvgOrderByAggregateInput = {
    progress?: SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrder
    retryCount?: SortOrder
    version?: SortOrder
  }

  export type GenerationTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    projectId?: SortOrder
    parentTaskId?: SortOrder
    quoteId?: SortOrder
    name?: SortOrder
    module?: SortOrder
    scene?: SortOrder
    taskType?: SortOrder
    sourcePage?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    stage?: SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrder
    modelId?: SortOrder
    sceneId?: SortOrder
    templateId?: SortOrder
    configVersion?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    billingTaskId?: SortOrder
    billingStatus?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    cancellable?: SortOrder
    deadlineAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
  }

  export type GenerationTaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    projectId?: SortOrder
    parentTaskId?: SortOrder
    quoteId?: SortOrder
    name?: SortOrder
    module?: SortOrder
    scene?: SortOrder
    taskType?: SortOrder
    sourcePage?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    stage?: SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrder
    modelId?: SortOrder
    sceneId?: SortOrder
    templateId?: SortOrder
    configVersion?: SortOrder
    billingOwnerType?: SortOrder
    billingOwnerId?: SortOrder
    creditAccountId?: SortOrder
    billingTaskId?: SortOrder
    billingStatus?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    cancellable?: SortOrder
    deadlineAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    version?: SortOrder
  }

  export type GenerationTaskSumOrderByAggregateInput = {
    progress?: SortOrder
    queuePriority?: SortOrder
    queuePosition?: SortOrder
    estimatedCredits?: SortOrder
    settledCredits?: SortOrder
    retryCount?: SortOrder
    version?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumBillingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[]
    notIn?: $Enums.BillingStatus[]
    not?: NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type GenerationTaskScalarRelationFilter = {
    is?: GenerationTaskWhereInput
    isNot?: GenerationTaskWhereInput
  }

  export type TaskInputOrderByRelevanceInput = {
    fields: TaskInputOrderByRelevanceFieldEnum | TaskInputOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskInputCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    inputRole?: SortOrder
    sortOrder?: SortOrder
    snapshotJson?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskInputAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TaskInputMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    inputRole?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskInputMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    inputRole?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskInputSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TaskOutputOrderByRelevanceInput = {
    fields: TaskOutputOrderByRelevanceFieldEnum | TaskOutputOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskOutputCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    outputType?: SortOrder
    sortOrder?: SortOrder
    providerOutputRef?: SortOrder
    reviewStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOutputAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TaskOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    outputType?: SortOrder
    sortOrder?: SortOrder
    providerOutputRef?: SortOrder
    reviewStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOutputMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    assetId?: SortOrder
    outputType?: SortOrder
    sortOrder?: SortOrder
    providerOutputRef?: SortOrder
    reviewStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOutputSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TaskEventOrderByRelevanceInput = {
    fields: TaskEventOrderByRelevanceFieldEnum | TaskEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskEventCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    eventType?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    progress?: SortOrder
    payloadJson?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskEventAvgOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
  }

  export type TaskEventMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    eventType?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    progress?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskEventMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    eventType?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    progress?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskEventSumOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type TaskQuoteCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput> | TaskQuoteCreateWithoutUserInput[] | TaskQuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutUserInput | TaskQuoteCreateOrConnectWithoutUserInput[]
    createMany?: TaskQuoteCreateManyUserInputEnvelope
    connect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
  }

  export type GenerationTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput> | GenerationTaskCreateWithoutUserInput[] | GenerationTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutUserInput | GenerationTaskCreateOrConnectWithoutUserInput[]
    createMany?: GenerationTaskCreateManyUserInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type TaskQuoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput> | TaskQuoteCreateWithoutUserInput[] | TaskQuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutUserInput | TaskQuoteCreateOrConnectWithoutUserInput[]
    createMany?: TaskQuoteCreateManyUserInputEnvelope
    connect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
  }

  export type GenerationTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput> | GenerationTaskCreateWithoutUserInput[] | GenerationTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutUserInput | GenerationTaskCreateOrConnectWithoutUserInput[]
    createMany?: GenerationTaskCreateManyUserInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumCreditAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.CreditAccountStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type TaskQuoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput> | TaskQuoteCreateWithoutUserInput[] | TaskQuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutUserInput | TaskQuoteCreateOrConnectWithoutUserInput[]
    upsert?: TaskQuoteUpsertWithWhereUniqueWithoutUserInput | TaskQuoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskQuoteCreateManyUserInputEnvelope
    set?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    disconnect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    delete?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    connect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    update?: TaskQuoteUpdateWithWhereUniqueWithoutUserInput | TaskQuoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskQuoteUpdateManyWithWhereWithoutUserInput | TaskQuoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskQuoteScalarWhereInput | TaskQuoteScalarWhereInput[]
  }

  export type GenerationTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput> | GenerationTaskCreateWithoutUserInput[] | GenerationTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutUserInput | GenerationTaskCreateOrConnectWithoutUserInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutUserInput | GenerationTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GenerationTaskCreateManyUserInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutUserInput | GenerationTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutUserInput | GenerationTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type TaskQuoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput> | TaskQuoteCreateWithoutUserInput[] | TaskQuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutUserInput | TaskQuoteCreateOrConnectWithoutUserInput[]
    upsert?: TaskQuoteUpsertWithWhereUniqueWithoutUserInput | TaskQuoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskQuoteCreateManyUserInputEnvelope
    set?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    disconnect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    delete?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    connect?: TaskQuoteWhereUniqueInput | TaskQuoteWhereUniqueInput[]
    update?: TaskQuoteUpdateWithWhereUniqueWithoutUserInput | TaskQuoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskQuoteUpdateManyWithWhereWithoutUserInput | TaskQuoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskQuoteScalarWhereInput | TaskQuoteScalarWhereInput[]
  }

  export type GenerationTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput> | GenerationTaskCreateWithoutUserInput[] | GenerationTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutUserInput | GenerationTaskCreateOrConnectWithoutUserInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutUserInput | GenerationTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GenerationTaskCreateManyUserInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutUserInput | GenerationTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutUserInput | GenerationTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuthSessionsInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthSessionsNestedInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    upsert?: UserUpsertWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthSessionsInput, UserUpdateWithoutAuthSessionsInput>, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnerType
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus
  }

  export type GenerationTaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput> | GenerationTaskCreateWithoutProjectInput[] | GenerationTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutProjectInput | GenerationTaskCreateOrConnectWithoutProjectInput[]
    createMany?: GenerationTaskCreateManyProjectInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type GenerationTaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput> | GenerationTaskCreateWithoutProjectInput[] | GenerationTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutProjectInput | GenerationTaskCreateOrConnectWithoutProjectInput[]
    createMany?: GenerationTaskCreateManyProjectInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type GenerationTaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput> | GenerationTaskCreateWithoutProjectInput[] | GenerationTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutProjectInput | GenerationTaskCreateOrConnectWithoutProjectInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutProjectInput | GenerationTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GenerationTaskCreateManyProjectInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutProjectInput | GenerationTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutProjectInput | GenerationTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type GenerationTaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput> | GenerationTaskCreateWithoutProjectInput[] | GenerationTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutProjectInput | GenerationTaskCreateOrConnectWithoutProjectInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutProjectInput | GenerationTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GenerationTaskCreateManyProjectInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutProjectInput | GenerationTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutProjectInput | GenerationTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTaskQuotesInput = {
    create?: XOR<UserCreateWithoutTaskQuotesInput, UserUncheckedCreateWithoutTaskQuotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskQuotesInput
    connect?: UserWhereUniqueInput
  }

  export type GenerationTaskCreateNestedManyWithoutQuoteInput = {
    create?: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput> | GenerationTaskCreateWithoutQuoteInput[] | GenerationTaskUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutQuoteInput | GenerationTaskCreateOrConnectWithoutQuoteInput[]
    createMany?: GenerationTaskCreateManyQuoteInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type GenerationTaskUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput> | GenerationTaskCreateWithoutQuoteInput[] | GenerationTaskUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutQuoteInput | GenerationTaskCreateOrConnectWithoutQuoteInput[]
    createMany?: GenerationTaskCreateManyQuoteInputEnvelope
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumTaskModuleFieldUpdateOperationsInput = {
    set?: $Enums.TaskModule
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumQuoteStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuoteStatus
  }

  export type UserUpdateOneRequiredWithoutTaskQuotesNestedInput = {
    create?: XOR<UserCreateWithoutTaskQuotesInput, UserUncheckedCreateWithoutTaskQuotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskQuotesInput
    upsert?: UserUpsertWithoutTaskQuotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskQuotesInput, UserUpdateWithoutTaskQuotesInput>, UserUncheckedUpdateWithoutTaskQuotesInput>
  }

  export type GenerationTaskUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput> | GenerationTaskCreateWithoutQuoteInput[] | GenerationTaskUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutQuoteInput | GenerationTaskCreateOrConnectWithoutQuoteInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutQuoteInput | GenerationTaskUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: GenerationTaskCreateManyQuoteInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutQuoteInput | GenerationTaskUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutQuoteInput | GenerationTaskUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type GenerationTaskUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput> | GenerationTaskCreateWithoutQuoteInput[] | GenerationTaskUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutQuoteInput | GenerationTaskCreateOrConnectWithoutQuoteInput[]
    upsert?: GenerationTaskUpsertWithWhereUniqueWithoutQuoteInput | GenerationTaskUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: GenerationTaskCreateManyQuoteInputEnvelope
    set?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    disconnect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    delete?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    connect?: GenerationTaskWhereUniqueInput | GenerationTaskWhereUniqueInput[]
    update?: GenerationTaskUpdateWithWhereUniqueWithoutQuoteInput | GenerationTaskUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: GenerationTaskUpdateManyWithWhereWithoutQuoteInput | GenerationTaskUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGenerationTasksInput = {
    create?: XOR<UserCreateWithoutGenerationTasksInput, UserUncheckedCreateWithoutGenerationTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutGenerationTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskQuoteCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskQuoteCreateWithoutTasksInput, TaskQuoteUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutTasksInput
    connect?: TaskQuoteWhereUniqueInput
  }

  export type TaskInputCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput> | TaskInputCreateWithoutTaskInput[] | TaskInputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInputCreateOrConnectWithoutTaskInput | TaskInputCreateOrConnectWithoutTaskInput[]
    createMany?: TaskInputCreateManyTaskInputEnvelope
    connect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
  }

  export type TaskOutputCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput> | TaskOutputCreateWithoutTaskInput[] | TaskOutputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOutputCreateOrConnectWithoutTaskInput | TaskOutputCreateOrConnectWithoutTaskInput[]
    createMany?: TaskOutputCreateManyTaskInputEnvelope
    connect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
  }

  export type TaskEventCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput> | TaskEventCreateWithoutTaskInput[] | TaskEventUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskEventCreateOrConnectWithoutTaskInput | TaskEventCreateOrConnectWithoutTaskInput[]
    createMany?: TaskEventCreateManyTaskInputEnvelope
    connect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
  }

  export type TaskInputUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput> | TaskInputCreateWithoutTaskInput[] | TaskInputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInputCreateOrConnectWithoutTaskInput | TaskInputCreateOrConnectWithoutTaskInput[]
    createMany?: TaskInputCreateManyTaskInputEnvelope
    connect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
  }

  export type TaskOutputUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput> | TaskOutputCreateWithoutTaskInput[] | TaskOutputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOutputCreateOrConnectWithoutTaskInput | TaskOutputCreateOrConnectWithoutTaskInput[]
    createMany?: TaskOutputCreateManyTaskInputEnvelope
    connect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
  }

  export type TaskEventUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput> | TaskEventCreateWithoutTaskInput[] | TaskEventUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskEventCreateOrConnectWithoutTaskInput | TaskEventCreateOrConnectWithoutTaskInput[]
    createMany?: TaskEventCreateManyTaskInputEnvelope
    connect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumBillingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillingStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutGenerationTasksNestedInput = {
    create?: XOR<UserCreateWithoutGenerationTasksInput, UserUncheckedCreateWithoutGenerationTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutGenerationTasksInput
    upsert?: UserUpsertWithoutGenerationTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGenerationTasksInput, UserUpdateWithoutGenerationTasksInput>, UserUncheckedUpdateWithoutGenerationTasksInput>
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type TaskQuoteUpdateOneWithoutTasksNestedInput = {
    create?: XOR<TaskQuoteCreateWithoutTasksInput, TaskQuoteUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskQuoteCreateOrConnectWithoutTasksInput
    upsert?: TaskQuoteUpsertWithoutTasksInput
    disconnect?: TaskQuoteWhereInput | boolean
    delete?: TaskQuoteWhereInput | boolean
    connect?: TaskQuoteWhereUniqueInput
    update?: XOR<XOR<TaskQuoteUpdateToOneWithWhereWithoutTasksInput, TaskQuoteUpdateWithoutTasksInput>, TaskQuoteUncheckedUpdateWithoutTasksInput>
  }

  export type TaskInputUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput> | TaskInputCreateWithoutTaskInput[] | TaskInputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInputCreateOrConnectWithoutTaskInput | TaskInputCreateOrConnectWithoutTaskInput[]
    upsert?: TaskInputUpsertWithWhereUniqueWithoutTaskInput | TaskInputUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskInputCreateManyTaskInputEnvelope
    set?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    disconnect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    delete?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    connect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    update?: TaskInputUpdateWithWhereUniqueWithoutTaskInput | TaskInputUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskInputUpdateManyWithWhereWithoutTaskInput | TaskInputUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskInputScalarWhereInput | TaskInputScalarWhereInput[]
  }

  export type TaskOutputUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput> | TaskOutputCreateWithoutTaskInput[] | TaskOutputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOutputCreateOrConnectWithoutTaskInput | TaskOutputCreateOrConnectWithoutTaskInput[]
    upsert?: TaskOutputUpsertWithWhereUniqueWithoutTaskInput | TaskOutputUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskOutputCreateManyTaskInputEnvelope
    set?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    disconnect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    delete?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    connect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    update?: TaskOutputUpdateWithWhereUniqueWithoutTaskInput | TaskOutputUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskOutputUpdateManyWithWhereWithoutTaskInput | TaskOutputUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskOutputScalarWhereInput | TaskOutputScalarWhereInput[]
  }

  export type TaskEventUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput> | TaskEventCreateWithoutTaskInput[] | TaskEventUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskEventCreateOrConnectWithoutTaskInput | TaskEventCreateOrConnectWithoutTaskInput[]
    upsert?: TaskEventUpsertWithWhereUniqueWithoutTaskInput | TaskEventUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskEventCreateManyTaskInputEnvelope
    set?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    disconnect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    delete?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    connect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    update?: TaskEventUpdateWithWhereUniqueWithoutTaskInput | TaskEventUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskEventUpdateManyWithWhereWithoutTaskInput | TaskEventUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskEventScalarWhereInput | TaskEventScalarWhereInput[]
  }

  export type TaskInputUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput> | TaskInputCreateWithoutTaskInput[] | TaskInputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInputCreateOrConnectWithoutTaskInput | TaskInputCreateOrConnectWithoutTaskInput[]
    upsert?: TaskInputUpsertWithWhereUniqueWithoutTaskInput | TaskInputUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskInputCreateManyTaskInputEnvelope
    set?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    disconnect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    delete?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    connect?: TaskInputWhereUniqueInput | TaskInputWhereUniqueInput[]
    update?: TaskInputUpdateWithWhereUniqueWithoutTaskInput | TaskInputUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskInputUpdateManyWithWhereWithoutTaskInput | TaskInputUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskInputScalarWhereInput | TaskInputScalarWhereInput[]
  }

  export type TaskOutputUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput> | TaskOutputCreateWithoutTaskInput[] | TaskOutputUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOutputCreateOrConnectWithoutTaskInput | TaskOutputCreateOrConnectWithoutTaskInput[]
    upsert?: TaskOutputUpsertWithWhereUniqueWithoutTaskInput | TaskOutputUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskOutputCreateManyTaskInputEnvelope
    set?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    disconnect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    delete?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    connect?: TaskOutputWhereUniqueInput | TaskOutputWhereUniqueInput[]
    update?: TaskOutputUpdateWithWhereUniqueWithoutTaskInput | TaskOutputUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskOutputUpdateManyWithWhereWithoutTaskInput | TaskOutputUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskOutputScalarWhereInput | TaskOutputScalarWhereInput[]
  }

  export type TaskEventUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput> | TaskEventCreateWithoutTaskInput[] | TaskEventUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskEventCreateOrConnectWithoutTaskInput | TaskEventCreateOrConnectWithoutTaskInput[]
    upsert?: TaskEventUpsertWithWhereUniqueWithoutTaskInput | TaskEventUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskEventCreateManyTaskInputEnvelope
    set?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    disconnect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    delete?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    connect?: TaskEventWhereUniqueInput | TaskEventWhereUniqueInput[]
    update?: TaskEventUpdateWithWhereUniqueWithoutTaskInput | TaskEventUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskEventUpdateManyWithWhereWithoutTaskInput | TaskEventUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskEventScalarWhereInput | TaskEventScalarWhereInput[]
  }

  export type GenerationTaskCreateNestedOneWithoutInputsInput = {
    create?: XOR<GenerationTaskCreateWithoutInputsInput, GenerationTaskUncheckedCreateWithoutInputsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutInputsInput
    connect?: GenerationTaskWhereUniqueInput
  }

  export type GenerationTaskUpdateOneRequiredWithoutInputsNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutInputsInput, GenerationTaskUncheckedCreateWithoutInputsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutInputsInput
    upsert?: GenerationTaskUpsertWithoutInputsInput
    connect?: GenerationTaskWhereUniqueInput
    update?: XOR<XOR<GenerationTaskUpdateToOneWithWhereWithoutInputsInput, GenerationTaskUpdateWithoutInputsInput>, GenerationTaskUncheckedUpdateWithoutInputsInput>
  }

  export type GenerationTaskCreateNestedOneWithoutOutputsInput = {
    create?: XOR<GenerationTaskCreateWithoutOutputsInput, GenerationTaskUncheckedCreateWithoutOutputsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutOutputsInput
    connect?: GenerationTaskWhereUniqueInput
  }

  export type GenerationTaskUpdateOneRequiredWithoutOutputsNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutOutputsInput, GenerationTaskUncheckedCreateWithoutOutputsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutOutputsInput
    upsert?: GenerationTaskUpsertWithoutOutputsInput
    connect?: GenerationTaskWhereUniqueInput
    update?: XOR<XOR<GenerationTaskUpdateToOneWithWhereWithoutOutputsInput, GenerationTaskUpdateWithoutOutputsInput>, GenerationTaskUncheckedUpdateWithoutOutputsInput>
  }

  export type GenerationTaskCreateNestedOneWithoutEventsInput = {
    create?: XOR<GenerationTaskCreateWithoutEventsInput, GenerationTaskUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutEventsInput
    connect?: GenerationTaskWhereUniqueInput
  }

  export type GenerationTaskUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<GenerationTaskCreateWithoutEventsInput, GenerationTaskUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GenerationTaskCreateOrConnectWithoutEventsInput
    upsert?: GenerationTaskUpsertWithoutEventsInput
    connect?: GenerationTaskWhereUniqueInput
    update?: XOR<XOR<GenerationTaskUpdateToOneWithWhereWithoutEventsInput, GenerationTaskUpdateWithoutEventsInput>, GenerationTaskUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumCreditAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusFilter<$PrismaModel> | $Enums.CreditAccountStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[]
    notIn?: $Enums.OwnerType[]
    not?: NestedEnumOwnerTypeFilter<$PrismaModel> | $Enums.OwnerType
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[]
    notIn?: $Enums.OwnerType[]
    not?: NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnerTypeFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[]
    notIn?: $Enums.AssetStatus[]
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[]
    notIn?: $Enums.TaskType[]
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskModule | EnumTaskModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TaskModule[]
    notIn?: $Enums.TaskModule[]
    not?: NestedEnumTaskModuleFilter<$PrismaModel> | $Enums.TaskModule
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumQuoteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusFilter<$PrismaModel> | $Enums.QuoteStatus
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[]
    notIn?: $Enums.TaskType[]
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskModule | EnumTaskModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TaskModule[]
    notIn?: $Enums.TaskModule[]
    not?: NestedEnumTaskModuleWithAggregatesFilter<$PrismaModel> | $Enums.TaskModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskModuleFilter<$PrismaModel>
    _max?: NestedEnumTaskModuleFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumBillingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[]
    notIn?: $Enums.BillingStatus[]
    not?: NestedEnumBillingStatusFilter<$PrismaModel> | $Enums.BillingStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[]
    notIn?: $Enums.BillingStatus[]
    not?: NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AuthSessionCreateWithoutUserInput = {
    id: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskQuoteCreateWithoutUserInput = {
    id: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    tasks?: GenerationTaskCreateNestedManyWithoutQuoteInput
  }

  export type TaskQuoteUncheckedCreateWithoutUserInput = {
    id: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    tasks?: GenerationTaskUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type TaskQuoteCreateOrConnectWithoutUserInput = {
    where: TaskQuoteWhereUniqueInput
    create: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput>
  }

  export type TaskQuoteCreateManyUserInputEnvelope = {
    data: TaskQuoteCreateManyUserInput | TaskQuoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GenerationTaskCreateWithoutUserInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    project?: ProjectCreateNestedOneWithoutTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutUserInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutUserInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput>
  }

  export type GenerationTaskCreateManyUserInputEnvelope = {
    data: GenerationTaskCreateManyUserInput | GenerationTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    refreshTokenHash?: StringFilter<"AuthSession"> | string
    deviceId?: StringNullableFilter<"AuthSession"> | string | null
    deviceName?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    status?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastActiveAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokeReason?: StringNullableFilter<"AuthSession"> | string | null
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
  }

  export type TaskQuoteUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskQuoteWhereUniqueInput
    update: XOR<TaskQuoteUpdateWithoutUserInput, TaskQuoteUncheckedUpdateWithoutUserInput>
    create: XOR<TaskQuoteCreateWithoutUserInput, TaskQuoteUncheckedCreateWithoutUserInput>
  }

  export type TaskQuoteUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskQuoteWhereUniqueInput
    data: XOR<TaskQuoteUpdateWithoutUserInput, TaskQuoteUncheckedUpdateWithoutUserInput>
  }

  export type TaskQuoteUpdateManyWithWhereWithoutUserInput = {
    where: TaskQuoteScalarWhereInput
    data: XOR<TaskQuoteUpdateManyMutationInput, TaskQuoteUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskQuoteScalarWhereInput = {
    AND?: TaskQuoteScalarWhereInput | TaskQuoteScalarWhereInput[]
    OR?: TaskQuoteScalarWhereInput[]
    NOT?: TaskQuoteScalarWhereInput | TaskQuoteScalarWhereInput[]
    id?: StringFilter<"TaskQuote"> | string
    userId?: StringFilter<"TaskQuote"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"TaskQuote"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"TaskQuote"> | string
    creditAccountId?: StringFilter<"TaskQuote"> | string
    taskType?: EnumTaskTypeFilter<"TaskQuote"> | $Enums.TaskType
    module?: EnumTaskModuleFilter<"TaskQuote"> | $Enums.TaskModule
    requestHash?: StringFilter<"TaskQuote"> | string
    planCode?: StringFilter<"TaskQuote"> | string
    ruleVersion?: StringFilter<"TaskQuote"> | string
    unitCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFilter<"TaskQuote"> | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonFilter<"TaskQuote">
    status?: EnumQuoteStatusFilter<"TaskQuote"> | $Enums.QuoteStatus
    expiresAt?: DateTimeFilter<"TaskQuote"> | Date | string
    usedAt?: DateTimeNullableFilter<"TaskQuote"> | Date | string | null
    createdAt?: DateTimeFilter<"TaskQuote"> | Date | string
  }

  export type GenerationTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: GenerationTaskWhereUniqueInput
    update: XOR<GenerationTaskUpdateWithoutUserInput, GenerationTaskUncheckedUpdateWithoutUserInput>
    create: XOR<GenerationTaskCreateWithoutUserInput, GenerationTaskUncheckedCreateWithoutUserInput>
  }

  export type GenerationTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: GenerationTaskWhereUniqueInput
    data: XOR<GenerationTaskUpdateWithoutUserInput, GenerationTaskUncheckedUpdateWithoutUserInput>
  }

  export type GenerationTaskUpdateManyWithWhereWithoutUserInput = {
    where: GenerationTaskScalarWhereInput
    data: XOR<GenerationTaskUpdateManyMutationInput, GenerationTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type GenerationTaskScalarWhereInput = {
    AND?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
    OR?: GenerationTaskScalarWhereInput[]
    NOT?: GenerationTaskScalarWhereInput | GenerationTaskScalarWhereInput[]
    id?: StringFilter<"GenerationTask"> | string
    userId?: StringFilter<"GenerationTask"> | string
    ownerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    ownerId?: StringFilter<"GenerationTask"> | string
    projectId?: StringNullableFilter<"GenerationTask"> | string | null
    parentTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    quoteId?: StringNullableFilter<"GenerationTask"> | string | null
    name?: StringFilter<"GenerationTask"> | string
    module?: EnumTaskModuleFilter<"GenerationTask"> | $Enums.TaskModule
    scene?: StringNullableFilter<"GenerationTask"> | string | null
    taskType?: EnumTaskTypeFilter<"GenerationTask"> | $Enums.TaskType
    sourcePage?: StringNullableFilter<"GenerationTask"> | string | null
    batchId?: StringNullableFilter<"GenerationTask"> | string | null
    status?: EnumTaskStatusFilter<"GenerationTask"> | $Enums.TaskStatus
    progress?: IntFilter<"GenerationTask"> | number
    stage?: StringNullableFilter<"GenerationTask"> | string | null
    queuePriority?: IntFilter<"GenerationTask"> | number
    queuePosition?: IntNullableFilter<"GenerationTask"> | number | null
    modelId?: StringNullableFilter<"GenerationTask"> | string | null
    sceneId?: StringNullableFilter<"GenerationTask"> | string | null
    templateId?: StringNullableFilter<"GenerationTask"> | string | null
    configJson?: JsonFilter<"GenerationTask">
    configVersion?: StringFilter<"GenerationTask"> | string
    billingOwnerType?: EnumOwnerTypeFilter<"GenerationTask"> | $Enums.OwnerType
    billingOwnerId?: StringFilter<"GenerationTask"> | string
    creditAccountId?: StringFilter<"GenerationTask"> | string
    billingTaskId?: StringNullableFilter<"GenerationTask"> | string | null
    billingStatus?: EnumBillingStatusFilter<"GenerationTask"> | $Enums.BillingStatus
    estimatedCredits?: DecimalFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string
    settledCredits?: DecimalNullableFilter<"GenerationTask"> | Decimal | DecimalJsLike | number | string | null
    errorCode?: StringNullableFilter<"GenerationTask"> | string | null
    errorMessage?: StringNullableFilter<"GenerationTask"> | string | null
    retryCount?: IntFilter<"GenerationTask"> | number
    cancellable?: BoolFilter<"GenerationTask"> | boolean
    deadlineAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    createdAt?: DateTimeFilter<"GenerationTask"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationTask"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GenerationTask"> | Date | string | null
    version?: IntFilter<"GenerationTask"> | number
  }

  export type UserCreateWithoutAuthSessionsInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    taskQuotes?: TaskQuoteCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthSessionsInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    taskQuotes?: TaskQuoteUncheckedCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
  }

  export type UserUpsertWithoutAuthSessionsInput = {
    update: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taskQuotes?: TaskQuoteUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taskQuotes?: TaskQuoteUncheckedUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GenerationTaskCreateWithoutProjectInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutProjectInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutProjectInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput>
  }

  export type GenerationTaskCreateManyProjectInputEnvelope = {
    data: GenerationTaskCreateManyProjectInput | GenerationTaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type GenerationTaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: GenerationTaskWhereUniqueInput
    update: XOR<GenerationTaskUpdateWithoutProjectInput, GenerationTaskUncheckedUpdateWithoutProjectInput>
    create: XOR<GenerationTaskCreateWithoutProjectInput, GenerationTaskUncheckedCreateWithoutProjectInput>
  }

  export type GenerationTaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: GenerationTaskWhereUniqueInput
    data: XOR<GenerationTaskUpdateWithoutProjectInput, GenerationTaskUncheckedUpdateWithoutProjectInput>
  }

  export type GenerationTaskUpdateManyWithWhereWithoutProjectInput = {
    where: GenerationTaskScalarWhereInput
    data: XOR<GenerationTaskUpdateManyMutationInput, GenerationTaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutTaskQuotesInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskQuotesInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    generationTasks?: GenerationTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskQuotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskQuotesInput, UserUncheckedCreateWithoutTaskQuotesInput>
  }

  export type GenerationTaskCreateWithoutQuoteInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutQuoteInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutQuoteInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput>
  }

  export type GenerationTaskCreateManyQuoteInputEnvelope = {
    data: GenerationTaskCreateManyQuoteInput | GenerationTaskCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTaskQuotesInput = {
    update: XOR<UserUpdateWithoutTaskQuotesInput, UserUncheckedUpdateWithoutTaskQuotesInput>
    create: XOR<UserCreateWithoutTaskQuotesInput, UserUncheckedCreateWithoutTaskQuotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskQuotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskQuotesInput, UserUncheckedUpdateWithoutTaskQuotesInput>
  }

  export type UserUpdateWithoutTaskQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    generationTasks?: GenerationTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GenerationTaskUpsertWithWhereUniqueWithoutQuoteInput = {
    where: GenerationTaskWhereUniqueInput
    update: XOR<GenerationTaskUpdateWithoutQuoteInput, GenerationTaskUncheckedUpdateWithoutQuoteInput>
    create: XOR<GenerationTaskCreateWithoutQuoteInput, GenerationTaskUncheckedCreateWithoutQuoteInput>
  }

  export type GenerationTaskUpdateWithWhereUniqueWithoutQuoteInput = {
    where: GenerationTaskWhereUniqueInput
    data: XOR<GenerationTaskUpdateWithoutQuoteInput, GenerationTaskUncheckedUpdateWithoutQuoteInput>
  }

  export type GenerationTaskUpdateManyWithWhereWithoutQuoteInput = {
    where: GenerationTaskScalarWhereInput
    data: XOR<GenerationTaskUpdateManyMutationInput, GenerationTaskUncheckedUpdateManyWithoutQuoteInput>
  }

  export type UserCreateWithoutGenerationTasksInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    taskQuotes?: TaskQuoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGenerationTasksInput = {
    id: string
    phoneCiphertext?: Uint8Array | null
    phoneHash?: string | null
    emailCiphertext?: Uint8Array | null
    emailHash?: string | null
    passwordHash?: string | null
    nickname: string
    avatarAssetId?: string | null
    userType: $Enums.UserType
    status: $Enums.UserStatus
    registerSource: string
    creditAccountId?: string | null
    creditAccountStatus: $Enums.CreditAccountStatus
    nicknameUpdatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    taskQuotes?: TaskQuoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGenerationTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGenerationTasksInput, UserUncheckedCreateWithoutGenerationTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description?: string | null
    coverAssetId?: string | null
    status: $Enums.ProjectStatus
    taskCount?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    createdBy: string
    name: string
    description?: string | null
    coverAssetId?: string | null
    status: $Enums.ProjectStatus
    taskCount?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type TaskQuoteCreateWithoutTasksInput = {
    id: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTaskQuotesInput
  }

  export type TaskQuoteUncheckedCreateWithoutTasksInput = {
    id: string
    userId: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TaskQuoteCreateOrConnectWithoutTasksInput = {
    where: TaskQuoteWhereUniqueInput
    create: XOR<TaskQuoteCreateWithoutTasksInput, TaskQuoteUncheckedCreateWithoutTasksInput>
  }

  export type TaskInputCreateWithoutTaskInput = {
    id: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskInputUncheckedCreateWithoutTaskInput = {
    id: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskInputCreateOrConnectWithoutTaskInput = {
    where: TaskInputWhereUniqueInput
    create: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput>
  }

  export type TaskInputCreateManyTaskInputEnvelope = {
    data: TaskInputCreateManyTaskInput | TaskInputCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskOutputCreateWithoutTaskInput = {
    id: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
  }

  export type TaskOutputUncheckedCreateWithoutTaskInput = {
    id: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
  }

  export type TaskOutputCreateOrConnectWithoutTaskInput = {
    where: TaskOutputWhereUniqueInput
    create: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput>
  }

  export type TaskOutputCreateManyTaskInputEnvelope = {
    data: TaskOutputCreateManyTaskInput | TaskOutputCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskEventCreateWithoutTaskInput = {
    id?: bigint | number
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
  }

  export type TaskEventUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
  }

  export type TaskEventCreateOrConnectWithoutTaskInput = {
    where: TaskEventWhereUniqueInput
    create: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput>
  }

  export type TaskEventCreateManyTaskInputEnvelope = {
    data: TaskEventCreateManyTaskInput | TaskEventCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGenerationTasksInput = {
    update: XOR<UserUpdateWithoutGenerationTasksInput, UserUncheckedUpdateWithoutGenerationTasksInput>
    create: XOR<UserCreateWithoutGenerationTasksInput, UserUncheckedCreateWithoutGenerationTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGenerationTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGenerationTasksInput, UserUncheckedUpdateWithoutGenerationTasksInput>
  }

  export type UserUpdateWithoutGenerationTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    taskQuotes?: TaskQuoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGenerationTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    phoneHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    avatarAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registerSource?: StringFieldUpdateOperationsInput | string
    creditAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAccountStatus?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    nicknameUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    taskQuotes?: TaskQuoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    taskCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskQuoteUpsertWithoutTasksInput = {
    update: XOR<TaskQuoteUpdateWithoutTasksInput, TaskQuoteUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskQuoteCreateWithoutTasksInput, TaskQuoteUncheckedCreateWithoutTasksInput>
    where?: TaskQuoteWhereInput
  }

  export type TaskQuoteUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskQuoteWhereInput
    data: XOR<TaskQuoteUpdateWithoutTasksInput, TaskQuoteUncheckedUpdateWithoutTasksInput>
  }

  export type TaskQuoteUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskQuotesNestedInput
  }

  export type TaskQuoteUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInputUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskInputWhereUniqueInput
    update: XOR<TaskInputUpdateWithoutTaskInput, TaskInputUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskInputCreateWithoutTaskInput, TaskInputUncheckedCreateWithoutTaskInput>
  }

  export type TaskInputUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskInputWhereUniqueInput
    data: XOR<TaskInputUpdateWithoutTaskInput, TaskInputUncheckedUpdateWithoutTaskInput>
  }

  export type TaskInputUpdateManyWithWhereWithoutTaskInput = {
    where: TaskInputScalarWhereInput
    data: XOR<TaskInputUpdateManyMutationInput, TaskInputUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskInputScalarWhereInput = {
    AND?: TaskInputScalarWhereInput | TaskInputScalarWhereInput[]
    OR?: TaskInputScalarWhereInput[]
    NOT?: TaskInputScalarWhereInput | TaskInputScalarWhereInput[]
    id?: StringFilter<"TaskInput"> | string
    taskId?: StringFilter<"TaskInput"> | string
    assetId?: StringFilter<"TaskInput"> | string
    inputRole?: StringFilter<"TaskInput"> | string
    sortOrder?: IntFilter<"TaskInput"> | number
    snapshotJson?: JsonNullableFilter<"TaskInput">
    createdAt?: DateTimeFilter<"TaskInput"> | Date | string
  }

  export type TaskOutputUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskOutputWhereUniqueInput
    update: XOR<TaskOutputUpdateWithoutTaskInput, TaskOutputUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskOutputCreateWithoutTaskInput, TaskOutputUncheckedCreateWithoutTaskInput>
  }

  export type TaskOutputUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskOutputWhereUniqueInput
    data: XOR<TaskOutputUpdateWithoutTaskInput, TaskOutputUncheckedUpdateWithoutTaskInput>
  }

  export type TaskOutputUpdateManyWithWhereWithoutTaskInput = {
    where: TaskOutputScalarWhereInput
    data: XOR<TaskOutputUpdateManyMutationInput, TaskOutputUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskOutputScalarWhereInput = {
    AND?: TaskOutputScalarWhereInput | TaskOutputScalarWhereInput[]
    OR?: TaskOutputScalarWhereInput[]
    NOT?: TaskOutputScalarWhereInput | TaskOutputScalarWhereInput[]
    id?: StringFilter<"TaskOutput"> | string
    taskId?: StringFilter<"TaskOutput"> | string
    assetId?: StringFilter<"TaskOutput"> | string
    outputType?: StringFilter<"TaskOutput"> | string
    sortOrder?: IntFilter<"TaskOutput"> | number
    providerOutputRef?: StringNullableFilter<"TaskOutput"> | string | null
    reviewStatus?: StringFilter<"TaskOutput"> | string
    createdAt?: DateTimeFilter<"TaskOutput"> | Date | string
  }

  export type TaskEventUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskEventWhereUniqueInput
    update: XOR<TaskEventUpdateWithoutTaskInput, TaskEventUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskEventCreateWithoutTaskInput, TaskEventUncheckedCreateWithoutTaskInput>
  }

  export type TaskEventUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskEventWhereUniqueInput
    data: XOR<TaskEventUpdateWithoutTaskInput, TaskEventUncheckedUpdateWithoutTaskInput>
  }

  export type TaskEventUpdateManyWithWhereWithoutTaskInput = {
    where: TaskEventScalarWhereInput
    data: XOR<TaskEventUpdateManyMutationInput, TaskEventUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskEventScalarWhereInput = {
    AND?: TaskEventScalarWhereInput | TaskEventScalarWhereInput[]
    OR?: TaskEventScalarWhereInput[]
    NOT?: TaskEventScalarWhereInput | TaskEventScalarWhereInput[]
    id?: BigIntFilter<"TaskEvent"> | bigint | number
    taskId?: StringFilter<"TaskEvent"> | string
    eventType?: StringFilter<"TaskEvent"> | string
    fromStatus?: StringNullableFilter<"TaskEvent"> | string | null
    toStatus?: StringNullableFilter<"TaskEvent"> | string | null
    progress?: IntNullableFilter<"TaskEvent"> | number | null
    payloadJson?: JsonNullableFilter<"TaskEvent">
    requestId?: StringNullableFilter<"TaskEvent"> | string | null
    createdAt?: DateTimeFilter<"TaskEvent"> | Date | string
  }

  export type GenerationTaskCreateWithoutInputsInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutInputsInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutInputsInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutInputsInput, GenerationTaskUncheckedCreateWithoutInputsInput>
  }

  export type GenerationTaskUpsertWithoutInputsInput = {
    update: XOR<GenerationTaskUpdateWithoutInputsInput, GenerationTaskUncheckedUpdateWithoutInputsInput>
    create: XOR<GenerationTaskCreateWithoutInputsInput, GenerationTaskUncheckedCreateWithoutInputsInput>
    where?: GenerationTaskWhereInput
  }

  export type GenerationTaskUpdateToOneWithWhereWithoutInputsInput = {
    where?: GenerationTaskWhereInput
    data: XOR<GenerationTaskUpdateWithoutInputsInput, GenerationTaskUncheckedUpdateWithoutInputsInput>
  }

  export type GenerationTaskUpdateWithoutInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskCreateWithoutOutputsInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    events?: TaskEventCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutOutputsInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    events?: TaskEventUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutOutputsInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutOutputsInput, GenerationTaskUncheckedCreateWithoutOutputsInput>
  }

  export type GenerationTaskUpsertWithoutOutputsInput = {
    update: XOR<GenerationTaskUpdateWithoutOutputsInput, GenerationTaskUncheckedUpdateWithoutOutputsInput>
    create: XOR<GenerationTaskCreateWithoutOutputsInput, GenerationTaskUncheckedCreateWithoutOutputsInput>
    where?: GenerationTaskWhereInput
  }

  export type GenerationTaskUpdateToOneWithWhereWithoutOutputsInput = {
    where?: GenerationTaskWhereInput
    data: XOR<GenerationTaskUpdateWithoutOutputsInput, GenerationTaskUncheckedUpdateWithoutOutputsInput>
  }

  export type GenerationTaskUpdateWithoutOutputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutOutputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskCreateWithoutEventsInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    user: UserCreateNestedOneWithoutGenerationTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    quote?: TaskQuoteCreateNestedOneWithoutTasksInput
    inputs?: TaskInputCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskUncheckedCreateWithoutEventsInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
    inputs?: TaskInputUncheckedCreateNestedManyWithoutTaskInput
    outputs?: TaskOutputUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GenerationTaskCreateOrConnectWithoutEventsInput = {
    where: GenerationTaskWhereUniqueInput
    create: XOR<GenerationTaskCreateWithoutEventsInput, GenerationTaskUncheckedCreateWithoutEventsInput>
  }

  export type GenerationTaskUpsertWithoutEventsInput = {
    update: XOR<GenerationTaskUpdateWithoutEventsInput, GenerationTaskUncheckedUpdateWithoutEventsInput>
    create: XOR<GenerationTaskCreateWithoutEventsInput, GenerationTaskUncheckedCreateWithoutEventsInput>
    where?: GenerationTaskWhereInput
  }

  export type GenerationTaskUpdateToOneWithWhereWithoutEventsInput = {
    where?: GenerationTaskWhereInput
    data: XOR<GenerationTaskUpdateWithoutEventsInput, GenerationTaskUncheckedUpdateWithoutEventsInput>
  }

  export type GenerationTaskUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type AuthSessionCreateManyUserInput = {
    id: string
    refreshTokenHash: string
    deviceId?: string | null
    deviceName?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    status: string
    expiresAt: Date | string
    lastActiveAt: Date | string
    revokedAt?: Date | string | null
    revokeReason?: string | null
    createdAt?: Date | string
  }

  export type TaskQuoteCreateManyUserInput = {
    id: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    taskType: $Enums.TaskType
    module: $Enums.TaskModule
    requestHash: string
    planCode: string
    ruleVersion: string
    unitCredits: Decimal | DecimalJsLike | number | string
    billableQuantity: Decimal | DecimalJsLike | number | string
    estimatedCredits: Decimal | DecimalJsLike | number | string
    configSnapshotJson: JsonNullValueInput | InputJsonValue
    status: $Enums.QuoteStatus
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type GenerationTaskCreateManyUserInput = {
    id: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskQuoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: GenerationTaskUpdateManyWithoutQuoteNestedInput
  }

  export type TaskQuoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: GenerationTaskUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type TaskQuoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    requestHash?: StringFieldUpdateOperationsInput | string
    planCode?: StringFieldUpdateOperationsInput | string
    ruleVersion?: StringFieldUpdateOperationsInput | string
    unitCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billableQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    configSnapshotJson?: JsonNullValueInput | InputJsonValue
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type GenerationTaskCreateManyProjectInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    parentTaskId?: string | null
    quoteId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
  }

  export type GenerationTaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    quote?: TaskQuoteUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    quoteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type GenerationTaskCreateManyQuoteInput = {
    id: string
    userId: string
    ownerType: $Enums.OwnerType
    ownerId: string
    projectId?: string | null
    parentTaskId?: string | null
    name: string
    module: $Enums.TaskModule
    scene?: string | null
    taskType: $Enums.TaskType
    sourcePage?: string | null
    batchId?: string | null
    status: $Enums.TaskStatus
    progress?: number
    stage?: string | null
    queuePriority?: number
    queuePosition?: number | null
    modelId?: string | null
    sceneId?: string | null
    templateId?: string | null
    configJson: JsonNullValueInput | InputJsonValue
    configVersion: string
    billingOwnerType: $Enums.OwnerType
    billingOwnerId: string
    creditAccountId: string
    billingTaskId?: string | null
    billingStatus: $Enums.BillingStatus
    estimatedCredits: Decimal | DecimalJsLike | number | string
    settledCredits?: Decimal | DecimalJsLike | number | string | null
    errorCode?: string | null
    errorMessage?: string | null
    retryCount?: number
    cancellable?: boolean
    deadlineAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    version?: number
  }

  export type GenerationTaskUpdateWithoutQuoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGenerationTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    inputs?: TaskInputUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUpdateManyWithoutTaskNestedInput
    events?: TaskEventUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateWithoutQuoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    inputs?: TaskInputUncheckedUpdateManyWithoutTaskNestedInput
    outputs?: TaskOutputUncheckedUpdateManyWithoutTaskNestedInput
    events?: TaskEventUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GenerationTaskUncheckedUpdateManyWithoutQuoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    module?: EnumTaskModuleFieldUpdateOperationsInput | $Enums.TaskModule
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    sourcePage?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    progress?: IntFieldUpdateOperationsInput | number
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    queuePriority?: IntFieldUpdateOperationsInput | number
    queuePosition?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    sceneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: JsonNullValueInput | InputJsonValue
    configVersion?: StringFieldUpdateOperationsInput | string
    billingOwnerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    billingOwnerId?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    estimatedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledCredits?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    cancellable?: BoolFieldUpdateOperationsInput | boolean
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskInputCreateManyTaskInput = {
    id: string
    assetId: string
    inputRole: string
    sortOrder?: number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskOutputCreateManyTaskInput = {
    id: string
    assetId: string
    outputType: string
    sortOrder?: number
    providerOutputRef?: string | null
    reviewStatus: string
    createdAt?: Date | string
  }

  export type TaskEventCreateManyTaskInput = {
    id?: bigint | number
    eventType: string
    fromStatus?: string | null
    toStatus?: string | null
    progress?: number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
  }

  export type TaskInputUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInputUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInputUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    inputRole?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    snapshotJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOutputUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    providerOutputRef?: NullableStringFieldUpdateOperationsInput | string | null
    reviewStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskEventUncheckedUpdateManyWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableStringFieldUpdateOperationsInput | string | null
    toStatus?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}