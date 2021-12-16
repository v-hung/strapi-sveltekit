import Cookies from 'js-cookie'
import { isStrongPassword, isEmail, isLength } from 'validator';

export const cookies = Cookies
export const HOST_API = import.meta.env.VITE_HOST_API || ''

export const validate = {
  trimFull: (str) => { return str.trim().replace(/ +/g, " ") },
  isEmail,
  isLength,
  isStrongPassword
}
