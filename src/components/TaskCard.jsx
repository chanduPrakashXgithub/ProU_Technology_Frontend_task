export default function TaskCard({ task }) {
    const statusColors = {
        Pending: '#ff9f1c',
        'In Progress': '#0d6efd',
        Completed: '#28a745'
    };

    return (
        <div className="task-card py-2 mb-2 fade-in hover-scale d-flex align-items-center justify-content-between">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <strong>{task.title}</strong>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    className="status-pill"
                    style={{ background: statusColors[task.status] || 'var(--primary)', color: '#fff' }}
                >
                    {task.status}
                </div>
            </div>
        </div>
    );
}
