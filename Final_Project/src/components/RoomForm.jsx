import React, { useState } from "react";

function RoomForm({ rooms, themPhong, onClose }) {
  const [phongMoi, setPhongMoi] = useState({
    tenPhong: "",
    maLop: "",
    soMayTinh: 0,
    nguoiQuanLi: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let errors = {};

    // Kiểm tra trống cho tất cả các trường
    if (!data.tenPhong.trim()) {
      errors.tenPhong = "Room Name is required.";
    }

    if (!data.maLop.trim()) {
      errors.maLop = "Class Code is required.";
    }

    if (!data.nguoiQuanLi.trim()) {
      errors.nguoiQuanLi = "Manager Name is required.";
    }

    // Kiểm tra số lượng máy tính (1-60)
    const count = parseInt(data.soMayTinh);
    if (isNaN(count) || count < 1 || count > 60) {
      errors.soMayTinh = "Number of computers must be between 1 and 60.";
    }

    // Kiểm tra định dạng Email và không được để trống
    const emailRegex = /\S+@\S+\.\S+/;
    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format.";
    }

    return errors;
  };

  const xulySubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(phongMoi);
    
    if (Object.keys(validationErrors).length === 0) {
      themPhong({ ...phongMoi, id: Date.now() });
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  const xulyChange = (e) => {
    const { name, value } = e.target;
    setPhongMoi({ ...phongMoi, [name]: value });
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg">
          <form onSubmit={xulySubmit}>
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add New Computer Lab</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              {/* TÊN PHÒNG */}
              <div className="mb-3">
                <label className="form-label fw-bold">Room Name</label>
                <input 
                  name="tenPhong"
                  className={`form-control ${errors.tenPhong ? 'is-invalid' : ''}`}
                  onChange={xulyChange}
                  value={phongMoi.tenPhong}
                />
                {errors.tenPhong && <div className="invalid-feedback">{errors.tenPhong}</div>}
              </div>

              {/* MÃ LỚP */}
              <div className="mb-3">
                <label className="form-label fw-bold">Class Code</label>
                <input 
                  name="maLop"
                  className={`form-control ${errors.maLop ? 'is-invalid' : ''}`}
                  onChange={xulyChange}
                  value={phongMoi.maLop}
                />
                {errors.maLop && <div className="invalid-feedback">{errors.maLop}</div>}
              </div>

              {/* SỐ MÁY TÍNH */}
              <div className="mb-3">
                <label className="form-label fw-bold">Number of Computers (1-60)</label>
                <input 
                  type="number"
                  name="soMayTinh"
                  className={`form-control ${errors.soMayTinh ? 'is-invalid' : ''}`}
                  onChange={xulyChange}
                  value={phongMoi.soMayTinh}
                />
                {errors.soMayTinh && <div className="invalid-feedback">{errors.soMayTinh}</div>}
              </div>

              {/* NGƯỜI QUẢN LÝ */}
              <div className="mb-3">
                <label className="form-label fw-bold">Manager</label>
                <input 
                  name="nguoiQuanLi"
                  className={`form-control ${errors.nguoiQuanLi ? 'is-invalid' : ''}`}
                  onChange={xulyChange}
                  value={phongMoi.nguoiQuanLi}
                />
                {errors.nguoiQuanLi && <div className="invalid-feedback">{errors.nguoiQuanLi}</div>}
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input 
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={xulyChange}
                  value={phongMoi.email}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Add Room</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomForm;