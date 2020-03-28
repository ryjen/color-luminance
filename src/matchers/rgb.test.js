import match, { test } from "./rgb"

describe("rgb", () => {

    describe("valid with 3 digits", () => {
        const input = "rgb(123, 456, 789)"
        it ("matches", () => expect(test(input)).toBeTruthy())
        it ("captures", () => {
            const expected = ["123", "456", "789"]
            expect(match(input)).toEqual(expected)
        })
    })

    describe("valid with 2 digits", () => {
        const input = "rgb(23, 45, 67)"
        it ("matches", () => expect(test(input)).toBeTruthy())
        it ("captures", () => {
            const expected = ["23", "45", "67"]
            expect(match(input)).toEqual(expected)
        })
    })

    describe("valid with spaces", () => {
        const input = "rgb( 54, 65, 23 )"
        it ("matches", () => expect(test(input)).toBeTruthy())
        it ("captures", () => {
            const expected = ["54", "65", "23"]
            expect(match(input)).toEqual(expected)
        })
    })

    describe("invalid with no tag", () => {
        const input = "(123, 13, 30)"
        it ("matches", () => expect(test(input)).toBeFalsy())
        it ("captures", () => expect(match(input)).toBeNull())
    })
})
