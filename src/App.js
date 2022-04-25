import {useState, useEffect} from "react"
import './App.css';
import User from "./components/User";

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
      <h1 className="title">React Crud Using Jsonplaceholder</h1>
      {user.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
