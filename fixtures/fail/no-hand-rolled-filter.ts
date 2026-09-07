export function build(qb: { where: (c: string) => unknown }, status: string) {
  return qb.where(`status = '${status}'`)
}
