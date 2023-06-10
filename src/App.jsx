import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  
  const location = useLocation();

  const onHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <>
       <div className="bg-sky-200 bg-opacity-40">
   { onHeaderFooter ||  <Header></Header>}
   
    <Outlet></Outlet>

   
     
    { onHeaderFooter || <Footer></Footer>}
    </div>
    
    </>
  )
}

export default App
