# vite-plugin-transform-wx-class



> 使用该插件转换微信小程序中带有特殊转义`class`，例如`\[` `\!` `\.`,结合[unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp)，实现`unocss`在小程序中开发使用

## 转换规则

```js
const transformRules = {
  '.': '-d-',
  '/': '-s-',
  ':': '-c-',
  '%': '-p-',
  '!': '-e-',
  '#': '-w-',
  '(': '-bl-',
  ')': '-br-',
  '[': '-fl-',
  ']': '-fr-',
  '$': '-r-',
}
```

## 安装

```shell
pnpm add -D unocss vite-plugin-transform-wx-class unocss-preset-wxapp 
```

## `vite.config.ts`

> 在[uni-app vue 3.0 中使用](https://ask.dcloud.net.cn/article/37834)中使用

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'
import transformWxClass, { transformSelector } from 'vite-plugin-transform-wx-class'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
      shortcuts: [
        {
          'border-base': 'border border-gray-500_10',
          'center': 'flex justify-center items-center',
        },
      ],
      postprocess: (css) => {
        css.selector = transformSelector(css.selector)
        return css
      },
    }),
    transformWxClass(),
  ],
})
```





