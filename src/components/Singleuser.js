import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Pagination from "./pagination";

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
  <div>
 <div>
    
   <div>
   <img src={user?.data?.avatar} />
   <h3>{user?.data?.first_name}</h3>
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