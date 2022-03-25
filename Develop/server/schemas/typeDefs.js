// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type Book {
  authors: String
  description: String
  bookId: String
  image: String
  link: String
  title: String
}
  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }


  type Query {
      users: [User]
      me: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: String!): User

  }
`;

// export the typeDefs
module.exports = typeDefs;
