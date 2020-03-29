import parse, {match} from "./parse"

describe("rgb parsing", () => {
  describe("converting valid colors", () => {
    it("should convert black", () => {
      const color = "rgb(0, 0, 0)"
      const result = parse(color)
      const expected = {r: 0,g: 0,b: 0,a: 255}
      expect(result).toEqual(expected)
    })

    it("should convert white", () => {
      const color = "rgb(255,255,255)"
      const result = parse(color)
      const expected = {r: 255,g: 255,b: 255,a: 255}
      expect(result).toEqual(expected)
    })

    it("should convert red", () => {
      const color = "rgb(255,0,0)"
      const result = parse(color)
      const expected = {r: 255, g: 0, b: 0, a: 255}
      expect(result).toEqual(expected)
    })

    it ("should convert green with alpha", () => {
      const color = "rgba (0, 255, 0, 127)"
      const result = parse(color)
      const expected = { r: 0, g: 255, b: 0, a: 127 }
      expect(result).toEqual(expected)
    })
  })

  describe("converting invalid colors", () => {
    it("should return undefined", () => {
      const color = "#rgb (123213, 123123, 123arstars)"
      const result = parse(color)
      expect(result).toBeNull()
    })
  })

  describe("valid with 3 digits", () => {
    const input = "rgb(123, 134, 233)"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("parses", () => {
      const expected = {r:123, g:134, b:233, a:255}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("valid with 2 digits", () => {
    const input = "rgb(23, 45, 67)"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("parses", () => {
      const expected = {r:23, g:45, b:67, a:255}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("valid with spaces", () => {
    const input = "rgba( 54, 65, 23, 127 )"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("parses", () => {
      const expected = { r:54, g:65, b:23, a:127}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("invalid with no tag", () => {
    const input = "(123, 13, 30, 80)"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("parses", () => {
      const expected = { r: 123, g:13, b:30, a: 80}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("a floating point alpha", () => {
    const input = "rgba(42, 42, 42, .6)"
    it("matches", () => expect(match(input)).toBeTruthy())
    it("parses", () => {
      const expected = { r: 42, g: 42, b: 42, a: 153 }
      expect(parse(input)).toEqual(expected)
    })
  })
})
