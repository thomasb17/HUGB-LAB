const greeting = require("./greeting");

test("returns greeting with custom name", () => {
	expect(greeting("Be")).toBe("Hello, Be!!");
});