// método que busca os dados do master data e devolve um array com todos os todos
export async function getAllTodos(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = {
    data: [
      { id: 12, description: 'Criar uma listinha' },
      { id: 13, description: 'Criar outra listinha' },
    ],
  }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
