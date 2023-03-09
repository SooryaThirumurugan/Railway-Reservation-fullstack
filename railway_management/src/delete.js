import axios  from 'axios';
import React, { useState } from 'react';
import './App.css';
function Delete () {
    const [id,setId]=useState();
    const[error,setError]=useState('');
    function del(){
            axios
             .delete("http://localhost:8080/Railway?id="+id)
             .then((response)=>{
                console.log(response.data);
                alert("User Deleted");
             })
             .catch((error)=>setError(error.message));
        
   }
  return (
    <><center>

      
    <div className='body'>
    <form >
    <h2>ENTER PASSENGER ID</h2>
    
      <div>
        <label htmlFor="username"><b>ID</b> :</label>
        <input type="number"  onChange={(e)=> setId(e.target.value)} value={id}/>
      </div>


      <button type="submit" onClick={del}>Delete</button>
    </form>
    </div>
    <h2>{error}</h2>
      </center>
    </>
  );
};

export default Delete;