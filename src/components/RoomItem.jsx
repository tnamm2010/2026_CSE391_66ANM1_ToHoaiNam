function RoomItem({ item }) {
  return (
    <tr>
      <td>{item.tenPhong}</td>
      <td>{item.maLop}</td>
      <td>{item.soMayTinh}</td>
      <td>{item.nguoiQuanLi}</td>
      <td>{item.email}</td>
    </tr>
  );
}

export default RoomItem;
