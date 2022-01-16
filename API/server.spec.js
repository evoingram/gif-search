const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
	describe("GET /", () => {
		it("should return 200", function() {
			return request(server)
				.get("/")
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it("should return HTML", function() {
			return request(server)
				.get("/")
				.then(res => {
					expect(res.type).toMatch(/html/i);
				});
		});
	});
});