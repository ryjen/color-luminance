import match, { test } from "./hex"

describe("hex", () => {

    describe("valid uppercase", () => {
        const input = "#A0B1C2"
        it ("matches", () => expect(test(input)).toBeTruthy())
        it ("captures", () => {
            const expected = ["A0", "B1", "C2"]
            expect(match(input)).toEqual(expected)
        })
    })

    describe("valid lowercase", () => {
        const input = "#a0b1c2"
        it ("matches", () => expect(test(input)).toBeTruthy())
        it ("captures", () => {
            const expected = ["a0", "b1", "c2"]
            expect(match(input)).toEqual(expected)
        })
    })

    describe("with no hash", () => {
        const input = "a0b1c2"
        it ("matches", () => expect(test(input)).toBeFalsy())
        it ("captures", () => expect(match(input)).toBeNull())
    })
})
