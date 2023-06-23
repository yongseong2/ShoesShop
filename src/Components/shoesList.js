import { useState } from "react"
import shoeData from "../data.js"
import { Link } from "react-router-dom"
import axios from "axios"
import { Spinner } from "react-bootstrap"


function ShoesList() {
  const [shoes, setShoes] = useState(shoeData)
  let [click, setClick] = useState(0)
  const [clickFlag, setClickFlag] = useState(true)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className="mt-3 mb-3">
        <div className="btn-group col-md-12" role="group" aria-label="Sorting buttons">
          <button className="btn btn-warning" onClick={() => {
            const copyShoes = [...shoes]
            copyShoes.sort((a, b) => {
              return a.price - b.price
            })
            setShoes(copyShoes)
          }}> 가격순 정렬하기 </button>

          <button className="btn btn-danger" onClick={() => {
            const copyShoes = [...shoes]
            copyShoes.sort((a, b) => {
              if (a.title > b.title) {
                return 1
              }
              if (a.title < b.title) {
                return -1
              }
              return 0
            })
            setShoes(copyShoes)
          }}
          >이름순 정렬하기 </button>

          {
            clickFlag === true ?
              <button className="btn btn-warning" onClick={() => {
                setLoading(false)
                if (click === 0) {
                  axios({
                    method: 'get',
                    url: 'https://codingapple1.github.io/shop/data2.json'
                  })
                    .then((res) => {
                      const copyShoes = [...shoes, ...res.data]
                      setShoes(copyShoes)
                      setLoading(true)
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                  setClick(click += 1)
                }
                else if (click === 1) {
                  axios({
                    method: 'get',
                    url: 'https://codingapple1.github.io/shop/data3.json'
                  })
                    .then((res) => {
                      const copyShoes = [...shoes, ...res.data]
                      setShoes(copyShoes)
                      setLoading(true)
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                  setClick(click += 1)
                }
                else {
                  alert('상품이 더이상 존재하지 않습니다.')
                  setClickFlag(false)
                  setLoading(true)
                }
              }}
              >상품 불러오기</button> : null}
        </div>

      </div>


      {
        loading === true ?
          shoes.map((shoe) => {
            return (
              <div className="col-md-4" key={shoe.id}>
                <Link
                  to={`/detail/${shoe.id}`}
                  state={{ shoes: shoes }}
                  key={shoe.id}
                  className='nav-link'>
                  <img alt={`shoe${shoe.id}`} src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%" />
                </Link>
                <h4>{shoe.title}</h4>
                <p> {shoe.price}원 </p>
              </div>
            )
          }) :
          <div className="text-center">
            <Spinner animation="border" />
            <h1>로딩중 입니다.</h1>
          </div>}
    </>
  )
}

export default ShoesList