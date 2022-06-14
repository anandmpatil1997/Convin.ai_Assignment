import {Routes,Route} from "react-router-dom"
import Singleuser from "./Singleuser"
import Userdata from "./User"

const Routerdata=()=>{
  return(
    <>
    <Routes>
    <Route path="/user/:id" element={<Singleuser/>}/>
    <Route path="/" element={<Userdata  />} />
    </Routes>
    </>
  )
}
export default Routerdata;