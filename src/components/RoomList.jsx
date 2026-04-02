import RoomItem from "./RoomItem";

function RoomList({ rooms, searchTerm }) {
  const filteredRooms = rooms.filter(room => 
    room.tenPhong.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.maLop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th>Tên Phòng</th>
            <th>Mã Lớp</th>
            <th>Số Máy Tính</th>
            <th>Người Quản Lý</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((item, index) => (
              <RoomItem 
                key={index} 
                item={item} 
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-muted">
                Không tìm thấy kết quả nào phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;
