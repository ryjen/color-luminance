import parse from "./rgb"

describe("parse rgb", () => {
  describe("converting valid colors", () => {
    it("should convert black", () => {
      const color = "rgb(0, 0, 0)"
      const result = parse(color)
      const expectedResult = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }

      expect(result).toEqual(expectedResult)
    })

    it("should convert white", () => {
      const color = "rgb(255,255,255)"
      const result = parse(color)
      const expectedResult = {
        r: 255,
        g: 255,
        b: 255,
        a: 0
      }

      expect(result).toEqual(expectedResult)
    })

    it("should convert red", () => {
      const color = "rgb(255,0,0)"
      const result = parse(color)
      const expectedResult = {
        r: 255,
        g: 0,
        b: 0,
        a: 0
      }

      expect(result).toEqual(expectedResult)
    })
  })

  describe("converting invalid colors", () => {
    it("should return undefined", () => {
      const color = "#rgb (123213, 123123, 123arstars)"
      const result = parse(color)

      expect(result).toBeNull()
    })
  })

})
