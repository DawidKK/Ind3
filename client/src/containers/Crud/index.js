import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";

import Form from '../../components/Form'
import Notification from '../../components/Notification'

const READ_TODOS = gql`
  query todos{
    todos {
      id
      text
      completed
    }
  }
`

const CREATE_TODO = gql`
  mutation CreateTodo($text: String!) {
    createTodo(text: $text) {
      text
    }
  }
`
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $text: String!) {
    updateTodo(id: $id, text: $text) {
      text
      id
    }
  }
`

const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id)
  }
`

const Crud = () => {
  const [todoValue, setTodoValue] = useState('')
  const [isUpdateMode, setUpdateMode] = useState(false)
  const [editingTodoId, setEditingTodoId] = useState('')

  const { data, loading, error, refetch } = useQuery(READ_TODOS)
  const [createTodo] = useMutation(CREATE_TODO)
  const [deleteTodo] = useMutation(DELETE_TODO)
  const [updateTodo] = useMutation(UPDATE_TODO)

  const handleChange = e => {
    setTodoValue(e.target.value)
  }

  const editTodo = e => {
    e.preventDefault()
    const todo = data.todos.find(todo => todo.id === e.target.id)
    setUpdateMode(true)
    setTodoValue(todo.text)
    setEditingTodoId(todo.id)
  }

  const handleDeleteTodo = e => {
    deleteTodo({variables: { id: e.target.id }})
    setTodoValue('')
    setEditingTodoId('')
    setUpdateMode(false)
    refetch()
  }

  const handleSubmit = e => {
    e.preventDefault()
    createTodo({ variables: { text: todoValue }})
    setTodoValue('')
    refetch()
  }

  const handleUpdate = e => {
    e.preventDefault()
    updateTodo({ variables: { id: editingTodoId, text: todoValue }})
    setTodoValue('')
    setEditingTodoId('')
    setUpdateMode(false)
    refetch()
  }

  if (loading) return <p>loading...</p>
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <div>
      <h3>Create New Todo</h3>
      { isUpdateMode
        ? <Form
            handleSubmit={handleUpdate}
            value={todoValue}
            name="updateTodo"
            handleChange={handleChange}
          />
        : <Form
            handleSubmit={handleSubmit}
            value={todoValue}
            name="addTodo"
            handleChange={handleChange}
          />
      }
      <ul>
        {data.todos.map((todo) =>
          <li key={todo.id}>
            <span className={todo.completed ? "done" : "pending"}>{todo.text}</span>
            <button onClick={e => handleDeleteTodo(e)} id={todo.id}>X</button>
            <button onClick={e => editTodo(e)} id={todo.id}>Edit</button>
          </li>
        )}
      </ul>
      <Notification />
    </div>
  )
}

export default Crud
