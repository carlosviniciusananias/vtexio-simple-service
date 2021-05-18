// método que busca os dados do master data e devolve um array com todos os todos
export async function deleteTodo(ctx: Context, next: () => Promise<any>) {
  // pegando id dentro dos params
  const { id } = ctx.vtex.route.params

  console.info('my id', id)

  // Buscar dados do master data

  ctx.status = 200
  ctx.body = { id }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
