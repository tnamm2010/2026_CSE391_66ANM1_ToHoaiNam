import React, { useState, useEffect } from "react";
import RoomForm from "./components/RoomForm";
import RoomList from "./components/RoomList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialRooms } from "./data";

function App() {
  const [rooms, setRooms] = useState(initialRooms);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("phongLab", JSON.stringify(rooms));
  }, [rooms]);

  const themPhong = (phong) => {
    setRooms([...rooms, phong]);
  };

  const xulyTimKiem = (e) => {
    setSearchTerm(e.target.value);
  };
  const xulySubmit = (e) => {
  e.preventDefault();
  const validation = validateForm(phongMoi);
  if (!Object.keys(validation).length) {
    themPhong(phongMoi); // Lưu dữ liệu vào state của parent component
    localStorage.setItem('room', JSON.stringify(phongMoi)); // Lưu dữ liệu vào localStorage
    onClose();
  } else {
    setErrors(validation);
  }
};

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark px-3 shadow mb-4 d-flex justify-content-between align-items-center">
        <span className="navbar-brand">LapMap</span>
        <form className="d-flex">
          <input
            type="search"
            placeholder="Find a lab..."
            value={searchTerm}
            onChange={xulyTimKiem}
            className="form-control me-2"
          />
        </form>
      </nav>

      <div className="container">
        <h3 className="text-primary mt-4">Computer Labs</h3>
        <button className="btn btn-success shadow-sm mb-4" onClick={() => setShowForm(true)}>
          + Add room
        </button>

        {showForm && (
          <RoomForm rooms={rooms} themPhong={themPhong} onClose={() => setShowForm(false)} />
        )}

        <div className="card shadow-sm">
          <RoomList rooms={rooms} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default App;
