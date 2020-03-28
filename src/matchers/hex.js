// @flow

const test = (color: string) => color.match(/^#[0-9A-Fa-f]{6}/)

const match = (color: string): HexMatch => color.match(/^#([0-9A-Fa-f]{2}){3}$/)

