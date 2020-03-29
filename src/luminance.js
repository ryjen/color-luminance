import type { RGBA, Options } from "types"
import parse from "./parser"
import Config from "./config"

const calculate = (color: RGBA) => {
  let colorArray = [color.r / 255, color.g / 255, color.b / 255].map(v => {
    if (v <= 0.03928) {
      return v / 12.92
    }

    return Math.pow((v + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2]
}

const isLuminous = (color: string, options?: Options): boolean => {

  const config = Config(options)

  const override = config.getOverride(color)
    
  if (override) {
    return override.value
  }

  const rgba = parse(color)

  if (!rgba) {
    return false
  }

  // alpha is luminance
  if (rgba.a <= config.threshold.alpha) {
    return true
  }

  return calculate(rgba) > config.threshold.luminance
}

export default isLuminous
