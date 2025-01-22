const express = require("express");
const { loadHomepage, pageNoteFound, signup, loadSignup } = require("../controllers/user/userController");
const router = express.Router();


router.get("/pageNoteFound", pageNoteFound);
router.get("/", loadHomepage);
router.get("/signup", loadSignup);
router.post("/signup", signup)

module.exports = router;

