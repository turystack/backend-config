export function check(session: { token: string }, plain: string) {
  return session.token === plain
}
