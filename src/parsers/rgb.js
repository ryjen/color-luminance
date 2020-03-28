import type { RGBA } from 'types'

const parse = (color) => {
  if (!color.match(/^rgb/)) {
    return;
  }

  // If HEX --> store the red, green, blue values in separate variables
  const values = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

  if (!values) {
    return;
  }

  r = values[1];
  g = values[2];
  b = values[3];

  a = (values.length > 4) ? values[4] : 0

  return { r, g, b, a }
}

export default parse