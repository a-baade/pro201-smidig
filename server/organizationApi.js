import { Router } from "express";

import bcrypt from "bcryptjs";

const saltRounds = 10;

export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/", async (req, res) => {
    const {
      firstName,
      lastName,
      mobileNumber,
      cardType,
      cardNumber,
      companyName,
      email,
      jobTitle,
    } = req.body;
    const img = req.body.img;

    try {
      const password = await bcrypt.hash(req.body.password, saltRounds);
      mongoDatabase.collection("register").insertOne({
        img,
        firstName,
        lastName,
        mobileNumber,
        cardType,
        cardNumber,
        companyName,
        email,
        password,
        jobTitle,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }

    console.log(req.body);
    console.log(req.body.img);
  });

  router.get("/", async (req, res) => {
    const organizations = await mongoDatabase
      .collection("register")
      .find()
      .map(
        ({
          firstName,
          lastName,
          mobileNumber,
          cardType,
          cardNumber,
          companyName,
          email,
          password,
          jobTitle,
        }) => ({
          firstName,
          lastName,
          mobileNumber,
          cardType,
          cardNumber,
          companyName,
          email,
          password,
          jobTitle,
        })
      )
      .toArray();
    res.json(organizations);
  });

  return router;
}
