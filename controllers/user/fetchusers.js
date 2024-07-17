const User = require("../../models/user");
const fetchusers = async(req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = fetchusers;
