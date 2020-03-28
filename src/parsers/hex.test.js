import parse from "./hex"

describe("parse hex", () => {
    describe("converting valid colors", () => {
        it("should convert black", () => {
            const color = "#000000"
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
            const color = "#ffffff"
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
            const color = "#ff0000"
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
            const color = "#gahsrgas"
            const result = parse(color)

            expect(result).toBeNull()
        })
    })

})
