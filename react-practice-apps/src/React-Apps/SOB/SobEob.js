import React, { useState } from "react";
import "./SobEob.css";

const SobEob = () => {
  const [user, setUser] = useState("");
  const [daytime, setDaytime] = useState("");
  const [wfh, setWfh] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [project, setProject] = useState("");
  const [taskDetail, setTaskDetail] = useState("");

  const addTask = (e) => {
    if (!project || !user || !daytime) {
      alert("Input all the details!");
      return;
    }

    let newTask = {
      project: project,
      task: taskDetail,
    };

    setTasks([...tasks, newTask]);

    setProject("");
    setTaskDetail("");
  };

  return (
    <div className="sobeob">
      <h1>SOB EOB Tasks</h1>
      <div className="sobeob-container">
        <div>
          {/* Add Task  */}
          <div className="sobeob-container-add-task">
            <div className="add-task-header">
              <h3>Task Detail</h3>
              <button className="btn">View</button>
            </div>

            <div className="sobeob-container-ctl">
              <label htmlFor="">Project</label>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>

            <div className="sobeob-container-ctl">
              <label htmlFor="">Task Details</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                value={taskDetail}
                onChange={(e) => setTaskDetail(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-task-save" onClick={addTask}>
              Add to task
            </button>
          </div>
        </div>

        <div className="sobeob-userdetial">
          {/* User Name */}
          <div className="sobeob-container-ctl udetail">
            <label htmlFor="">UserName</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          {/* Current Date and Time */}
          <div className="sobeob-container-ctl udetail">
            <label htmlFor="">Sob Time</label>
            <input
              type="text"
              value={daytime}
              onChange={(e) => setDaytime(e.target.daytime)}
            />
          </div>

          {/* WFH */}
          <div className="sobeob-container-ctl udetail">
            <label htmlFor="">Working from Home</label>
            <select value={wfh} onChange={(e) => setWfh(e.target.value)}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobEob;
