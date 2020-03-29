import type { RGBA } from "types"

// handles rgb bytes between 0-255 with additional alpha floating point format between 0-1
const regex = /^(?:rgba?)?\s*\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*(?:,\s*((?:[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])|0*\.\d+|1\.0+)\s*)?\)$/

const alphaRegex = /^0+\.?\d*$|^1\.?0*$|^\.\d+$/

// a simple test for an RGB string without capturing
export const match = (color: string): boolean => !!color.match(regex)

const parseAlpha = (value: string): number => {
  if (value.match(alphaRegex)) {
    return Math.floor(parseFloat(value) * 255)
  }
  return parseInt(value)
}

// parses rgb string into and RGB object
const parse = (color: string): ?RGBA => {
  const captures = color.match(regex)
    
  if (!captures || captures.length !== 5) {
    return null
  }

  const r = parseInt(captures[1])
  const g = parseInt(captures[2])
  const b = parseInt(captures[3])

  const a = captures[4] ? parseAlpha(captures[4]) : 255

  return { r, g, b, a }
}

export default parse
