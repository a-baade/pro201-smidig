import { Router } from "express";

import bcrypt from "bcryptjs";

const saltRounds = 10;

export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/", async (req, res) => {
    const {firstName, lastName, mobileNumber, cardType, cardNumber, companyName, email, password, jobTitle} = req.body;

    try {
      const hashed = await bcrypt.hash(req.body.password, saltRounds);
      mongoDatabase.collection("register").insertOne({
        firstName,
        lastName,
        mobileNumber,
        cardType,
        cardNumber,
        companyName,
        email,
        hashed,
        jobTitle
      });
      res.sendStatus(200);
    } catch (error){
      console.log(error);
    }

    console.log(req.body);
  });

  router.get("/", async (req, res) => {
    const organizations = await mongoDatabase
      .collection("register")
      .find()
      .map(({firstName,
              lastName,
              mobileNumber,
              cardType,
              cardNumber,
              companyName,
              email,
              password,
              jobTitle}) => ({
        firstName,
        lastName,
        mobileNumber,
        cardType,
        cardNumber,
        companyName,
        email,
        password,
        jobTitle
      }))
      .toArray();
    res.json(organizations);
  })

  return router;
}