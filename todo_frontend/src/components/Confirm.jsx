import axios from 'axios'


function confirm() {

    // let [data, setData] = useState([])
    // let [error, setError] = useState('')

    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:8000/api/history')
    //     .then((e)=>{
    //       setData(e.data)
    //     })
    //   },[])
    
    
      const clearData = () =>{
        axios.delete(`http://127.0.0.1:8000/api/historyclear`)
        window.location.assign('/history')
      }

      const cancel=()=>{
        window.location.assign('/history')
      }


  return (
    <div className='confirm'>
        <div className="msg">
        <h4>Are you sure you want to delete?</h4>
        <h5>You will loose all you data...</h5>
        </div>
        <div className="btns">
            <div className="okay">
            <button onClick={clearData}>Confirm</button>
            </div>
            <div className="cancel">
            <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default confirm