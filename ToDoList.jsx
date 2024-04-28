import React,{useState} from 'react'

function ToDoList(){

    //array of new task
    const [tasks,setTask]=useState(["Eat Brwakfast","Take a shower","walk"]);
    //staet varible for taxt box
    const [newTask,setNewTask]=useState({});
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
        setTask(t=>[...tasks,newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
       // create new array of update task
        const updatedTasks=tasks.filter((_,i) => i!==index);
        setTask(updatedTasks);
    }
    function moveTaskup(index){
        if(index>0){
            const updatedTasks=[...tasks];
            //swap elemetns by bellow code
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            //swap elemetns by bellow code
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    return(<>
    <div className="to-do-list">
        <h1> TO-DO-LIST</h1>
        <div>
        <input type="text" placeholder="Enter you task..."
            value={newTask}
            onChange={handleInputChange}
        />
          <button className="add-button"
          onClick={addTask}>
            Add 
            </button>
         </div>
         <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                <sapn className="text">{task}</sapn>
                <button className="delete-button"
                onClick={()=>deleteTask(index)}>
                Delete
                </button>
                <button className="move-button"
                onClick={()=>moveTaskup(index)}>
                up
                </button>
                <button className="move-button"
                onClick={()=>moveTaskDown(index)}>
                down
                </button>
              
        </li>)}
         </ol>
    </div>
    </>);
}


export default ToDoList;