import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import request from "supertest";
import { OrganizationApi } from "../organizationApi.js";
import res from "express/lib/response.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db(process.env.MONGO_DATABASE);
  await database.collection("test-organizations").deleteMany({});
  app.use("/api/register", OrganizationApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("local login api", () => {
  it("should post to login", async function () {
    const email = ["Test email"];
    const password = ["unicorn"];
    await request(app).post("/api/login").send({
      email,
      password,
    });
    expect(res.statusCode).toEqual(200);
  });
});
