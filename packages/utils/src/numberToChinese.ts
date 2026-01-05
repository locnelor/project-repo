/**
 * 将数字金额转换为中文大写
 * @param num 数字金额
 * @returns 中文大写金额
 */
export function numberToChinese(num: number | string): string {
  if (!num && num !== 0) return '零元整'

  const amount = Number(num)
  if (Number.isNaN(amount)) return '零元整'

  // 处理负数
  const isNegative = amount < 0
  const absAmount = Math.abs(amount)

  // 分离整数和小数部分
  const [integerPart, decimalPart = ''] = absAmount.toString().split('.')

  // 中文数字
  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const units = ['', '拾', '佰', '仟']
  const bigUnits = ['', '万', '亿', '兆']

  // 转换整数部分
  function convertInteger(numStr: string): string {
    if (numStr === '0' || numStr === '') return '零'

    // 按4位分组
    const groups = []
    let temp = numStr
    while (temp.length > 0) {
      const group = temp.slice(-4)
      groups.unshift(group)
      temp = temp.slice(0, -4)
    }

    let result = ''
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i] || ''
      const groupResult = convertGroup(group)
      const unitIndex = groups.length - 1 - i

      if (groupResult && groupResult !== '零') {
        result += groupResult + bigUnits[unitIndex]
      }
    }

    return result || '零'
  }

  // 转换4位数组
  function convertGroup(group: string): string {
    let result = ''
    const len = group.length
    let hasZero = false

    for (let i = 0; i < len; i++) {
      const digit = Number.parseInt(group[i] || '')
      const unitIndex = len - 1 - i

      if (digit === 0) {
        hasZero = true
      } else {
        if (hasZero && result) {
          result += '零'
          hasZero = false
        }

        let digitStr = digits[digit] || ''
        // 处理"二"变"两"的情况
        if (digit === 2 && (unitIndex === 3 || unitIndex === 2)) {
          digitStr = '两'
        }

        result += digitStr + units[unitIndex]
      }
    }

    // 处理"一十"变"十"
    if (result.startsWith('一十')) {
      result = result.replace('一十', '十')
    }

    return result
  }

  // 转换小数部分
  function convertDecimal(decimalStr: string): string {
    if (!decimalStr || decimalStr === '00') return ''

    let result = ''
    const jiao = Number.parseInt(decimalStr[0] || '0')
    const fen = Number.parseInt(decimalStr[1] || '0')

    if (jiao > 0) {
      result += `${digits[jiao]}角`
    }
    if (fen > 0) {
      result += `${digits[fen]}分`
    }

    return result
  }

  // 转换整数部分
  const integerChinese = convertInteger(integerPart || '')

  // 转换小数部分
  const decimalChinese = convertDecimal(decimalPart.padEnd(2, '0').slice(0, 2))

  // 组合结果
  let result = ''
  if (isNegative) {
    result += '负'
  }

  result += `${integerChinese}元`

  if (decimalChinese) {
    result += decimalChinese
  } else {
    result += '整'
  }

  return result
}
