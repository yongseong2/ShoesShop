import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changeName, changeAge } from "./../store/userSlice"
import { changeCartNum } from "../store/store"

function CartView() {
  const carts = useSelector((state) => state.cart)
  const user = useSelector((state)=> state.user.name)
  const age = useSelector((state)=>state.user.age)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h2 className="m-3 text-center ">{user}의 장바구니</h2>
      <h2 className="m-3 text-center ">{age} 쨜</h2>
      <button onClick={()=>dispatch(changeName())}>이름바꾸기</button>
      <button onClick={()=>dispatch(changeAge())}>나이 올리기</button>
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
                  <td><button onClick={()=>{dispatch(changeCartNum(cart.id))}}>+</button></td>
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