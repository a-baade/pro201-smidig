import {Router} from "express";

export function CharitiesApi(db){
  const router = new Router();

  router.get("/", async (req, res) => {
    const charities = await db
      .collection("charities")
      .find()
      .map(({name, description}) => ({
        name,
        description,
      }))
      .toArray();
    if (!charities){
      res.sendStatus(404);
    }
    res.json(charities);
  });

  return router;
}