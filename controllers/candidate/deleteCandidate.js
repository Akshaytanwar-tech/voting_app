const Candidate = require("../../models/candidate");
const checkAdminRole = require("../helpers/checkAdmin");
const deleteCandidate = async (req, res) => {
  try {
    if (!checkAdminRole(req.user.id))
      return res.status(403).json({ message: "user does not have admin role" });

    const candidateID = req.params.candidateID; // Extract the id from the URL parameter

    const response = await Candidate.findByIdAndDelete(candidateID);

    if (!response) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    res
      .status(200)
      .json({
        response: response,
        status: "ok",
        message: "Candidate is deleted",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = deleteCandidate;
