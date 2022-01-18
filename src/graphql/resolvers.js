const graphqlSchema = require("./schema");

const {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
} = require("./resolverImpl/student");

module.exports = {
    Mutation: {
        createStudent : createStudent,
        updateStudent : updateStudent,
        deleteStudent : deleteStudent
    },
    Query: {
        getStudent : getStudent,
    }
}