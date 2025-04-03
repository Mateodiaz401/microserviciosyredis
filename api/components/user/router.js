const express = require("express");
const router = express.Router();
const response = require("../../../router/network");
const Controller = require("./index");

router.get("/", async (req, res) => {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const insert = await Controller.upsert(req.body);
    response.success(req, res, insert, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.delete("/:id", async (id) => {
  try {
    const dell = await Controller._delete(req.params.id);
    response.success(req, res, dell, 200);
  } catch (error) {
    console.log(error);
    response.error(req, res, error.message, 500);
  }
});
module.exports = router;
