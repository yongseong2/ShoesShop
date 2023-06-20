import { useParams } from "react-router-dom"
import { useState } from "react"
import shoeData from "../data.js"

function DetailView() {

  const shoes = useState(shoeData)
  const { shoeId } = useParams()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img alt={`shoe${shoeId}`} src={`https://codingapple1.github.io/shop/shoes${parseInt(shoeId) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes[0][shoeId].title}</h4>
          <p>{shoes[0][shoeId].content}</p>
          <p>{shoes[0][shoeId].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {/* 현재페이지는{ id } */}
    </div>
  )
}

export default DetailView