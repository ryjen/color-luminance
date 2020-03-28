import type { RGBCapture } from "types"

export const test = (color: string): boolean => 
  color.match(/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/) !== null

const match = (color: string): ?RGBCapture => {
  const captures = color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)
    
    if (!captures || captures.length < 4) {
        return null
    }

    return [captures[1], captures[2], captures[3]]
}

export default match
