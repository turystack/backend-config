export async function create(db: any, input: { name: string }) {
  return db.users.create({ name: input.name })
}
