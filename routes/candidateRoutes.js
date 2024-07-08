const express = require("express");
const router = express.Router();

const { jwtAuthMiddleware, generateToken } = require("../jwt");

const addCandidate = require("../controllers/candidate/addCandidate");
const updateCandidate = require("../controllers/candidate/updateCandidate");
const deleteCandidate = require("../controllers/candidate/deleteCandidate");
const vote = require("../controllers/candidate/vote");
const voteCount = require("../controllers/candidate/voteCount");
const candidateList = require("../controllers/candidate/candidateList");

// POST route to add a candidate
router.post("/", jwtAuthMiddleware, addCandidate);

router.put("/:candidateID", jwtAuthMiddleware, updateCandidate);

router.delete("/:candidateID", jwtAuthMiddleware, deleteCandidate);

// let's start voting
router.put("/vote/:candidateID", jwtAuthMiddleware, vote);

// vote count
router.get("/vote/count", voteCount);

// Get List of all candidates with only name and party fields
router.get("/", candidateList);

module.exports = router;
