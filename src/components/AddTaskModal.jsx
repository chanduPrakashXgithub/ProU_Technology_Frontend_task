import { useState } from "react";

export default function AddTaskModal({ addTask }) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = () => {
        const empId = Number(localStorage.getItem("task-add-emp-id"));

        addTask(empId, {
            id: Date.now(),
            title,
            status
        });

        // reset inputs
        setTitle("");
        setStatus("Pending");

        // hide bootstrap modal if available
        try {
            const modalEl = document.getElementById('taskModal');
            if (modalEl) {
                const bs = window.bootstrap;
                if (bs && bs.Modal) {
                    const inst = bs.Modal.getInstance(modalEl) || new bs.Modal(modalEl);
                    inst.hide();
                }
            }
        } catch (e) {
            // ignore if hide fails
        }
    };

    return (
        <div className="modal fade" id="taskModal">
            <div className="modal-dialog">
                <div className="modal-content p-3">
                    <h5>Add Task</h5>

                    <input
                        className="form-control my-2"
                        placeholder="Task title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <select
                        className="form-control mb-3"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>

                    <button className="btn btn-success" onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
