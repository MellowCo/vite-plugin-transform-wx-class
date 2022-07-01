/*
 * @Author: licl
 * @Date: 2022-06-30 20:14:54
 * @LastEditTime: 2022-07-01 13:57:32
 * @LastEditors: licl
 * @Description:
 */

// 关联
const transformRules: { [key: string]: string } = {
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

export function transformClass(code: string) {
  const classNames = getClass(code)

  return classNames
}

/**
 * 获取class
 * @param code - 源码
 */
export function getClass(code: string) {
  const matchs: string[][] = []

  Array.from(code.matchAll(/class="(.+?)"/g)).forEach((m) => {
    const classStr = m[1]
    let classArr = [m[0]]

    if (classStr.startsWith('{'))
      classArr = classArr.concat(getObjClass(classStr))
    else if (classStr.startsWith('['))
      classArr = classArr.concat(getArrClass(classStr))
    else
      classArr.push(classStr)
    matchs.push(classArr)
  })
  return matchs
}

export function getObjClass(className: string) {
  // class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello' }"
  // => ['bg-teal-200:55','h-1.000%']
  return Array.from(className.matchAll(/'([^,]+?)'\s*:/g)).map(v => v[1])
}

export function getArrClass(className: string) {
  // [
  //   title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
  //   isFont ? 'font-$font-name' : 'tracking-[2/5]'
  // ]
  // => ['font-$font-name bg-teal-200:55', 'tracking-[2/5]','font-$font-name tracking-[2/5]']
  return Array.from(className.matchAll(/(?<=[\?\:])\s*'(.+?)'/g)).map(v => v[1])
}
