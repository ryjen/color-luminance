import type { Thresholds } from "types/config"

// a map of color overrides
export type Overrides = {
  [string]: boolean
}

export type Options = {
  override: Overrides,
  threshold: Thresholds
}