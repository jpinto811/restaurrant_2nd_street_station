import { Outlet} from "react-router-dom"
import Footer from "../components/Footer"

const AuthLayouth = () => {
  return (
    <>
  
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AuthLayouth