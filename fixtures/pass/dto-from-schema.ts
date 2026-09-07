import { z } from 'zod'

import { orderSchema } from './order.schema.js'

export const cancelOrderRequestSchema = orderSchema
  .pick({ id: true })
  .extend({ reason: z.string().min(1) })

export type CancelOrderRequest = z.infer<typeof cancelOrderRequestSchema>
