const dotenv = require('dotenv');
const express = require("express");
const app = express();

// GraphQL imports
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const {makeExecutableSchema} = require("@graphql-tools/schema");
const graphqlSchema = require("./src/graphql/schema");
const graphqlResolver = require("./src/graphql/resolvers");

// Postgres imports
const sequelize = require("./src/database/database");
const { Student } = require("./src/database/models/student");

dotenv.config();

const schema = makeExecutableSchema({
    typeDefs: [graphqlSchema],
    resolvers: graphqlResolver
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

sequelize
    .sync({
        force: true,
    })
    .then((result) => {
        console.log(result);
        app.listen( process.env.PORT ,()=>{
            console.log(`server started at port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })