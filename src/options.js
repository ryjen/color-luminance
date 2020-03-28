import type { Options } from "types"

export const isOverriden = (color: string, options?: Options): boolean | null => {
    if (!options || !options.override) {
        return null
    }
    
    const normalizedColor = color.toLowerCase()

    const overrideColors = Object.keys(options.override)
      
    const option = overrideColors.find(k => k.toLowerCase() === normalizedColor)

    return option ? options.override[option] : null

}
