// método que busca os dados do master data e devolve um array com todos os todos
export async function getTodo(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const { id } = ctx.vtex.route.params

  const resp = await todoClient.get(id as string)

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
