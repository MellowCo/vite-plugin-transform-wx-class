/*
 * @Author: licl
 * @Date: 2022-06-29 21:57:07
 * @LastEditTime: 2022-06-29 21:57:09
 * @LastEditors: licl
 * @Description:
 */
/*
 * @Author: licl
 * @Date: 2022-06-29 21:17:36
 * @LastEditTime: 2022-06-29 21:43:17
 * @LastEditors: licl
 * @Description:
 */
import type { Plugin } from 'vite'

export default function (): Plugin {
  return {
    name: 'transform-wx-class',
    transform(code, id) {
      if (!/\.vue$/.test(id))
        return null

      if (id === 'E:/my/unocss-preset-wxapp/examples/uniapp_vue3/src/pages/font/index.vue') {
        console.log('[ id ] >', id)
        console.log('[ code ] >', code)
      }

      return code
    },
  }
}
