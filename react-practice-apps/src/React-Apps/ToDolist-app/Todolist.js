import React from "react";
import tasks from "./myTasks";
import Task from "./components/Task";
import "./Todolist.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import { Link } from "react-router-dom";

const Todolist = () => {
  // useState will allow to modify and tell the UI that there is a change done and it shoudl render them.
  const [Tasks, setTasks] = useState(tasks);

  //   Delete Task
  const deleteTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  //   Toggle task
  const toggleTask = (id) => {
    setTasks(
      Tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //   Add Task
  const addTask = (data) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...data };

    setTasks([...Tasks, newTask]);
  };

  const [showAddTask, setShowAddTask] = useState(false);

  const onShowAddTask = (e) => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="todolist">
      <div className="todolist-header">
        <Link to="/">&lt;Goback</Link>
        <h1>Task Tracker</h1>
        <button
          style={{ backgroundColor: showAddTask ? "red" : "green" }}
          onClick={onShowAddTask}
          className="btn"
        >
          {showAddTask ? "Close" : "Add"}
        </button>
      </div>

      {showAddTask && <AddTask onAdd={addTask} />}

      {/* If not task display message */}
      {Tasks.length > 0 ? (
        Tasks.map((task) => (
          <Task
            onToggle={toggleTask}
            onDelete={deleteTask}
            key={task.id}
            task={task}
          />
        ))
      ) : (
        <h3>No tasks to show!</h3>
      )}
    </div>
  );
};

export default Todolist;
