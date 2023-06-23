import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// import shoeData from "../data.js"
import styled from 'styled-components'
import TabUi  from "../Components/tabUi"
import { Button } from "react-bootstrap"

// styled component 실습

// const Box = styled.div`
//   padding : 20px;
//   color : grey
// `

// const YellowBtn = styled.button`
//   background : yellow;
//   color : black;
//   padding : 10px;
// `

// LifeCycle 실습
const YellowBox = styled.div`
  background : #F8F067;
  color: black;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`

function DetailView() {
  // const [shoes] = useState(shoeData)
  const location = useLocation()
  const shoes = location.state.shoes 
  const { shoeId } = useParams()
  const [timer, setTimer] = useState(true)
  const shoe = shoes.find((x) => {
    return x.id === parseInt(shoeId)
  })
  const [text, setText] = useState('')
  const [fade, setFade] = useState('')
  const navigation = useNavigate()

  // useEffect
  useEffect(() => {
    const browserTimer = setTimeout(() => { setTimer(false) }, 2000)
    return () => {
      clearTimeout(browserTimer) // 타이머를 제거함(안전하게 사용가능)
    }
  }, [])

  useEffect(()=> {
    setTimeout(()=>{setFade('detailEnd')}, 100)
  })

  // useEffect(()=> {
  //   if (isNaN(text.trim())) {
  //     window.alert('돌아가세요~')
  //   }
  // }, [text]) // 변화를 감지함

  // functions
  function getText(e) {
    let inputText = e.target.value
    if (isNaN(inputText.trim())) {
      window.alert('돌아가세요~')
      inputText = ""
      return
    }
    setText(inputText)
  }

  return (
    <div className={`container detailStart ${fade}`}>
      {
        timer === true ?
          <YellowBox>2초 이내 구매시 할인</YellowBox>
          : null
      }
      <Button className="mt-2" onClick={()=> {navigation(-1)}}>뒤로가기</Button>
      <div className="row">
        <div className="col-md-6">
          <img alt={`shoe${shoe.id}`} src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4 text-center">
          <input
            onChange={getText}
            // onChange={(e) => { setText(e.target.value) }}
            value={text}
            type="text" />
          <p>{text}</p>
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        {/* <Box>
          <YellowBtn>버튼임</YellowBtn>
        </Box> */}
      </div>
      <TabUi

      ></TabUi>
    </div>
  )
}

export default DetailView