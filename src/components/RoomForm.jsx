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

  const xulySubmit = (e) => {
    e.preventDefault();
    const validation = validateForm(phongMoi);
    if (!Object.keys(validation).length) {
      themPhong(phongMoi);
      onClose();
    } else {
      setErrors(validation);
    }
  };

  const validateForm = (phongMoi) => {
    let errors = {};

    if (!phongMoi.tenPhong.trim()) {
      errors.tenPhong = "Tên Phòng không được để trống.";
    }

    if (!phongMoi.maLop.trim()) {
      errors.maLop = "Mã Lớp không được để trống.";
    }

    if (isNaN(phongMoi.soMayTinh) || phongMoi.soMayTinh < 0) {
      errors.soMayTinh = "Số Máy Tính phải là một số nguyên dương.";
    }

    if (!phongMoi.nguoiQuanLi.trim()) {
      errors.nguoiQuanLi = "Người Quản Lý không được để trống.";
    }

    if (!/\S+@\S+\.\S+/.test(phongMoi.email)) {
      errors.email = "Email không hợp lệ.";
    }

    return errors;
  };

  const xulyChange = (e) => {
    setPhongMoi({ ...phongMoi, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg">
          <form onSubmit={xulySubmit}>
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Thêm Phòng Lab</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              {/* TÊN PHÒNG */}
              <div className="mb-3">
                <label className="form-label fw-bold">Tên Phòng</label>
                <input 
                  className={`form-control ${errors.tenPhong ? 'is-invalid' : ''}`}
                  onChange={(e) => xulyChange(e)}
                  value={phongMoi.tenPhong}
                  name="tenPhong"
                />
                {errors.tenPhong && (
                  <div className="invalid-feedback">{errors.tenPhong}</div>
                )}
              </div>

              {/* MÃ LỚP */}
              <div className="mb-3">
                <label className="form-label fw-bold">Mã Lớp</label>
                <input 
                  className={`form-control ${errors.maLop ? 'is-invalid' : ''}`}
                  onChange={(e) => xulyChange(e)}
                  value={phongMoi.maLop}
                  name="maLop"
                />
                {errors.maLop && (
                  <div className="invalid-feedback">{errors.maLop}</div>
                )}
              </div>

              {/* SỐ MÁY TÍNH */}
              <div className="mb-3">
                <label className="form-label fw-bold">Số Máy Tính</label>
                <input 
                  type="number"
                  className={`form-control ${errors.soMayTinh ? 'is-invalid' : ''}`}
                  onChange={(e) => xulyChange(e)}
                  value={phongMoi.soMayTinh}
                  name="soMayTinh"
                />
                {errors.soMayTinh && (
                  <div className="invalid-feedback">{errors.soMayTinh}</div>
                )}
              </div>

              {/* NGƯỜI QUẢN LÝ */}
              <div className="mb-3">
                <label className="form-label fw-bold">Người Quản Lý</label>
                <input 
                  className={`form-control ${errors.nguoiQuanLi ? 'is-invalid' : ''}`}
                  onChange={(e) => xulyChange(e)}
                  value={phongMoi.nguoiQuanLi}
                  name="nguoiQuanLi"
                />
                {errors.nguoiQuanLi && (
                  <div className="invalid-feedback">{errors.nguoiQuanLi}</div>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input 
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => xulyChange(e)}
                  value={phongMoi.email}
                  name="email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Thêm</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy bỏ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomForm;
