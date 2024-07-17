const Candidate = require("../../models/candidate");

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = getCandidates;
