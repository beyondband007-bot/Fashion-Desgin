export type FrozenCreditBalance = {
  total: string
  available: string
  frozen: string
}

export class LedgerClient {
  async freezeCredits(taskId: string, estimatedCredits: string): Promise<FrozenCreditBalance> {
    void taskId

    return {
      total: '1000.0000',
      available: `${Math.max(0, 1000 - Number(estimatedCredits)).toFixed(4)}`,
      frozen: estimatedCredits,
    }
  }
}

export const ledgerClient = new LedgerClient()

