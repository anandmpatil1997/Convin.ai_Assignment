import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Pagination from "./pagination";
import "./Singleuser.css"

const Singleuser=()=>{
  const {id} = useParams()
  const [user,setuser]=useState([]);
  const [Loading,setLoading]=useState(true);
  const [Error,setError]=useState(false);

  const [page,setpage]=useState(1);
 
  useEffect(() => {
    fetchData()
  },[])
  const fetchData = async()=>{
   setLoading(true)
   axios({
     method : "GET",
     url :`https://reqres.in/api/users/${id}`,
    
   })
   .then(res => {
     console.log(res)
     setuser(res.data);
     setLoading(false);
   })
   .catch(err => {
     setError(true);
     setLoading(false);
   })
  }
  console.log(user.data);
  console.log(id);
 

return(
  <div >
 <div>
    
   <div >
        <div className="card mb-3" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user?.data?.first_name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  <Link to="/"><button>Homepage</button></Link><br></br>
  <button disabled={page === 1} onClick={()=> setpage(page-1)}> Previos </button>
     <button onClick={()=> setpage(page + 1)}>Next</button>
<Pagination currentpage={page} lastPage={6} onPageChange={setpage}/>
  
  
   </div> 


    </div>
  </div>
)
}
export default Singleuser;