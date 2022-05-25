import {Router} from "express";

import bcrypt from "bcryptjs";


const saltRounds = 10;

export function LocalLoginApi(mongoDatabase){
  const router = new Router();

  router.get("/", async (req, res) => {

    const organizations = await mongoDatabase
      .collection("register")
      .find()
      .map(({
              email,
              password,
            }) => ({

        email,
        password,
      }))
      .toArray();

    const {email} = req.signedCookies;
    const organization = organizations.find(org => org.email === email);
    if (!organization) {
      res.sendStatus(401);
    }
  });

  router.post("/", async (req, res) => {

    const organizations = await mongoDatabase
      .collection("register")
      .find()
      .map(({
              email,
              password
            }) => ({
        email,
        password
      }))
      .toArray();

    const {email, password } = req.body;

    const organization = organizations.find(org => org.email === email);
    const checkPass = organization.password;
    const verified = bcrypt.compareSync(password, checkPass);

    if (organization && verified === true) {

      res.cookie("email", email, {signed: true});
      res.sendStatus(200);
      console.log(res.status(200));
    } else {

      res.sendStatus(401);
      console.log(res.status(401));
    }
    console.log("Test login")
    console.log(checkPass)
    console.log(password)
    console.log(verified)

  });


  return router;
}