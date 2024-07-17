export function uuid() {
  const chars = '0123456789abcdef'
  const result = [] as string[]
  for (let i = 0; i < 10; i++) {
    result.push(chars[Math.floor(Math.random() * chars.length)])
  }

  return result.join('')
}
