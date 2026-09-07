import { z } from 'zod'

export const createOrderBody = z.object({
  name: z.string().trim().min(1),
  nickname: z.string().min(1).trim(),
  quantity: z.coerce.number(),
  dueOn: z.coerce.date(),
})
