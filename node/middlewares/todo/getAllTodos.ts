// método que busca os dados do master data e devolve um array com todos os todos
export async function getAllTodos(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const resp = await todoClient.getAll()

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
