# is-dark-color
Detects if a hex color is dark or light. It is based on the w3 documentation for color luminance: https://www.w3.org/TR/WCAG20/#relativeluminancedef.

Useful when trying to make the text color visible on certain background colors.

## Installation
`npm i -S is-dark-color`

## Usage
> es6 snippet


```javascript
import isDarkColor from 'is-dark-color'

// obvious
const whiteIsDark = isDarkColor('#ffffff') // false
const blackIsDark = isDarkColor('#000000') // true

const someColor = '#ff9900' // some sort of orange
console.log(isDarkColor(someColor)) // try it to find out
```

## Credits
Inspired from
 - https://stackoverflow.com/a/3943023/491075
 - https://stackoverflow.com/a/5624139/491075
 - https://www.w3.org/TR/WCAG20/#relativeluminancedef

## LICENCE
[MIT](./LICENCE)
