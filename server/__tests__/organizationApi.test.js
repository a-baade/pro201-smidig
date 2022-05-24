import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import request from "supertest";
import { CharitiesApi } from "../charitiesApi.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db(process.env.MONGO_DATABASE);
  await database.collection("organizations").deleteMany({});
  app.use("/api/register", CharitiesApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("organizations api", () => {
  it("should get organizations", async function() {
    const email = ["Test email"];
    await request(app)
      .post("/api/register")
      .send({
        firstName: "Test name",
        lastName: "Test name",
        mobileNumber: "+47 23456789",
        cardType: "Visa",
        cardNumber: "123456781234",
        companyName: "Test company",
        jobTitle: "Test job",
        email,
        password: "testpassword",
      })
    expect(200);

    expect(
      (await request(app).get("/api/register")).body.map(({email}) => email)
    ).not.toContain("Test email");
  });
  it("should register new organization", async function() {
    const email = "Test email";
    const firstName = "Test name";
    await request(app)
      .post("/api/register")
      .send({
        firstName,
        lastName: "Test name",
        mobileNumber: "+47 23456789",
        cardType: "Visa",
        cardNumber: "123456781234",
        companyName: "Test company",
        jobTitle: "Test job",
        email,
        password: "testpassword",
      })
      .expect(200);
    expect(
      (
        await request(app).get("/api/register").query({ firstName }).expect(200)
      ).body.map(({ email }) => email)
    ).toContain(email);
  });
})