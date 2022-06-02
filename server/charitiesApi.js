import { Router } from "express";
import { ObjectId } from "mongodb";

export function CharitiesApi(db) {
  const router = new Router();

  // Get all charities
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
  });

    // Get one specific charity
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
  });

    // Get one specific charity
  router.get("/donate/id", async (req, res) => {
    let id = req.query.id;
    const charities = await db
      .collection("charities")
      .find({ _id: { $in: [ObjectId({ id })] } })
      .map(({ name, _id, bgImage, charityLogo }) => ({
        name,
        _id,
          bgImage,
          charityLogo,
      }))
      .limit(1)
      .toArray();
    if (!charities) {
      res.sendStatus(404);
    }
    res.json(charities);
  });

    router.get("/search/*", async (req, res) => {
        const name = req.query.name;
        const charities = await db
            .collection("charities")
            .find({
                name: new RegExp(name, "i"),
            })
            .map(
                ({_id, name, description, bgImage, charityLogo
                 }) => ({
                    _id, name, description, bgImage, charityLogo
                })
            )
            .toArray();
        const response = charities.find((org) => org.img);
        res.json(charities);
        console.log(charities);
    });

  return router;
}
