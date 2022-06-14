import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./pagination";
import {Link} from "react-router-dom";


function Userdata() {
  const [user,setuser]=useState([]);
  const [Loading,setLoading]=useState(true);
  const [Error,setError]=useState(false);
  const [page,setpage]=useState(1);
  useEffect(() => {
    fetchData(page)
  },[])
  const fetchData = async(page)=>{
   setLoading(true)
   axios({
     method : "GET",
     url :`https://reqres.in/api/users`,
     params:{
       _page:page,
       _limit:1
     }
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
  console.log(user);
  console.log(page)


  return(
<div>

  <div>
    {user?.data?.map((value, index)=>(
   <div>
   <img src={value.avatar} />
   <h3>{value.first_name}</h3>
  <Link to={`/user/${value.id}`}>
   <button> View More </button>
   </Link>
   </div> 
    ))}

    </div>
<button disabled={page === 1} onClick={()=> setpage(page-1)}> Previos </button>
     <button onClick={()=> setpage(page + 1)}>Next</button>
<Pagination currentpage={page} lastPage={6} onPageChange={setpage}/>
</div>
  )
}
export default Userdata;