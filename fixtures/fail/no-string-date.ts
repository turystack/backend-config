import { z } from 'zod'

export const orderSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
})
