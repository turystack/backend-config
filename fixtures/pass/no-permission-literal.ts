import { Permission } from '@repo/identity'

export class OrderController {
  @ACL(Permission.ORDER_CANCEL)
  async cancel() {}
}
