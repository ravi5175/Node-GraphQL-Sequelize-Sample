const graphqlSchema = require("./schema");

const {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getAllStudents,
} = require("./resolverImpl/student");

module.exports = {
    Mutation: {
        createStudent : createStudent,
        updateStudent : updateStudent,
        deleteStudent : deleteStudent
    },
    Query: {
        getStudent : getStudent,
        getAllStudents : getAllStudents
    }
}