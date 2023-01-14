import React from 'react'

const Work = (todos) => {
    // console.log(todos.keyy)
  return (
    <div>
      <h4 className='mt-4'>{todos.todo.title}</h4>
      <p>{todos.todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{todos.onDelete(todos.todo)}}>Delete</button>
      <hr/>
    </div>
  )
}

export {Work}
