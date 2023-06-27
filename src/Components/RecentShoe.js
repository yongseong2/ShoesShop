import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function RecentShoe() {
  const recentShoes = useSelector((state) => state.recent)

  useEffect(() => {
    localStorage.setItem('recentShoes', JSON.stringify(recentShoes))
  }, [recentShoes])


  const parsedShoe = JSON.parse(localStorage.getItem('recentShoes'))


  return (
    <div className='d-flex justify-content-center text-light bg-dark'>
      <div className='row text-center'>
        <h4>최근 본 상품</h4>
        <div className='d-flex justify-content-center'>
          {
            parsedShoe.map((recentShoe) => {
              const recentShoeImg = `https://codingapple1.github.io/shop/shoes${recentShoe.id + 1}.jpg`
              return (
                <div key={recentShoe.id} className='mx-2'>
                  <div>
                    <img width='100' src={recentShoeImg} alt={`shoe${recentShoe.id}`} />
                  </div>
                  {recentShoe.title}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RecentShoe