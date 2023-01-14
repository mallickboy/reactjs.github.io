import React from 'react'
import {Work} from "./Work"

// import TodoItems from './MYComponents/TodoItems'
// import Work from './Work';

export default function Todos(props){
// console.log("Length = ",props.todos.length);    // alert(props.todos[0].title)
let todoContainer={
  minHeight:"45vh",
  margin:"auto"
}

  return (
    <div className='container' style={todoContainer}>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0? "No tasks to Display":
        props.todos.map((todo)=>{
            return (<Work todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })
        } 
        
        
    </div>
  )
}
// export default Todos
// title={props.todos[0].title} desc={props.todos[0].desc} 