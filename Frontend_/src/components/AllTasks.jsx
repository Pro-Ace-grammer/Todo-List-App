import React from 'react'
import { useState, useEffect  } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function AllTasks() {
  let [data, setData] = useState([])
  let [error, setError] = useState('')
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
    window.location.assign('/')

  };

  const taskRedo = (id) => {
    // Make a PATCH request to update the task status
    axios.patch(`http://127.0.0.1:8000/api/todo/redo/${id}`, { complete: false })
      .then(() => {
        // Update the data in state directly without fetching again
        setData((prevData) => {
          return prevData.map((task) =>
            task.id === id ? { ...task, complete: false } : task
          );
        });
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
    window.location.assign('/')

  };




  const delet = (id) =>{
    setData(data.filter(t => t.id != id))
    axios.delete(`http://127.0.0.1:8000/api/todos/${id}`)
    window.location.assign('/')
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
        if(task.complete == true){
          return(
            <div className='taskcom' key={task.id}>
              <div className='info'>
                  <h4><strike>{task.title}</strike></h4>
                  <li><strike>{task.desc}</strike></li>
              </div>
              <div className="actions">
                <i onClick={()=>{taskRedo(task.id)}} class="fa-solid fa-rotate-left fa-2x redo"></i>
                <i onClick={()=>{taskDelete(task.id)}} className="fa-solid fa-trash fa-2x del"></i>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default AllTasks
  





// Spare Code
    // const taskDone=(id)=>{
    //   axios.patch(`http://127.0.0.1:8000/api/todos/${id}`,{ complete : true})
    //   .catch((e)=>{
    //     console.log(e)
    //   })
    //   window.location.assign('/')
    // }