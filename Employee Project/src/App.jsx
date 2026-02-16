import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [FormData, setFormData] = useState({
    Ename: "",
    Eid: "",
    Ework: "",
    email: "",
    phone: "",
    img: "",
  })
  const [user, setUser] = useState([])
  useEffect(() => {
    const ShowData = JSON.parse(localStorage.getItem("user")) || [];
    setUser(ShowData);
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmploye = {
      ...FormData,
      id: Date.now()
    }

    const oldData = JSON.parse(localStorage.getItem("user")) || []
    const updatedData = [...oldData, newEmploye]
    localStorage.setItem("user", JSON.stringify(updatedData))

    setUser(updatedData)

  }

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({
      ...FormData,
      [name]: value,

    })
  }
  const deleteData = (id) => {
    const updatedUsers = user.filter((user)=>user.id != id)
    setUser(updatedUsers);
    localStorage.setItem("user", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="emp-form">
        <h1 className="form-title">Employee Form</h1>

        <div className="input-group">
          <input
            type="text"
            name="Ename"
            value={FormData.Ename}
            onChange={handleChange}
            required
          />
          <label>Employee Name</label>
        </div>

        <div className="input-group">
          <input
            type="number"
            name="Eid"
            value={FormData.Eid}
            onChange={handleChange}
            required
          />
          <label>Employee ID</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="Ework"
            value={FormData.Ework}
            onChange={handleChange}
            required
          />
          <label>Work Role</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="number"
            name="phone"
            value={FormData.phone}
            onChange={handleChange}
            required
          />
          <label>Phone</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="img"
            value={FormData.img}
            onChange={handleChange}
            required
          />
          <label>img</label>
        </div>

        <button type="submit" className="submit-btn">
          Save Employee
        </button>
      </form>


      <div className="card-container" >
        {user.map((value, index) => (
          <div className="emp-card" key={index}>
            <div className="card-header">
              <div className="avatar" style={{ overflow: "hidden", objectFit: "cover" }}>
                <img src={value.img} alt="" width={"60px"} /></div>
              <div>
                <h2>{value.Ename}</h2>
                <span className="role">{value.Ework}</span>
              </div>
            </div>

            <div className="card-body" style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
              <p><span>ID</span> {value.Eid}</p>
              <p><span>Email</span> {value.email}</p>
              <p><span>Phone</span> {value.phone}</p>
              <p><span><a href="" style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "10px" }} onClick={() => deleteData(value.id)} >Delete</a></span> </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
