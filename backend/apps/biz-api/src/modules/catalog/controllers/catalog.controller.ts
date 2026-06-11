import type { ServerResponse } from 'node:http'

import { writeSuccess } from '../../../../../../packages/shared-kernel/src/http/json'
import type { RequestContext } from '../../../../../../packages/shared-kernel/src/system/request-context'
import { catalogService } from '../services/catalog.service'

export async function handleAssetList(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: await catalogService.listAssets(),
  })
}

export async function handleProjectList(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: await catalogService.listProjects(),
  })
}

export async function handlePricingPlans(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: await catalogService.listPricingPlans(),
  })
}

export async function handleCreditTransactions(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: await catalogService.listCreditTransactions(),
  })
}
