import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const Todo = () => {
    const [tasks, setTasks] = useState([{ id: 1, desc: "fixed task" }]);
    const [input, setInput] = useState("");
    const uuid = uuidv4();

    const handleClick = () => {
        const newTask = { id: uuid, desc: input };
        setTasks([...tasks, newTask]);
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            const newTask = { id: uuid, desc: input };
            setTasks([...tasks, newTask]);
            setInput("");
        }
    };

    const handleDelete = (id) => {
        const filtredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filtredTasks);
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
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.desc}
                            <button
                                onClick={() => {
                                    handleDelete(task.id);
                                }}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ol>
            <button onClick={handleClick}>Add ToDo task</button>
        </>
    );
};

export default Todo;
