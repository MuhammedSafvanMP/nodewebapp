const express = require("express");
const { loadHomepage, pageNoteFound } = require("../controllers/user/userController");
const router = express.Router();


router.get("/pageNoteFound", pageNoteFound);
router.get("/", loadHomepage);

module.exports = router;

