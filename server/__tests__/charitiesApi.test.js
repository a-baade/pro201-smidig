import express from "express";
import { MongoClient, ObjectId, ObjectID } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { CharitiesApi } from "../charitiesApi.js";
import request from "supertest";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db(process.env.MONGO_DATABASE);
  await database.collection("test-collection").deleteMany({});
  app.use("/api/charities", CharitiesApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("charities api", () => {
  it("should list charities", async function () {
    const name = ["Charity 1", "Charity 2", "Charity 3", "Charity 4"];
    await request(app).post("/api/charities").send({
      name,
      description: "Test description",
    });
    expect(200);

    expect(
      (await request(app).get("/api/charities")).body.map(({ name }) => name)
    ).toContain("Charity 1");
  });

  it("should redirect to charity page by id", async function () {
    const name = "Charity 1";
    const id = "628136d0c23c5bceb2297a7";
    await request(app).post("/api/charities/").send({
      id,
      name,
      description: "Test description",
    });
    expect(200);
    expect(
      (
        await request(app).get(
          "/api/charities/charity/id?id=628136d0c23c5bceb2297a7"
        )
      ).body.map(({ name }) => name)
    ).toContain(name);
  });
});
