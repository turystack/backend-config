export async function run(publisher: { publish: (input: unknown) => Promise<void> }) {
  await publisher.publish({ name: 'order.cancelled' })
}
