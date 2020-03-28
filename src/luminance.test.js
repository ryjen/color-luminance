import isLuminous from "./luminance"

describe("color parsing", () => {
    describe("dark colors", () => {
        it("should return false for black", () => {
            var color = "#000000"
            var result = isLuminous(color)
            expect(result).toBeFalsy()
        })

        it("should return true for green", () => {
            var color = "#00ff00"
            var result = isLuminous(color)
            expect(result).toBeTruthy()
        })

        it("should return true for white", () => {
            var color = "#ffffff"
            var result = isLuminous(color)
            expect(result).toBeTruthy()
        })

        it("should return false for #872929 - edge case", () => {
            var color = "#872929"
            var result = isLuminous(color)
            expect(result).toBeFalsy()
        })

    })

    describe("testing overrides", () => {
        it("should return false for overriden white", () => {
            var color = "#ffffff"
            var result = isLuminous(color, {override: {[color]: false}})

            expect(result).toBeFalsy()
        })

        it("should return true for overriden black", () => {
            var color = "#000000"
            var result = isLuminous(color, {override: {[color]: true}})

            expect(result).toBeTruthy()
        })
    })
})