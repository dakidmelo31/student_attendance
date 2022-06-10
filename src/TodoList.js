import React from 'react'
import Todo from "./Todo"

export default function TodoList({ todos, toggle }) {
  return (
      todos.map(todo => {
          return <Todo key={todo.matricule} todo={todo} toggle={ toggle }/>
      })
  )
}
