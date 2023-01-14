import './App.css';
import Header from './MYComponents/Header';
import Todos from './MYComponents/Todos';
// import {Work} from './MYComponents/Work';  
import Footer from './MYComponents/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './MYComponents/AddTodo';
import {About} from './MYComponents/About';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo=[];
  } else {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete=(todo)=>{
    // console.log('Delete',todo);
    // Deleting doesn't work in react in this way
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    // using state hook
    setTodos(todos.filter((e)=>{
      return e !==todo  // returning 1 for different & 0 for matched item
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    let sno=todos.length+1;//todos[todos.length-1].sno+1;
    const newTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,newTodo]);
    console.log(newTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    // effect
    localStorage.setItem("todos",JSON.stringify(todos));// execute this
  },[todos])// on changing todos items

  return (
    <>
    <BrowserRouter>
      
         <Header title="My TODO lists" />
      <Routes>


          <Route  exact path="/" element={<><AddTodo addTodo={addTodo}/><Todos todos={todos} onDelete={onDelete}/></>}></Route>

          <Route path="/about" element={<About />} > </Route>

        </Routes>
        <Footer/>

      
      
    </BrowserRouter>  
    </> 
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);