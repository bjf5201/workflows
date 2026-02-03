import { test, expect } from "vitest"
import { hello } from "./index"

test("hello function should return correct greeting", () => {
    let result = hello("emily")
    expect(result).toContain("emily")
})