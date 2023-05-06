import { useEffect, useState } from "react";
import App from "../App";


function PersonPool ({persons}) {

const [personList,setPersonList]=useState([]);

useEffect(()=>{
  setPersonList(persons);
},[persons])


return(
<div>{personList.map((p,i)=>{
  return <div key={i}>
    <p>name: {p.name}</p>
    <p></p>
    </div>
})}
</div>
);
}


export default PersonPool;