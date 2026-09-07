import {
  DateOnlySchema,
  IntSchema,
  OptionalStringSchema,
  RequiredStringSchema,
} from '@turystack/fields'
import { z } from 'zod'

export const createOrderBody = z.object({
  name: RequiredStringSchema({ min: 1 }),
  nickname: OptionalStringSchema(),
  quantity: IntSchema({ min: 1 }),
  dueOn: DateOnlySchema(),
  status: z.string(),
})
