import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();//prevent page reload
        if(!title||!desc){
            alert("Title or Desc Missing");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container">
            <h3 className='text-center'>Add a Todo </h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter todo"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Password</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Description"/>
                </div>
                
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
