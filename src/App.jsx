import { useEffect, useState } from "react";
import EmployeeList from "./components/EmployeeList";
import Dashboard from "./components/Dashboard";
import FilterBar from "./components/FilterBar";
import AddTaskModal from "./components/AddTaskModal";
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [data, setData] = useLocalStorage("employeeData", []);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "light");
  }, [theme]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then(res => res.json())
      .then(json => {
        if (data.length === 0) setData(json.employees);
      });
  }, []);

  const addTask = (employeeId, newTask) => {
    setData(prev =>
      prev.map(emp =>
        emp.id === employeeId
          ? { ...emp, tasks: [...emp.tasks, newTask] }
          : emp
      )
    );
  };

  const updateTask = (employeeId, taskId, updates) => {
    setData(prev =>
      prev.map(emp =>
        emp.id === employeeId
          ? {
            ...emp,
            tasks: emp.tasks.map(t => (t.id === taskId ? { ...t, ...updates } : t)),
          }
          : emp
      )
    );
  };

  const deleteTask = (employeeId, taskId) => {
    setData(prev =>
      prev.map(emp =>
        emp.id === employeeId
          ? { ...emp, tasks: emp.tasks.filter(t => t.id !== taskId) }
          : emp
      )
    );
  };

  return (
    <div className="container py-4">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Dashboard employees={data} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <EmployeeList employees={data} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} filter={filter} />
      <AddTaskModal addTask={addTask} />
    </div>
  );
}

export default App;
