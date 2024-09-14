const { createAuthor } = require("../services/author.services");
const { createBooks } = require("../services/book.services");

const MutationResolver = {
    Mutation : {
        hello : () => "Hello  Graphql API Mutation",
        createAuthor: (parent, args, context, info) => createAuthor(args, info),
        createBooks: (parent, args, context, info) => createBooks(args, info),
    },
};

module.exports = { MutationResolver };