// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type Book {
  bookId: ID
  authors: [String]
  description: String
  image: String
  link: String
  title: String
}
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }


  type Query {
      users: [User]
      me: User
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID, authors: [String], description: String, image: String, link: String, title: String): Book
    removeBook(bookId: String!): User

  }
`;

// export the typeDefs
module.exports = typeDefs;
