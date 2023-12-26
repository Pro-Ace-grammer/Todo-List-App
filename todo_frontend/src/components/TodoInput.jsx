import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TodoInput() {

    let [title,setTitle] = useState('')
    let [desc, setDesc] = useState('')

    let tname=(e)=>{
        setTitle(e.target.value)
    }

    let dess=(e)=>{
        setDesc(e.target.value)
    }

    let navigate = useNavigate()
    let formHandle=()=>{
        let payload = {
            title:title,
            desc:desc
        }
        if(title != '' && desc != ''){
            axios.post('http://127.0.0.1:8000/api/todo',payload)
            navigate('/')
        }
    }

  return (
    <div className='inputContainer'>
        <form action="">
            <div className="title">
                <label htmlFor="title">Task :</label>
                <input type="text" name="title" required placeholder='Add task...' onChange={tname}/>
            </div>
            <div className="desc">
                <label htmlFor="desc">Description :</label>
                <input type="text" name="desc" required placeholder='Add description...' onChange={dess}/>
            </div>
            <div className="but">
                <button onClick={formHandle}>+</button>
            </div>
        </form>
    </div>
  )
}

export default TodoInput