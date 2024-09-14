const { Book } = require("../modals/sequelize.modal");

const createBooks = async (args, info) => {
    let bookInput = args.input;
    try {
      let book = await Book.create(bookInput);
      return book;
    } catch (error) {
      console.error("Error creating book:", error); // Add this line
      throw Error(error);
    }
  };
  
module.exports = { createBooks };