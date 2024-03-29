import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as path from "path";
import dotenv from "dotenv";
import { LoginApi } from "./loginApi.js";
import { MongoClient } from "mongodb";
import { CharitiesApi } from "./charitiesApi.js";
import { OrganizationApi } from "./organizationApi.js";
import { LocalLoginApi } from "./localLoginApi.js";

dotenv.config();
const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 1230000,
    extended: true,
  })
);

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
  app.use(
    "/api/charities",
    CharitiesApi(
      mongoClient.db(process.env.MONGO_DATABASE || "smidig-prosjekt")
    )
  );

  app.use(
    "/api/register",
    OrganizationApi(
      mongoClient.db(process.env.MONGO_DATABASE || "smidig-prosjekt")
    )
  );
  app.use(
    "/api/login",
    LocalLoginApi(
      mongoClient.db(process.env.MONGO_DATABASE || "smidig-prosjekt")
    )
  );
});

app.use("/api/login", LoginApi());
app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
