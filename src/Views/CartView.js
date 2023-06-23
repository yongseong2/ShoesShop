import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function CartView() {
  const carts = useSelector((state) => state.cart)

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
          {
            carts.map((cart) => {
              return (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.name}</td>
                  <td>{cart.count}</td>
                  <td><button>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default CartView