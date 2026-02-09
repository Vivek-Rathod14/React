import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const FormSubmit = (e) => {
    e.preventDefault();

    setData(prev => [
      ...prev,
      {
        name: e.target.name.value,
        email: e.target.email.value,
        age: e.target.age.value,
        star: e.target.star.value,
        desc: e.target.desc.value,
      }
    ]);

    e.target.reset();
  };

  const DataDelete = (index) => {
    setData(prev => [
      ...prev.slice(0, index)
    ])
  };

  return (
    <>
      <div className="app">
        <h1>Feedback Form</h1>

        <form className="form" onSubmit={FormSubmit}>
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Age</label>
          <input type="number" name="age" required min={1} max={100} />

          <label>Rating</label>
          <select name="star" required>
            <option value="">Select</option>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>

          <label>Description</label>
          <textarea name="desc"></textarea>

          <button type="submit">Submit</button>
        </form>

        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>Submitted Data</h2>
            <p><span>Name:</span> {item.name}</p>
            <p><span>Email:</span> {item.email}</p>
            <p><span>Age:</span> {item.age}</p>
            <p><span>Rating:</span> {item.star}</p>
            <p><span>Description:</span> {item.desc}</p>
            <button onClick={() => DataDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );

}

export default App
