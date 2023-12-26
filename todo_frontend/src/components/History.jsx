import React from 'react'
import { useState, useEffect  } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"



function History() {
  let [data, setData] = useState([])
  // let [error, setError] = useState('')
  let navigate = useNavigate()

  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/history')
    .then((e)=>{
      setData(e.data)
    })
  },[])


  const clearData = () =>{
    navigate('/confirm')
  }


  const taskDelete = (id) =>{
    setData(data.filter(t => t.id != id))
    axios.delete(`http://127.0.0.1:8000/api/history/${id}`)
    window.location.assign('/history')
  }


  const restore = (id)=>{
    axios.post(`http://127.0.0.1:8000/api/history/task/${id}`)
    taskDelete(id)
  }
  
  return(
  <div className='t-container'>
        {data.length > 0 && (
        <div className='clear'>
          <button onClick={clearData}>Clear All</button>
        </div>
      )}

      { data.map((task)=>{
        if(task.complete == false){
          return(
            <div className='taskincom' key={task.id}>
              <div className='info'>
                  <h4>{task.title}</h4>
                  <li>{task.desc}</li>
              </div>
              <div className="actions">
                <i onClick={()=>{restore(task.id)}} className="fa-solid fa-trash-can-arrow-up fa-2x rest"></i>
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
              <div className="histo actions">
                <i onClick={()=>{restore(task.id)}} className="fa-solid fa-trash-can-arrow-up fa-2x rest"></i>
                <i onClick={()=>{taskDelete(task.id)}} className="fa-solid fa-trash fa-2x del"></i>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default History