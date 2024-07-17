const express = require("express");
const router = express.Router();
const { jwtAuthMiddleware, generateToken } = require("./../jwt");
const Signup = require("../controllers/user/SignUp");
const SignIn = require("../controllers/user/SignIn");
const Profile = require("../controllers/user/Profile");
const ChangePassword = require("../controllers/user/ChangePassword");
const fetchusers = require("../controllers/user/fetchusers");

// POST route to add a person
router.post("/signup", Signup);

// Login Route
router.post("/login", SignIn);

// Profile route
router.get("/profile", jwtAuthMiddleware, Profile);

// to change the password
router.put("/profile/password", jwtAuthMiddleware, ChangePassword);

// to check how many users are exists
router.get("/getusers", fetchusers);

module.exports = router;
