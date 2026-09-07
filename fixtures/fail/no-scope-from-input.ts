export class OrderController {
  async list(@Query('organizationId') organizationId: string) {
    return organizationId
  }
}
