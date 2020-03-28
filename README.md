# color-luminance

Detects if a color is luminous (light) or not. Supports hex or rgb css formats.

It is based on the w3 documentation for color luminance: https://www.w3.org/TR/WCAG20/#relativeluminancedef.

Useful when trying to make the text color visible on certain background colors.

## Installation

`yarn add color-luminance`

## Usage

> es6 snippet

```javascript
import isLuminous from "color-luminance";

// obvious
const whiteIsLuminous = isLuminous("#ffffff"); // true
const blackIsLuminous = isLuminous("rgb(0, 0, 0)"); // false

const someColor = "#ff9900"; // some sort of orange
console.log(isLuminous(someColor)); // try it to find out
```

Optionally, you can override the return value for certain colors:

```javascript
import isLuminous from "color-luminance";

const options = {
  override: {
    "#319FB5": false,
    "#383939": true
  }
};

isLuminous("#319FB5"); // true
isLuminous("#319FB5", options); // false
```

## Credits

Inspired from

- https://stackoverflow.com/a/3943023/491075
- https://stackoverflow.com/a/5624139/491075
- https://www.w3.org/TR/WCAG20/#relativeluminancedef

## LICENCE

[MIT](./LICENCE)
