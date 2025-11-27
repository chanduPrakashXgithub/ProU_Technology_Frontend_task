export default function FilterBar({ filter = "All", setFilter }) {
    const options = ["All", "Pending", "In Progress", "Completed"];

    return (
        <div className="filterbar mb-3 fade-in">
            <label className="form-label me-2" htmlFor="task-filter">Filter:</label>
            <select
                id="task-filter"
                className="form-select form-select-sm d-inline-block w-auto"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}
