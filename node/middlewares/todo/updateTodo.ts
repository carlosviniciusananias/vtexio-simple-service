import parser from 'co-body'

export async function updateTodo(ctx: Context, next: () => Promise<any>) {
  const { id } = ctx.vtex.route.params

  console.info('my id', id)

  const data = await parser(ctx.req)

  data.id = id

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
