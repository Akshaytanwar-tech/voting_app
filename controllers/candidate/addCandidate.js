const checkAdminRole = require("../helpers/checkAdmin");
const Candidate = require("../../models/candidate");
const { response } = require("express");
const cloudinary = require("cloudinary").v2;

const addCandidate = async (req, res) => {
  try {
    const { name, party, age } = req.body;
    console.log(req.body, req.file);
    if (!(await checkAdminRole(req.user.id)))
      return res.status(403).json({ message: "user does not have admin role" });
    // Create a new User document using the Mongoose model
    cloudinary.uploader.upload(req.file.path, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Error uploading file" });
      }
      // File uploaded successfully, return Cloudinary URL
      const candidate = await Candidate.create({
        name: name,
        party: party,
        age: age,
        photo: result.secure_url,
      });
      if (candidate) {
        res.json({ response: candidate });
      } else {
        return res.status(500).json({ error: "Internal error" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = addCandidate;
