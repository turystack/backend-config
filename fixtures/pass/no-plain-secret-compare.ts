import { verifyCode } from './hash.js'

export function check(otpCode: { code: string }, plain: string) {
  return verifyCode(plain, otpCode.code)
}
