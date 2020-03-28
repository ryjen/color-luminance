import type { RGBA } from "types"
import parseHex from "./hex"
import parseRgb from "./rgb"

const parse = (color: string): ?RGBA => {
    let rgb = parseHex(color)

    if (rgb) {
        return rgb
    }

    rgb = parseRgb(color)

    return rgb
}

export default parse