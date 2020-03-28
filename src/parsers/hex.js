import type { RGBA } from "types"
import match from "matchers/hex"

// credits go to https://stackoverflow.com/a/5624139/491075
const parse = (hex): ?RGBA => {
    const result = match(hex)

  if (!result || result.length < 3) {
        return null
    }

    const r = parseInt(result[0], 16)
    const g = parseInt(result[1], 16)
    const b = parseInt(result[2], 16)
    const a = 0

    return { r, g, b, a }
}

export default parse
