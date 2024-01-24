import { useState } from 'react'
import './App.css'
import Cv from './components/Cv'
import Edu from './components/Edu'
import General from './components/General'
import Prac from './components/Prac'
function App() {
    const objInit = {
        name: 'Jhon Doe',
        email: 'jhondoe@email.com',
        phone: 123456789,
        eduArr: [],
        pracArr: [],
    }
    const [obj, setObj] = useState(objInit)
    return (
        <div className="main-container">
            <div className="forms">
                <General obj={obj} setObj={setObj} />
                <Edu obj={obj} setObj={setObj} />
                <Prac obj={obj} setObj={setObj} />
            </div>
            <Cv obj={obj} />
        </div>
    )
}

export default App
