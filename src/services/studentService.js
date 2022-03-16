const Student = require("../models/studentModel");

class StudentService {
  async createNewStudent(studentInfo) {
    const student = await Student.create(studentInfo);
    return student;
  }

  async getAllStudents() {
    const students = await Student.findAll();
    if (!students) {
      throw new Error("No students");
    }
    return students;
  }
}

module.exports = new StudentService();
