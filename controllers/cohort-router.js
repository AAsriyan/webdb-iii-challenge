const router = require("express").Router();
const knex = require("knex");
const db = require("../config/knexConfig.js");

router.get("/", async (req, res) => {
  try {
    const result = await db("cohorts");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
