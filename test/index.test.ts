import { describe, expect, it } from 'vitest'
import { getArrClass, getObjClass, transformClass } from '../src/utils'

describe('should', () => {
  it('getArrClass', () => {
    const code = `[
        title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
        isFont ? 'font-$font-name' : 'tracking-[2/5]'
      ]`

    expect(getArrClass(code)).toMatchInlineSnapshot(`
      [
        "font-$font-name bg-teal-200:55",
        "tracking-[2/5]",
        "font-$font-name",
        "tracking-[2/5]",
      ]
    `)
  })

  it('getObjClass', () => {
    const code = `
    { 
      'bg-teal-200:55': title === 'Hello', 
      'h-1.000%': title === 'Hello', 
      'font-$font-name': isFont 
    }`

    expect(getObjClass(code)).toMatchInlineSnapshot(`
      [
        "bg-teal-200:55",
        "h-1.000%",
        "font-$font-name",
      ]
    `)
  })

  it('transformClass', () => {
    const code = `<template>
    <view class="content">
      <view class="indent-1/2">
        indent-1/2
      </view>
      <view class="font-[system-ui] bg-teal-200:55">
        font-[system-ui]
      </view>
      <view class="font-$font-name">
        font-$font-name
      </view>
  
      <view class="font-$font-name" :class="[title === '2.3' ? 'font-$font-name bg-teal-200:55' : 'tracking-[2/5]',isFont ? 'font-$font-name' : 'tracking-[2/5]']">
        font-$font-name
      </view>
  
      <view :class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello', 'font-$font-name': isFont }">
        font-$font-name
      </view>
  
      <view class="tracking-[2/5] bg-teal-200:55">
        tracking-[2/5]
      </view>
      <view class="h-1.000%">
        h-1.000%
      </view>
  
      <view class="bg-teal-200:55">
        bg-teal-200:55
      </view>
      <image class="logo" src="/static/logo.png" />
      <view class="text-area">
        <text class="title">
          {{ title }}
        </text>
      </view>
    </view>
  </template>`

    expect(transformClass(code)).toMatchInlineSnapshot(
    `
      [
        [
          "class=\\"content\\"",
          "content",
        ],
        [
          "class=\\"indent-1/2\\"",
          "indent-1/2",
        ],
        [
          "class=\\"font-[system-ui] bg-teal-200:55\\"",
          "font-[system-ui] bg-teal-200:55",
        ],
        [
          "class=\\"font-$font-name\\"",
          "font-$font-name",
        ],
        [
          "class=\\"font-$font-name\\"",
          "font-$font-name",
        ],
        [
          "class=\\"[title === '2.3' ? 'font-$font-name bg-teal-200:55' : 'tracking-[2/5]',isFont ? 'font-$font-name' : 'tracking-[2/5]']\\"",
          "font-$font-name bg-teal-200:55",
          "tracking-[2/5]",
          "font-$font-name",
          "tracking-[2/5]",
        ],
        [
          "class=\\"{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello', 'font-$font-name': isFont }\\"",
          "bg-teal-200:55",
          "h-1.000%",
          "font-$font-name",
        ],
        [
          "class=\\"tracking-[2/5] bg-teal-200:55\\"",
          "tracking-[2/5] bg-teal-200:55",
        ],
        [
          "class=\\"h-1.000%\\"",
          "h-1.000%",
        ],
        [
          "class=\\"bg-teal-200:55\\"",
          "bg-teal-200:55",
        ],
        [
          "class=\\"logo\\"",
          "logo",
        ],
        [
          "class=\\"text-area\\"",
          "text-area",
        ],
        [
          "class=\\"title\\"",
          "title",
        ],
      ]
    `)
  })
})
