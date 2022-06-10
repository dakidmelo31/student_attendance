import React from 'react'

export default function Todo({ todo, toggle }) {
    function handleToggle(){
        toggle(todo.id)
    }
  return (
      <>
        <div className='list'>
            {todo.name} 
            <b>{todo.matricule}</b>
        <input type="checkbox" readOnly checked={todo.present} onChange={handleToggle}/> Present</div>
      </>
  )
}
