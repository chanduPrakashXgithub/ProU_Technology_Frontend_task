import React from "react";

export default function Navbar({ theme, toggleTheme }) {
    const resetData = () => {
        if (window.confirm('Reset local data to the original mock-data.json? This will clear your local changes.')) {
            window.localStorage.removeItem('employeeData');
            window.location.reload();
        }
    };

    return (
        <nav className={`navbar mb-4 py-2`}>
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <span className="brand">Employee Task Tracker</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-sm auth-btn">Login</button>
                    <button className="btn btn-sm auth-btn">Register</button>
                    <button className="btn btn-sm reset-btn" onClick={resetData} aria-label="Reset data">Reset Data</button>
                    <button
                        className="btn btn-sm theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>
            </div>
        </nav>
    );
}
