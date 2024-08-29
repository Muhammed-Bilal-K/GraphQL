const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();

const server = new ApolloServer({resolvers , typeDefs});

app.get("/",(req,res)=>{
    res.send("Welcome Api");
})

app.listen(3000,()=>{
    console.log('Server is running port 3000...');
})