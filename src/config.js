import type { Options, Config, Overrides, OverrideValue } from "types"

// get an override from config
// @return an object with the value or null (to deal with boolean/null/undefined)
const getOverride = (overrides: Overrides, color: string): ?OverrideValue => {
  const normalizedColor = color.toLowerCase()
      
  const overrideColors = Object.keys(overrides)
        
  const option = overrideColors.find(k => k.toLowerCase() === normalizedColor)

  return option ? { value: !!overrides[option] } : null
}

// These are potentially user supplied configurations.  Sanitize.
const sanitize = (options?: Options): Config => {
  return {
    threshold: {
      alpha: options?.threshold?.alpha || 75,
      luminance: options?.threshold?.luminance || 0.17
    },
    getOverride: (color: string) => getOverride(options?.override || {}, color)
  }
}

export default sanitize
