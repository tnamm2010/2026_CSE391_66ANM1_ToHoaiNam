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
            <th>Room Name</th>
            <th>Class Code</th>
            <th>PC Count</th>
            <th>Manager</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((item) => (
              <RoomItem key={item.id || item.maLop} item={item} />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-5 text-muted">
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;