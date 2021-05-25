import { MasterData } from '@vtex/api'

import type { TodoInput } from '../typings/todoInput'

export default class Todo extends MasterData {
  public async get(id: string): Promise<any> {
    const resp = await this.getDocument({
      dataEntity: 'carluxoservice',
      fields: ['_all'],
      id,
    })

    return resp
  }

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

  public async create(todoInput: TodoInput) {
    const resp = await this.createDocument({
      dataEntity: 'carluxoservice',
      schema: 'carluxoservice',
      fields: todoInput,
    })

    return resp
  }

  public async update(id: string, todoInput: TodoInput) {
    await this.updatePartialDocument({
      dataEntity: 'carluxoservice',
      fields: todoInput,
      id,
    })

    return { id, ...todoInput }
  }
}
