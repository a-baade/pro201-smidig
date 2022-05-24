import { Router } from "express";


export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/", async (req, res) => {
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