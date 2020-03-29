# color-luminance

Detects if a color is luminous (light) or not.

It is based on the w3 documentation for [color luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef).

Useful when trying to make the text color visible on certain background colors.

## Installation

`yarn add color-luminance`

## Parsing

### Hex

Supports 6 and 8 character formats. (**#rrggbb** and **#aaarrggbb**)

The hash mark prefix is not required.

> examples
> `#F7EFEFEF` | `#a1b2c2` | `ddd111` | `0011FFBB`

TODO: short forms like `fff`

### RGB and RGBA

The alpha channel in RGBA can be in the css floating point or the byte value.

Parsing is very forgiving on space and the prefix `rgb` or `rgba` tag is not required.

> examples
> `rgb(123, 123, 123)` | `rgba(42, 42, 42, 0.5)` | `rgb ( 0 , 0 , 0 )` | `rgba( 255, 0, 0, 127 )` | `(0,255,0)` | `(0,127,255,.5)`

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

### Options

You can override the return value for certain colors and specify thresholds:

```javascript
import isLuminous from "color-luminance";

const options = {
  override: {
    "#010101": true // force color to be luminous
  },
  threshold: {
    alpha: 75, // default threshold for alpha to be luminous
    luminance: 0.17 // default threshold for luminance calculation
  }
};

isLuminous("#010101"); // false
isLuminous("#010101", options); // now true
```

## Credits

Inspired from

- https://stackoverflow.com/a/3943023/491075
- https://stackoverflow.com/a/5624139/491075
- https://www.w3.org/TR/WCAG20/#relativeluminancedef

## LICENCE

[MIT](./LICENCE)
