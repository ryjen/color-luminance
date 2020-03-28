// @flow
import type { RGBA } from "types"

// credits go to https://stackoverflow.com/a/5624139/491075
const parse = (hex): RGBA => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result) {
    return;
  }

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)
  const a = 0

  return { r, g, b, a }
}
