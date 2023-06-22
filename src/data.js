import axios from "axios"

const shoeData = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
]

axios({
  method:'get',
  url:'https://codingapple1.github.io/shop/data2.json'
})
.then((res)=>{
  res.data.forEach((el)=>{
    shoeData.push(el)
  })
})
.catch((err)=>{
  console.log(err)
})

export default shoeData 