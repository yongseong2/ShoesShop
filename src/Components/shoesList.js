import { useState } from "react"
import shoeData from "../data.js"
import { Link } from "react-router-dom"


function ShoesList () {
  const [ shoes ] = useState(shoeData)

  return (
    <>
      { shoes.map((shoe) => {
        return (
          <div className="col-md-4" key={shoe.id}>
            <img alt={`shoe${shoe.id}`} src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} width="80%" />
            <h4>{ shoe.title }</h4>
            <Link 
            to={ `/detail/${ shoe.id }` } 
            // state={{shoe: shoe}}
            className='nav-link'>
            Detail</Link>
            <p> { shoe.price } </p>
          </div>
        )
      })}
    </>
  )
}

export default ShoesList