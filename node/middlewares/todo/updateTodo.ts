import parser from 'co-body'

export async function updateTodo(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const { id } = ctx.vtex.route.params

  const data = await parser(ctx.req)

  const resp = await todoClient.update(id as string, data)

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
