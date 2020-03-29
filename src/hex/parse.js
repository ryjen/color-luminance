import type { RGBA } from "types"

const regex = /^#?([0-9A-Fa-f]{2})?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/

// a simple test without capturing
export const match = (color: string): boolean => !!color.match(regex)

// captures hex values into an RGB object
const parse = (color: string): ?RGBA => {
  const captures = color.match(regex)
  if (!captures || captures.length !== 5) {
    return null
  }
  const r = parseInt(captures[2], 16)
  const g = parseInt(captures[3], 16)
  const b = parseInt(captures[4], 16)
  const a = captures[1] ? parseInt(captures[1], 16) : 255
  
  return { r, g, b, a }
}

export default parse
