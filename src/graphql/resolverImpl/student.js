const { Student } = require('../../database/models/student');
// Queries
function getStudent(id){
    console.log("get student query called");
}

// Mutations
function createStudent(std){
    console.log("create student mutation called");
    return Student.create({
        name: "Ravi",
        age: 20,
        course: "MCA"
    });
}

function updateStudent(student){
    console.log("update student mutation called");
}

function deleteStudent(id){
    console.log("delete student mutation called");
}

// Exports
module.exports = {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}