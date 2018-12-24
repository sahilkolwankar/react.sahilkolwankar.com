// List of frameworks, compilers, and tools this project uses:
// 1. React
// 2. Yarn
// 3. Live Server package
// 4. Babel (To compile JSX into JavaScript).

console.log('App.js is running!');

var template = (
    <h1>My Premium Blog written in React.</h1>
);

var templateTwo = (
    <div>
        <h1>Sahil Vinayak Kolwankar</h1>
        <p>Age: 24</p>
        <p>Location: Binghamton, New York</p>
    </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render() takes 2 arguments.
// 1. The React element you wish to render.
// 2. The HTML element where you want your React element to render.
ReactDOM.render(templateTwo, appRoot);