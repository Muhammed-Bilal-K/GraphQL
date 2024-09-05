const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./modals/typeDefs');
const { resolvers } = require('./resolvers/index');
const app = express();

const server = new ApolloServer({ resolvers, typeDefs });

// app.get("/",(req,res)=>{
//     res.send("Welcome Api");
// })


server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () => {
        console.log('Graphql Server is running port 3000/graphql');
    })
})

// app.listen(3000, () => {
//     console.log('Server is running port 3000...');
// })