import type { RGBA } from "types"
import match from "matchers/rgb"

const parse = (color): ?RGBA => {
    const values = match(color)

    if (!values || values.length < 3) {
        return null
    }

    const r = parseInt(values[0])
    const g = parseInt(values[1])
    const b = parseInt(values[2])

    const a = (values.length > 3) ? values[3] : 0

    return { r, g, b, a }
}

export default parse
