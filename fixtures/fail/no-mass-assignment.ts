export async function create(db: any, request: any) {
  return db.users.create({ ...request.body })
}
