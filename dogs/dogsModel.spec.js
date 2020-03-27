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

    describe("insert function", function () {
        it("should return 201 okay", async function() {
            const newDog = {
                name: "test name",
                breed: "test breed"
            }
            const response = await request(server)
                            .post("/api/dogs")
                            .send(newDog)

            expect(response.status).toBe(201);
        })

        it("should return JSON of newly created item", async function() {
            const newDog = {
                name: "test name",
                breed: "test breed"
            }

            const response = await request(server)
                            .post("/api/dogs")
                            .send(newDog);

            expect(response.body).toStrictEqual({
                id: expect.any(Number),
                name:"test name",
                breed: "test breed"
            })
        })
    })
})