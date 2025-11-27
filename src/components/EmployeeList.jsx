import TaskCard from "./TaskCard";

export default function EmployeeList({ employees, addTask, updateTask, deleteTask, filter }) {

    return (
        <div className="row mt-4 fade-in">
            {employees.map(emp => (
                <div key={emp.id} className="col-md-6 mb-4">
                    <div className="card p-3 shadow-sm hover-scale">
                        <h5>{emp.name}</h5>
                        <small className="text-muted">{emp.role}</small>

                        <div className="mt-3">
                            {emp.tasks
                                .filter(t => filter === "All" || t.status === filter)
                                .map(task => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        onUpdate={(updates) => updateTask(emp.id, task.id, updates)}
                                        onDelete={() => deleteTask(emp.id, task.id)}
                                    />
                                ))}
                        </div>

                        <button
                            className="btn btn-primary btn-sm mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#taskModal"
                            onClick={() =>
                                localStorage.setItem("task-add-emp-id", emp.id)
                            }
                        >
                            + Add Task
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
