import React, { useState, useContext } from "react";
function Todo() {
    const [tasks, setTasks] = useState(["eat", "sleep"]);
    const [newTask, setNewTask] = useState("");

    document.title = "My  Todo List"

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(event) {

        if (newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask]);
            setNewTask("")
        }


    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    function delTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }


    return (
        <>
            <h1>TO DO LIST</h1>
            <div className="todolist">
                <input type="text" value={newTask} onChange={handleInputChange} onKeyPress={handleKeyPress} className="text" />
                <button className="add" onClick={addTask}>Add</button>
                <ol className="list">
                    {tasks.map((tasks, index) =>
                        <li key={index}>
                            <span>{tasks}</span>
                            <button onClick={() => delTask(index)} className="button">Delete</button>
                            <button onClick={() => moveUp(index)} className="button">Move up</button>
                            <button onClick={() => moveDown(index)} className="button">Move Down</button>
                        </li>


                    )}

                </ol>

            </div>

        </>
    )
}
export default Todo;