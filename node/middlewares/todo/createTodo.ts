import parser from 'co-body'

export async function createTodo(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const data = await parser(ctx.req)

  const resp = await todoClient.create(data)

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
