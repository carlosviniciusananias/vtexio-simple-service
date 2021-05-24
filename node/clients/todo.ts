import { MasterData } from '@vtex/api'

export default class Todo extends MasterData {
  // get data master data v2
  public async getAll() {
    const resp = await this.searchDocuments({
      dataEntity: 'carluxoservice',
      schema: 'carluxoservice',
      fields: ['_all'],
      pagination: {
        page: 1,
        pageSize: 50,
      },
    })

    return resp
  }
}
