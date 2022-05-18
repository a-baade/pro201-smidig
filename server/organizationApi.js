import { Router } from "express";


export function OrganizationApi(mongoDatabase) {
  const router = new Router();

  router.post("/", async (req, res) => {
    const {firstName, lastName, mobileNumber, companyName, email, password, jobTitle} = req.body;
    mongoDatabase
      .collection("organizations")
      .insertOne({firstName, lastName, mobileNumber, companyName, email, password, jobTitle});
    res.sendStatus(200);
  });

  return router;
}