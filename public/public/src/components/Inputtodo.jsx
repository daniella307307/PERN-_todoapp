import React, { Fragment, useState } from 'react';
const Inputtodo = () => {
    const [description, setDescription] = useState('');
    const onSubmitForm= async(e)=>{
        e.preventDefault(); 
        try {
          const body={description};
          const response =await fetch('http://localhost:5000/todos',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(body)
          });
          window.location="/"
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className='text-center m-5'>Pern Todo List</h1>
            <form className='d-flex m-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default Inputtodo;