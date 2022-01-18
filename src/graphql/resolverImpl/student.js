const {student} = require('../../database/models/student');
// Queries
function getStudent(id){
    console.log("get student query called");
}

// Mutations
function createStudent(std){
    console.log("create student mutation called");
    student.createStudent({
        name: std.name,
        age: std.age,
        course: std.course
    }).catch(err => {
        if(err){
            console.log(err);
        }else{
            console.log("Student created");
        }
    })
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