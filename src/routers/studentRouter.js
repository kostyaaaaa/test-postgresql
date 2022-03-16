const express = require("express");
const {
  createNewStudent,
  getStudentById,
  getAllStudents,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", createNewStudent);
router.get("/:id", getStudentById);
router.get("/", getAllStudents);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;
