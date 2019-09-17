const sum = require("../dist")

test("Basic sum", () => {
  expect(sum("1", "2", "3")).toBe("6")
})

test("Mid sum", () => {
  expect(sum("99", "1", "2")).toBe("102")
})

test("Big sum", () => {
  expect(sum("99999999999999999999999999999999999999999999", "1")).toBe(
    "100000000000000000000000000000000000000000000"
  )
})

test("Big sum with spread", () => {
  const params = ["99999999999999999999999999999999999999999999", "1"]
  expect(sum(...params)).toBe("100000000000000000000000000000000000000000000")
})
