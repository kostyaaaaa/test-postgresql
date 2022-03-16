const studentService = require("../services/studentService.js");

const createNewStudent = async (req, res) => {
  try {
    const studentInfo = req.body;
    const student = await studentService.createNewStudent(studentInfo);
    res.status("201").json(student);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getStudentById = () => {};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status("200").json(students);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateStudentById = () => {};
const deleteStudentById = () => {};

module.exports = {
  createNewStudent,
  getStudentById,
  getAllStudents,
  updateStudentById,
  deleteStudentById,
};
