import type { Plugin } from 'vite'
import { transformClass } from './utils'

export default function (): Plugin {
  return {
    name: 'transform-wx-class',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.vue$/.test(id))
        return null

      console.log('[ code ] >', code)

      transformClass(code)

      return code
    },
  }
}
