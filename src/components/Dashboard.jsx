export default function Dashboard({ employees }) {
    const allTasks = employees.flatMap(e => e.tasks || []);
    const total = allTasks.length;
    const completed = allTasks.filter(t => t.status === "Completed").length;
    const percent = total ? Math.round((completed / total) * 100) : 0;

    const ringStyle = {
        background: `conic-gradient(var(--primary) ${percent}%, rgba(255,255,255,0.06) ${percent}%)`,
    };

    return (
        <div className="p-3 rounded fade-in" style={{ background: 'transparent' }}>
            <h3 className="mb-3">Dashboard Summary</h3>

            <div className="stats-row">
                <div className="stats-card">
                    <div className="stats-icon">📋</div>
                    <div className="stats-body">
                        <p className="stats-title">Total Tasks</p>
                        <p className="stats-value">{total}</p>
                    </div>
                </div>

                <div className="stats-card">
                    <div className="stats-icon">✅</div>
                    <div className="stats-body">
                        <p className="stats-title">Completed</p>
                        <p className="stats-value">{completed}</p>
                    </div>
                </div>

                <div className="stats-card">
                    <div className="stats-icon progress-ring" style={ringStyle}>{percent}%</div>
                    <div className="stats-body">
                        <p className="stats-title">Completion</p>
                        <p className="stats-value">{percent}% <span style={{ fontSize: '.9rem', marginLeft: 8 }}>⏱️</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
