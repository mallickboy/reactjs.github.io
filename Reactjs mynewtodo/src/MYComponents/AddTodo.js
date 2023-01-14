import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    
    const submit=(e)=>{
        e.preventDefault();
        if (!title||!desc) {
            alert("Title and Description can't be blank")
        }else{
            // console.log('ok')
            props.addTodo(title,desc);
            // title="";desc="";
            setDesc("");setTitle("");
        }
    }
    return (
        <div className='container my-3' >
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control my-2" id="title" placeholder="Enter Todo Title"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc}onChange={(e)=>{setDesc(e.target.value)}} className="form-control my-2" id="desc" placeholder="Add description"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm ">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
