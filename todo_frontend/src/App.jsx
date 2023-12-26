import TodoFilter from "./components/TodoFilter"
import TodoInput from "./components/TodoInput"
import AllTasks from "./components/AllTasks"
import Incomplete from "./components/Incomplete"
import Completed from "./components/Completed"
import History from "./components/History"
import Confirm from "./components/Confirm"
import { BrowserRouter, Routes, Route } from 'react-router-dom'




const App = ()=>{
    return(
        <div className="container">
            <h1>My Todos</h1>
            <div className="content">
            <BrowserRouter>
            <TodoInput></TodoInput>
            <hr />
            <TodoFilter></TodoFilter>
                <Routes>
                    <Route element={<AllTasks />} path='/'></Route>
                    <Route element={<Completed />} path='/complete'></Route>
                    <Route element={<Incomplete />} path='/incomplete'></Route>
                    <Route element={<History />} path='/history'></Route>
                    <Route element={<Confirm />} path='/confirm'></Route>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App