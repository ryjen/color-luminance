import type { RGBCapture } from "types"

export const test = (color: string): boolean => !!color.match(/^#[0-9A-Fa-f]{6}$/)

const match = (color: string): ?RGBCapture => {
    const captures = color.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/)
    if (!captures || captures.length !== 4) {
        return null
    }
    return [captures[1], captures[2], captures[3]]
}

export default match
