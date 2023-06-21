import { useState } from "react"
import shoeData from "../data.js"
import { Link } from "react-router-dom"


function ShoesList() {
  const [shoes, setShoes] = useState(shoeData)

  return (
    <>
      {shoes.map((shoe) => {
        return (
          <div className="col-md-4" key={shoe.id}>
            <Link
              to={`/detail/${shoe.id}`}
              className='nav-link'>
              <img alt={`shoe${shoe.id}`} src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%" />
            </Link>
            <h4>{shoe.title}</h4>
            <p> {shoe.price}원 </p>
          </div>
        )
      })}
      <button onClick={() => {
        const copyShoes = [...shoes]
        copyShoes.sort((a, b) => {
          return a.price - b.price
        })
        setShoes(copyShoes)

      }}> 가격순 정렬하기 버튼 </button>

      <button onClick={() => {
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
      >이름순 정렬하기 버튼</button>
    </>
  )
}

export default ShoesList