import { Router } from "express";


export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/new", (req, res) => {
    res.sendStatus(500);
  });

  router.post("/add", async (req, res) => {
    const {firstName, lastName, mobileNumber, cardType, cardNumber, companyName, email, password, jobTitle} = req.body;
    console.log(req.body);
    mongoDatabase.collection("register").insertOne({
      firstName,
      lastName,
      mobileNumber,
      cardType,
      cardNumber,
      companyName,
      email,
      password,
      jobTitle
    });
    res.sendStatus(200);
  });

  return router;
}