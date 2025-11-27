# Employee Task Tracker

A small React application for tracking employee tasks. Built with Create React App and Bootstrap. The UI supports light/dark themes, task filtering, adding tasks, and local persistence using `localStorage`.

Live Demo
---------

Try the live demo deployed on Vercel:

- Live demo: https://pro-u-technology-frontend-task.vercel.app/

**Status:** Prototype / Frontend demo

**Main files**
- `src/App.jsx` — top-level app, state and data loading.
- `public/mock-data.json` — initial data used on first run.
- `src/components/` — UI components: `Navbar`, `Dashboard`, `FilterBar`, `EmployeeList`, `TaskCard`, `AddTaskModal`.
- `src/index.css` — theme variables and global styling.
- `src/styles/animations.css` — small animations used across the UI.
- `src/hooks/useLocalStorage.js` — small hook used for persisting state in `localStorage`.

**Features**
- Theme toggle (Light / Dark) with persistence.
- Dashboard summary with animated stats cards.
- Filter tasks by status using a select control.
- Add tasks via modal.
- Tasks show a colored status pill (Pending / In Progress / Completed).
- Local persistence: user changes are saved to `localStorage`.
- Reset Data button in the Navbar to restore the original `mock-data.json` content.

Getting started
----------------

Requirements
- Node.js (14+ recommended) and npm installed.

Install dependencies

```powershell
cd `path\to\employee-task-tracker`
npm install
```

Run the app (development)

```powershell
npm run dev
# or
npm start
```

Open `http://localhost:3000` in the browser to view the app.

Available npm scripts
- `start` — start development server (uses `react-scripts start`).
- `dev` — alias for `start` (added convenience).
- `build` — production build.
- `test` — run tests.

Data and local persistence
--------------------------
On first run the app loads employee data from `public/mock-data.json` and writes it to `localStorage` under the key `employeeData` so any edits persist across refreshes.

If you edit `public/mock-data.json` and don't see changes in the app, it's because `localStorage` is taking precedence. To see changes:

- Option A — Use the Reset button in the Navbar (clears `employeeData` and reloads). This is the simplest way.
- Option B — Clear from the browser DevTools Console and reload:

```javascript
window.localStorage.removeItem('employeeData');
window.location.reload();
```

Theme and styling
-----------------
The app uses CSS variables for theming. Theme is applied by setting `data-theme="dark"` on the root element and persisted using the same `useLocalStorage` hook under the key `theme`.

If you want to tweak the colors or the dark-mode border accents, edit `src/index.css` and adjust the `:root` and `:root[data-theme="dark"]` variables such as `--primary`, `--card-border`, and `--nav-bg`.

Components overview
-------------------
- `Navbar.jsx`: contains theme toggle, `Login`/`Register` placeholders, and the `Reset Data` button.
- `Dashboard.jsx`: shows totals and completion percent with styled cards.
- `FilterBar.jsx`: a select control to filter tasks by status.
- `EmployeeList.jsx`: maps employees to card layouts and renders `TaskCard` components.
- `TaskCard.jsx`: shows task title and a colored status pill. (Edit/delete controls were removed in the current UI per design.)
- `AddTaskModal.jsx`: modal to create a new task for the selected employee.

Extending or changing behavior
-----------------------------
- To enable server-backed persistence instead of `localStorage`, replace `useLocalStorage` usage in `App.jsx` with API calls (fetch/axios), and remove the local persistence hook.
- To reintroduce task-editing or delete features, modify `TaskCard.jsx` and wire callbacks to `App.jsx` (`updateTask`, `deleteTask` helpers exist or can be added).

Troubleshooting
---------------
- ESLint complaining about use of `location` or `event`: the code uses `window.location` and `window.localStorage` to avoid `no-restricted-globals` issues.
- Modal not opening/closing: ensure `bootstrap/dist/js/bootstrap.bundle.min.js` is imported in `src/index.js` (it is imported by default in the project).
- New data in `mock-data.json` not appearing: clear `employeeData` from localStorage or use the Reset button in the navbar.

Development notes
-----------------
- The project was bootstrapped with Create React App and uses Bootstrap for basic layout and classes. Most styling is customized in `src/index.css` and `src/styles/animations.css`.
- The app attempts to preserve a simple, theme-aware design using CSS variables and should work across modern browsers.

Contribution
------------
Feel free to open issues or submit PRs. If you'd like help implementing server persistence, unit tests, or improving accessibility (keyboard/aria), I can help scaffold those changes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
