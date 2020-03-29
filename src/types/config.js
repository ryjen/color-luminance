
// values for determining luminance
export type Thresholds = {
  alpha: number,
  luminance: number
}

// a wrapper for a maybe boolean
export type OverrideValue = {
  value: boolean
}

// custom functionality
export type Config = {
  threshold: Thresholds,
  getOverride: (color: string) => ?OverrideValue
}
