const ObjectId = require("mongoose").Types.ObjectId; //varieble that carry objectId from mongoose request

const validateDbId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false) {
    //check if it doesn't have objectId
    res.status(400).json({
      error: `given object id: ${req.params.body} is not valid`,
    });
  } else {
    //means that the request db is valid
    next(); //run the next middlewares
  }
};

const raiseRecord404Error = (req, res) => {
  res.status(404).json({
    error: "no record with givern _id : " + req.params.id,
  });
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({ error });
};

module.exports = {
  validateDbId,
  raiseRecord404Error,
  errorHandler,
};
