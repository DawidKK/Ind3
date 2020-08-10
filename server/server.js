const { ApolloServer, PubSub } = require('apollo-server')

const typeDefs = require ('./schema');

let todos = []

const pubsub = new PubSub()

const TODO_ADDED = 'TODO_ADDED'

const resolvers = {
  Subscription: {
    todoAdded: {
      subscribe: () => pubsub.asyncIterator([TODO_ADDED])
    }
  },

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

      pubsub.publish(TODO_ADDED, {
        todoAdded: newTodo
      })

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
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub}),
  subscriptions: {
    onConnect: (connectionParams, websocket, context) => {
      console.log('Client connected')
    },
    onDisconnect: (websocket, context) => {
      console.log('Client disconnected')
    }
  },
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`server runs at ${url}`)
  console.log(`server runs at ${subscriptionsUrl}`)
})

