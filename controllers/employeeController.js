const express = require("express");
const router = express.Router();

//name the model name with pascal letter
const Employee = require("../models/employeeModel.js");
const { generateCrudMethods } = require("../services"); //it will automatically import the file even if we don't specify it
const employeeCrud = generateCrudMethods(Employee);
const { validateDbId, raiseRecord404Error } = require("../middlewares");

router.get("/", (req, res, next) => {
  employeeCrud
    .getAll() ///this line return promise so that we can use then and catch as the same
    .then((data) => res.send(data)) //data is the array of data that send back from find function
    .catch((err) => nex(err));
});

router.get(
  "/:id",
  validateDbId,
  (
    req,
    res,
    next //this code will validate an id by the function before run req,res
  ) =>
    employeeCrud
      .getById(req.params.id) //find by id from index.js
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          raiseRecord404Error(req, res);
        }
      })
      .catch((err) => next(err))
);

router.post("/", (req, res, next) => {
  employeeCrud
    .create(req.body)
    .then((data) => res.status(201).json(data)) //respond responded data in json format
    .catch((err) => next(err));
});

router.put("/:id", validateDbId, (req, res) => {
  employeeCrud
    .update(req.params.id, req.body)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        raiseRecord404Error(req, res);
      }
    })
    .catch((err) => next(err));
});

router.delete("/:id", validateDbId, (req, res) => {
  employeeCrud
    .delete(req.params.id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        raiseRecord404Error(req, res);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
