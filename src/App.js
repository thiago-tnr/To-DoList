import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

const [tasks, setTasks] = useState([]);
const [modal, setModal] = useState(false);
const [newTask, setNewTask] = useState('');

 const handleTask = (e) => {
    setNewTask(e.target.value);
 }

const savetasks = () => {
  setTasks([...tasks,
  { id: Math.floor(Math.random()*100),
    task:newTask,
    done:false
    }
  ]);
  clear();
  setModal(false);
};

const clear = () =>{
  setNewTask('')
}

const openModal = () =>{
  setModal(!modal)
}


const toDone = (id) => {
  let riskTask = tasks.filter(function(risk){
      if(risk.id == id){
        risk.done = true;
        return risk;
      }
  })
  setTasks(riskTask)
 };

  return (
    <div className="App">
      {
        modal &&
        <div className='modal'>
            <div className='open--modal'>
              <h3>O que vamos fazer ?</h3>
              <input value={newTask} onChange={handleTask} className='add--task' type='text'/>
              { newTask.length > 0 &&
                 <button onClick={savetasks}>Bora fazer</button>
              }
            </div>
        </div>
      }
        <div onClick={openModal} className='tasks-todo'>
          +
        </div>
        <div className='tasks'>
          <h2>Coisas para fazer</h2>
          {tasks.map((toDo, index)=>{
            if(toDo.done){
                return(
                  <p key={index} onClick={()=>toDone(toDo.id)} style={{textDecoration:'line-through'}}>{toDo.task}</p>
              );
             }else{
                return(
                  <p onClick={()=>toDone(toDo.id)}>{toDo.task}</p>
                );
          }
        })}
        </div>
    </div>
  );
}

export default App;
