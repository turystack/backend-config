@Entity()
export class OrderEntity {
  total(items: number[]) {
    return items.reduce((sum, item) => sum + item, 0)
  }
}
