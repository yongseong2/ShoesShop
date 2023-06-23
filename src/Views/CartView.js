import { Table } from "react-bootstrap"

function CartView() {
  return (
    <div className="container">
      <h2 className="m-3 text-center ">user의 장바구니</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CartView