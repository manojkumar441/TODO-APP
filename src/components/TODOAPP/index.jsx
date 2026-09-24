import './index.css'
import {useState} from 'react'
const TODOAPP =()=>{
    const [input, setinput] = useState('')
    const [task, settask] = useState([])
    
    const TrigerInput = (event) =>{
        setinput(event.target.value)
    }
   const taskAdd =()=>{
    settask([...task, input])
    setinput('')
    
   }
   
    return(
        <div className='main-container'>
            <div className='main-card'>
                <h1 className='heading'>TODO List</h1>
                <p className='description'>stay organized, get things done!</p>
                <div className='inputelements'>
                    <input onChange={TrigerInput} value={input} placeholder='Add Your Task... '/>
                    <button onClick={taskAdd} className='btn'>Add</button>
                </div>
                <div >
                    {task.map((each)=>(
                        <p className='task'>{each}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TODOAPP