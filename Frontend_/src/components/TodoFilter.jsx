import { Link } from 'react-router-dom'

function TodoFilter() {
  return (
    <div className="filter">
      <p>Filter: </p>
      {/* <a href="#">Todo</a>
      <a href="#">Completed</a>
      <a href="#">All Tasks</a> */}
      <Link id='allt' to='/'>All Tasks</Link>
      <Link id='incomt' to='/incomplete'>Incomplete</Link>
      <Link id='comt' to='/complete'>Completed</Link>
      <Link id='hist' to='/history'>History</Link>
    </div>
  )
}

export default TodoFilter