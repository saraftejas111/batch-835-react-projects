import './App.css'

function App() {

  let name = "Tejas Saraf"

  let loggedIn = false;

  let a = 10;
  let b = 2;

  return (
    <>
      <h1>Welcome to my React App.. {name}</h1>

      <h1>{loggedIn ? "Login Success" : "Login Failed"}</h1>

      <h2>Sum = {a + b}</h2>
      <h2>Diff = {a - b}</h2>
      <h2>Multiply = {a * b}</h2>
      <h2>Div = {a / b}</h2>
      <h2>Mod = {a % b}</h2>
      <h2>Incr a = {++a}</h2>

    </>
  )
}

export default App

// ------------ JSX ------------
// Javascript xml : we can write javascript code into html 
// and can directly access js variables into html