const checker = require("../model/login");

exports.addNum = (req, res) => {
  try {
    const authData = req.body;
    console.log(authData);
    checker.create(authData);
    res.status(200).send(authData);
  } catch (error) {
    res.status(404).send({ error: "error no register succesfully" });
  }
};
exports.updateNum = async (req, res) => {
  console.log(req.body.username)
  try {
    const finalBooked = await checker.findOneAndUpdate(
      { _id: "658f0d7cb7674e8eca184e42" },
      { username: req.body.username }
    );
    res.status(200).send( finalBooked);
  } catch (error) {}
};
exports.showNum = async (req, res) => {
  try {
    const authData = req.body;
    console.log(authData);
    await checker
      .findOne({ _id: "658f0d7cb7674e8eca184e42" })
      .then((user) => {
        console.log(user);
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
