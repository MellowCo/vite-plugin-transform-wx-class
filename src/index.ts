import type { PluginOption  } from 'vite'
import { transformCode, transformSelector } from './utils'
export { transformSelector }

export default function (): PluginOption {
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

