const request = require("supertest");

const server = require("../api/server.js")
const dogsModel = require("./dogsModel.js");

describe("dogsModel.js", function() {
    describe("get function", function () {
        it("should return 200 okay", async function() {
            const response = await request(server).get("/api/dogs")
            
            expect(response.status).toBe(200);
        })

        it("should return JSON", async function () {
            const response = await request(server).get("/api/dogs")

            expect(response.type).toMatch(/json/i);
        })
    })
})