import "./AddUser.css"

const AddUser = ({onAdd}) => {
  
  const handleOnSubmit = (e) => {
      e.preventDefault()
      onAdd(e.target.name.value, e.target.email.value)
      e.target.name.value = ""
      e.target.email.value = ""
  }
  
  return (
    <div className="form">
        <form onSubmit={handleOnSubmit}>
            <h2>Add User</h2>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <button onSubmit={handleOnSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddUser