const { Student } = require('../../database/models/student');
// Queries
function getStudent(id){
    console.log("get student query called");
}

function getAllStudents(){
    console.log("get all students query called");
    return Student.findAll();
}

// Mutations
function createStudent(root,args){
    console.log("create student mutation called");
    console.table(args);
    return Student.create(args.student);
}

function updateStudent(root,args){
    console.log("update student mutation called");
    return Student.update(args.student,{
        where: {
            id: args.id
        }
    });
}

function deleteStudent(root,args){
    console.log("delete student mutation called");
    console.log(args);
    return Student.destroy({
        where: {
            id: args.id
        }
    });
}

// Exports
module.exports = {
    getStudent,
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
}