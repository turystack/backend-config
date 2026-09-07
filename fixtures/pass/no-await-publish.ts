export function run(publisher: { publish: (input: unknown) => void }) {
  publisher.publish({ name: 'order.cancelled' })
}
