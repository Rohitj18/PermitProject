const Form = require("../models/confinedSpacePermit");

// Create Form
module.exports.createForm = async (req, res) => {
  const form = new Form(req.body);
  console.log("this is confined space form",form);
  await form.save();
  res.send(form);
};

// Display form details
module.exports.showDetails = async (req, res) => {
  const {id} = req.body
  const form = await Form.findById(id);
  console.log("Backend-data");
  console.log(form);
  res.send(form);
};
