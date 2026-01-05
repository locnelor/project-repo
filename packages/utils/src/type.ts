import { isObject } from './inference'

export function isEventObjectLike(obj: any) {
  if (!obj || !isObject(obj)) {
    return false
  }
  return Reflect.has(obj, 'target') && Reflect.has(obj, 'stopPropagation')
}
