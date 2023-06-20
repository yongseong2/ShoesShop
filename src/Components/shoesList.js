import { useState } from "react"
import shoeData from "../data.js"
import { Link } from "react-router-dom"


function ShoesList() {
  const [shoes] = useState(shoeData)

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
    </>
  )
}

export default ShoesList