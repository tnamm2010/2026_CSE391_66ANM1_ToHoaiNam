function RoomItem({ item }) {
  return (
    <tr>
      <td className="fw-bold text-dark">{item.tenPhong}</td>
      <td><span className="badge bg-secondary">{item.maLop}</span></td>
      <td>{item.soMayTinh}</td>
      <td>{item.nguoiQuanLi}</td>
      <td><a href={`mailto:${item.email}`} className="text-decoration-none">{item.email}</a></td>
    </tr>
  );
}

export default RoomItem;