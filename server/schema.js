const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Todo {
    id: String
    text: String
    completed: Boolean
  }

  type Subscription {
    todoAdded: Todo
  }

  type Query {
    todos: [Todo]!
  }

  type Mutation {
    createTodo(text: String!): Todo!
    deleteTodo(id: String!): String
    updateTodo(id: String!, text: String!): Todo
  }
`;

module.exports = typeDefs
