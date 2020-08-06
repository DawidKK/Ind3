const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

const typeDefs = require ('./schema');

let todos = []

const resolvers = {
  Query: {
    todos: () => todos,
  },

  Mutation: {
    createTodo: (parent, args, context, info) => {
      const newTodo = {
        id: Date.now().toString(),
        text: args.text,
        completed: false,
      }
      todos.push(newTodo)
      return newTodo
    },

    deleteTodo: (parent, args, context, info) => {
      todos = todos.filter(todo => todo.id !== args.id)
      return args.id;
    },

    updateTodo: (parent, args, context, info) => {
      const todo = todos.find(todo => todo.id === args.id)
      todos = todos.map(todo => todo.id === args.id ? {...todo, text: args.text} : todo)

      return todo
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(cors());

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
