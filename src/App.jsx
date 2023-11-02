import { Outlet } from "react-router-dom"
import MainLoyout from "./components/layout/MainLoyout"


function App() {

  return (
    <>
      <MainLoyout>
        <Outlet></Outlet>
      </MainLoyout>
    </>
  )
}

export default App
