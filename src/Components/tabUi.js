import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"

function TabUi() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent
        tab={tab}
      />
    </>
  )
}

// function TabContent(props) {
//   const tab = props.tab
//   if (tab === 0) {
//     return (
//       <div className="text-center">내용1</div>
//     )
//   }
//   if (tab === 1) {
//     return (
//       <div className="text-center">내용2</div>
//     )
//   }
//   if (tab === 2) {
//     return (
//       <div className="text-center">내용3</div>
//     )
//   }
// }

function TabContent(props) {
  const [fade, setFade] = useState(0)
  const tab = props.tab

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => {
      setFade('')
    }
  }, [tab])

  return (
    <div className={`start ${fade} text-center`}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </div>
  )
}


export default TabUi