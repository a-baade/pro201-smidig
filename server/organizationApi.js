import { Router } from "express";

import bcrypt from "bcryptjs";

const saltRounds = 10;

export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/", async (req, res) => {
    const { firstName, lastName, mobileNumber, companyName, email, jobTitle } =
      req.body;
    const img = req.body.img;

    try {
      const password = await bcrypt.hash(req.body.password, saltRounds);
      mongoDatabase.collection("register").insertOne({
        img,
        firstName,
        lastName,
        mobileNumber,
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
  });

  router.get("/", async (req, res) => {
    const organizations = await mongoDatabase
      .collection("register")
      .find()
      .map(
        ({
          img,
          firstName,
          lastName,
          mobileNumber,
          companyName,
          email,
          password,
          jobTitle,
        }) => ({
          img,
          firstName,
          lastName,
          mobileNumber,
          companyName,
          email,
          password,
          jobTitle,
        })
      )
      .toArray();
    const response = organizations.find((org) => org.img);
    res.json(organizations);
    console.log(res);
  });

  return router;
}
