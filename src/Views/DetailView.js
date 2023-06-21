import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import shoeData from "../data.js"
import styled from 'styled-components'

const Box = styled.div`
  padding : 20px;
  color : grey
`

const YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`

function DetailView() {

  const [shoes] = useState(shoeData)
  const { shoeId } = useParams()

  const shoe = shoes.find((x)=> {
    return x.id === parseInt(shoeId)
  })
  
  useEffect(()=> {
    console.log('안녕')
  })
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img alt={`shoe${shoe.id}`} src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        <Box>
          <YellowBtn>버튼임</YellowBtn>
        </Box>
      </div>
    </div>
  )
}

export default DetailView