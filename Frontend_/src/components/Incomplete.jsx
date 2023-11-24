import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function Incomplete() {
  let [data,setData] = useState([])
  let navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/todo')
    .then((e)=>{
        setData(e.data)
      })
  },[])
  
  
  const taskDone = (id) => {
    // Make a PATCH request to update the task status
    axios.patch(`http://127.0.0.1:8000/api/todos/${id}`, { complete: true })
      .then(() => {
        // Update the data in state directly without fetching again
        setData((prevData) => {
          return prevData.map((task) =>
            task.id === id ? { ...task, complete: true } : task
          );
        });
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
    window.location.assign('/incomplete')

  };


  const delet = (id) =>{
    setData(data.filter(t => t.id != id))
    axios.delete(`http://127.0.0.1:8000/api/todos/${id}`)
    window.location.assign('/complete')
  }


  const taskDelete = (id) => {
    axios.post(`http://127.0.0.1:8000/api/history/${id}`,)
    delet(id)
  }
  
  
  return (
    <div className='t-container'>
      { data.map((task)=>{
        if(task.complete == false){
          return(
            <div className='taskincom' key={task.id}>
              <div className='info'>
                  <h4>{task.title}</h4>
                  <li>{task.desc}</li>
              </div>
              <div className="actions">
                <i onClick={()=>{taskDone(task.id)}} className="fa-regular fa-circle-check fa-2x tick"></i>
                <i onClick={()=>{taskDelete(task.id)}} className="fa-solid fa-trash fa-2x del"></i>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Incomplete






// Spare COde
  // const taskDone=(id)=>{
  //   let payload = { complete : true }
  //   axios.patch(`http://127.0.0.1:8000/api/todos/${id}`,payload)
  //   .then((res)=>{
  //     navigate('/incomplete')
  //   })
  //   .catch((e)=>{
  //     console.log('error eyloo maree',e)
  //   })
  // }


  // const taskDone = (id) => {
  //   axios.patch(`http://127.0.0.1:8000/api/todos/${id}`, { complete: true })
  //   .catch((error) => {
  //     console.error('Error updating task:', error);
  //   });
  //   window.location.assign('/incomplete')
  // };

    // const taskDelete = (id) => {
    //   setData(data.filter(t => t.id != id)) //it will remove the element inspite of error and it will be back when refreshed 
    //   // basically there will be no changes in the database if the request is wrong or end point
    //   // so to handle it we do this 
    //   const originalData = [...data]
    //   axios.delete(`http://127.0.0.1:8000/api/todos/${id}`)
    //   .catch((e)=>{
    //     setData(originalData)
    //     setError(e.message)
    //   })
    //   // window.location.assign('/incomplete')
    // }