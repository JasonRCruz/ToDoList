// Importing React and useState hook from the 'react' library
import React, {useState} from 'react'

// Functional component for a ToDoList
function ToDoList () {
    // Using the useState hook to manage tasks state as an empty array
    const [tasks, setTasks] = useState ([]);
    // Using the useState hook to manage newTask state as an empty string
    const [newTask, setNewTask] = useState("");
    
    // Function to handle input change and update newTask state
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task to the tasks array
    function addTask(index) {
        // Checking if newTask is not empty
        if(newTask.trim() !== ""){
            // Updating tasks state by adding newTask to the existing tasks array
            setTasks(t =>[...tasks, newTask]);
            // Resetting newTask state to an empty string
            setNewTask("");
        }
    }

    // Function to delete a task from the tasks array based on its index
    function deleteTask(index){
        // Filtering out the task with the given index from the tasks array
        const updatedTasks = tasks.filter((element, i) => i !== index);
        // Updating tasks state with the filtered array
        setTasks(updatedTasks);
    }

    // Function to move a task up in the tasks array based on its index
    function moveTaskup(index) {
        // Checking if the task is not already at the top
        if(index > 0){
            // Creating a copy of the tasks array
            const updatedTasks = [...tasks];
            // Swapping the task with the one above it
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            // Updating tasks state with the modified array
            setTasks(updatedTasks);
        }
    }

    // Function to move a task down in the tasks array based on its index
    function moveTaskDown(index) {
        // Checking if the task is not already at the bottom
        if (index < tasks.length -1){        
            // Creating a copy of the tasks array
            const updatedTasks = [...tasks];
            // Swapping the task with the one below it
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            // Updating tasks state with the modified array
            setTasks(updatedTasks);
        }
    }

    // JSX for rendering the ToDoList component
    return(
    <div className = "to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input
                  type = "text"
                    placeholder = "Enter a task..."
                    value = {newTask}
                    onChange= {handleInputChange}/>
                <button
                className = "add-button"
                onClick= {addTask}>
                    Add
                </button>

        </div>
        <ol>
            {/* Mapping over the tasks array to display each task */}
            {tasks.map((task, index) => 
            <li key= {index}>
                <span className= "text"> {task}</span>
                {/* Button to delete a task */}
                <button
                    className= "delete-button"
                    onClick= {() => deleteTask(index)}>
                    Delete
                </button>
                {/* Button to move a task up */}
                <button
                    className= "move-button"
                    onClick= {() => moveTaskup(index)}>
                    up
                </button>
                {/* Button to move a task down */}
                <button
                    className= "move-button"
                    onClick= {() => moveTaskDown(index)}>
                    down
                </button>
                </li>)}

        </ol>
    </div>);

}
// Exporting the ToDoList component as the default export
export default ToDoList

