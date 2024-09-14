const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./modals/typeDefs');
const { resolvers } = require('./resolvers/index');
const db = require('./modals/sequelize.modal');
const app = express();

const server = new ApolloServer({ resolvers, typeDefs });

server.start().then(res => {
    db.sequelize.sync({ force: false }).then(() => {
        console.log("DB SYNC SUCCESS");
      });
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () => {
        console.log('Graphql Server is running port 3000/graphql');
    })
})

// app.listen(3000, () => {
//     console.log('Server is running port 3000...');
// })