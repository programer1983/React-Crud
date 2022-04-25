import {useState, useEffect} from "react"
import './App.css';
import AddUser from "./components/AddUser";
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

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((res) => {
      if(res.status !== 201){
        return
      }else{
        return res.json()
      }
    })
    .then((data) => {
      setUser((user) => [...user, data])
    })
    .catch((err) => {
      console.log(err)
    })
  }


  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if(res.status !== 200){
        return
      }else{
        setUser(user.filter((u) => u.id !== id))
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(user)


  return (
    <div className="App">
      <h1 className="title">React Crud Using Jsonplaceholder</h1>
      <AddUser onAdd={onAdd} />
      <hr />
      <div>
         {user.map((user) => (
            <User key={user.id} {...user} onDelete={onDelete} />
         ))}
      </div>
    </div>
  );
}

export default App;
