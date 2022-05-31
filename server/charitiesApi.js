import {Router} from "express";

export function CharitiesApi(db){
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {
        year: {$gte: 2000 },
    };
    const { category } = req.query;
      if (category) {
        query.categories = { $in: [category] };
      }
    const charities = await db
      .collection("charities")
      .find()
      .map(({name, description, categories, year}) => ({
        name,
        description,
        categories,
        year
      }))
      .toArray();
    if (!charities){
      res.sendStatus(404);
    }
    res.json(charities);
  });

  router.post("/",  (req, res) => {
    const {name, description, category, year} = req.body;
    const categories = [category];
        db.collection("charities")
        .insertOne({name, description, categories, year});
    res.sendStatus(200);
  });

    router.get("/search/*", async (req, res) => {
        const name = req.query.name;
        const organizations = await db
            .collection("charities")
            .find({
                name: new RegExp(name, "i"),
            })
            .map(
                ({name, description, categories, year
                 }) => ({
                    name,
                    description,
                    categories,
                    year
                })
            )
            .toArray();
        const response = organizations.find((org) => org.img);
        res.json(organizations);
        console.log(organizations);
    });

  return router;
}