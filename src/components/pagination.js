const Pagination =({currentpage,lastPage,onPageChange}) =>{
  const arr = new Array(lastPage).fill(0);
  return(
    <div>
      {arr.map((item,page)=>(
<button class="button-4" onClick={()=> onPageChange(page+1)}
disabled={page + 1 === currentpage}
>
  {" "}
  {page+1}{" "}
</button>
      ))}
    </div>
  )
} 
export default Pagination;