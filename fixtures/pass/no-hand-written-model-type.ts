import { z } from 'zod'

export const orderModelSchema = z.object({
  id: z.string(),
  total: z.number(),
})

export type OrderModel = z.infer<typeof orderModelSchema>
