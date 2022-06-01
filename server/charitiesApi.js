import { Router } from "express";
import { ObjectId } from "mongodb";

export function CharitiesApi(db) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const charities = await db
      .collection("charities")
      .find()
      .map(({ _id, name, description, bgImage, charityLogo }) => ({
        _id,
        name,
        description,
        bgImage,
        charityLogo,
      }))
      .toArray();
    if (!charities) {
      res.sendStatus(404);
    }
    res.json(charities);
    //console.log(charities);
  });

  router.get("/charity/id", async (req, res) => {
    let id = req.query.id;
    const charities = await db
      .collection("charities")
      .find({ _id: { $in: [ObjectId({ id })] } })
      .map(({ name, description, bgImage, charityLogo, _id }) => ({
        name,
        description,
        bgImage,
        charityLogo,
        _id,
      }))
      .limit(1)
      .toArray();
    if (!charities) {
      res.sendStatus(404);
    }
    res.json(charities);
    //console.log(charities);
  });

  router.get("/donate/id", async (req, res) => {
    let id = req.query.id;
    const charities = await db
      .collection("charities")
      .find({ _id: { $in: [ObjectId({ id })] } })
      .map(({ name, _id }) => ({
        name,
        _id,
      }))
      .limit(1)
      .toArray();
    if (!charities) {
      res.sendStatus(404);
    }
    res.json(charities);
  });

  return router;
}
