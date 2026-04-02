import React, { useState, useEffect } from "react";
import RoomForm from "./components/RoomForm";
import RoomList from "./components/RoomList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialRooms } from "./data";

function App() {
  // Ưu tiên lấy dữ liệu từ LocalStorage, nếu không có thì lấy initialRooms
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem("phongLab");
    return saved ? JSON.parse(saved) : initialRooms;
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("phongLab", JSON.stringify(rooms));
  }, [rooms]);

  const themPhong = (phong) => {
    setRooms([...rooms, phong]);
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark px-3 shadow mb-4 d-flex justify-content-between align-items-center">
        <span className="navbar-brand">LapMap System</span>
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search room or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
      </nav>

      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
          <h3 className="text-primary m-0">Computer Labs Management</h3>
          <button className="btn btn-success shadow-sm" onClick={() => setShowForm(true)}>
            + Add New Room
          </button>
        </div>

        {showForm && (
          <RoomForm rooms={rooms} themPhong={themPhong} onClose={() => setShowForm(false)} />
        )}

        <div className="card shadow-sm border-0">
          <RoomList rooms={rooms} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default App;