import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer/Footer'
const Main = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Main