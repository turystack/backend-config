@Entity()
export class OrderEntity {
  async total(repo: any) {
    return await repo.sum()
  }
}
