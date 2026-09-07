export class OrderController {
  @ACL('order:cancel')
  async cancel() {}
}
