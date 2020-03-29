import type { RGBA } from "types"
import hex from "./hex"
import rgb from "./rgb"

const parsers = [hex.parse, rgb.parse]

const parse = (color: string): ?RGBA => {
  for (const parser of parsers) {
    const result = parser(color)
    if (result !== null) {
      return result
    }
  }
  return null
}

export default parse