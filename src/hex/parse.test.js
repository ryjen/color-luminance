import parse, {match} from "./parse"

describe("parse hex", () => {
  describe("converting valid colors", () => {
    it("should convert black", () => {
      const color = "#000000"
      const result = parse(color)
      const expected = {r: 0,g: 0,b: 0,a: 255}
      expect(result).toEqual(expected)
    })

    it("should convert white", () => {
      const color = "#ffffff"
      const result = parse(color)
      const expected = {r: 255,g: 255,b: 255,a: 255}
      expect(result).toEqual(expected)
    })

    it("should convert red", () => {
      const color = "#ff0000"
      const result = parse(color)
      const expected = {r: 255,g: 0,b: 0,a: 255}
      expect(result).toEqual(expected)
    })
  })

  describe("converting invalid colors", () => {
    it("should return undefined", () => {
      const color = "#gahsrgas"
      const result = parse(color)
      expect(result).toBeNull()
    })
  })

  describe("valid uppercase", () => {
    const input = "#A0B1C2"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("captures", () => {
      const expected = {r:160, g:177, b:194, a: 255}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("valid lowercase", () => {
    const input = "#a0b1c2"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("captures", () => {
      const expected = {r:160, g:177, b:194, a: 255}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("with no hash", () => {
    const input = "a0b1c2"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("captures", () => {
      const expected = {r:160, g:177, b:194, a: 255}
      expect(parse(input)).toEqual(expected)
    })
  })

  describe("with android alpha", () => {
    const input = "#7FA0B1C2"
    it ("matches", () => expect(match(input)).toBeTruthy())
    it ("captures", () => {
      const expected = {r:160, g:177, b:194, a: 127}
      expect(parse(input)).toEqual(expected)
    })
  })
})
