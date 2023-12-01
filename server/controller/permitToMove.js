const Pform = require("../models/permitToMove/modal");
const User = require("../models/permitToMove/tester");

module.exports.createPform = async (req, res) => {
  console.log("check");

  let p = req.body;
  console.log(p);

  // let a = [];

  // a.push(p);

  // console.log(a);

  const newData = new Pform(p);

  newData.save();

  res.json(p);
};
module.exports.createUser = async (req, res) => {
  console.log("check");

  let p = req.body;
  console.log(p);

  const newData = new User(p);

  newData.save();

  res.json(p);
};

// Get Data
module.exports.getData = async (req, res) => {
  const {id} = req.body;
  const result = await Pform.findById(id);
  res.send(result);
};
