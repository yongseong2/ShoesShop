import { useParams } from "react-router-dom"

function DetailView() {

  const { shoeId } = useParams()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img alt={`shoe${shoeId}`} src={`https://codingapple1.github.io/shop/shoes${parseInt(shoeId) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      {/* 현재페이지는{ id } */}
    </div> 
  )
}

export default DetailView