import { eq, query } from '@turystack/query-dsl'

export function build(status: string) {
  return query().where(eq('status', status))
}
