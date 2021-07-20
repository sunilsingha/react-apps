import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const saveTask = (e) => {
    e.preventDefault();
    if (!text) {
      alert("No Task to add!");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="frm-addtask" onSubmit={saveTask}>
      <div className="frm-addtask-ctrl">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="frm-addtask-ctrl">
        <label htmlFor="">Day</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="frm-addtask-ctrl reminder">
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save" />
    </form>
  );
};

export default AddTask;
