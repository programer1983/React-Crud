import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUser(data))
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(user)


  return (
    <div className="App">
      <h3>React Crud Using Jsonplaceholder</h3>
    </div>
  );
}

export default App;
