import axios from "axios";
import { useEffect, useState } from "react";
import CreateProducts from  "./Component/formdata"
import PersonPool from "./Component/personPool";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";

import './App.css';

function App() {

  const [persons,setPersons] = useState([]);

  useEffect(()=>{
    setTimeout(() => {
      axios
      .get('https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/forms')
      .then((res)=>{
        setPersons(res.data)
      })
    }, 3000);
  },[persons])
    

 return(
<div className="">
<h1> Anasayfa </h1>
<Link to="/">
  <Button>Main Page</Button>
</Link>

<div className="button-style">
        <Link to="/person"><Button> New Person</Button></Link>
        <Link to="/personpool"><Button> Person Pool</Button></Link>
</div> 


<Routes>

    <Route path = "/person" element={<CreateProducts persons={persons}/>}/>
    <Route path = "/personpool" element={<PersonPool persons={persons}/>}/>

</Routes>
 


</div>
 ) 
}

export default App;
