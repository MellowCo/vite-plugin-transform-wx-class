import type { Plugin } from 'vite'
import { transformCode } from './utils'

export default function (): Plugin {
  return {
    name: 'vite:transform-wx-class',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.vue$/.test(id))
        return null
      return transformCode(code)
    },
  }
}

