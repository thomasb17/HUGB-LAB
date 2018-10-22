const greeting = require("./greeting");

test("returns greeting with custom name", () => {
	expect(greeting("Beii")).toBe("Hello, Beii!!");
});