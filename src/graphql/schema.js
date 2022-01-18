const fs = require('fs');
const schema = fs.readFileSync('././schema.graphql', 'utf-8');


module.exports = schema;