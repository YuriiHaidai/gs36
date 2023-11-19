import { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleClick = () => {
        setTasks([...tasks, input]);
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    return (
        <>
            <h1>ToDo List</h1>
            <input
                placeholder="type new task"
                value={input}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            <p>Tasks: ({tasks.length})</p>
            <ol>
                {tasks.map((task, index) => {
                    return <li key={task + index}>{task}</li>;
                })}
            </ol>
            <button onClick={handleClick}>Add ToDo task</button>
        </>
    );
};

export default Todo;
