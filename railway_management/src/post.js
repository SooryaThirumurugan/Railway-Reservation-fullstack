import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function Login () {
  const [id,setId]=useState('');
  const[name,setName]=useState('');
  const[trainName,setTrainname]=useState('');
  const[arraival,setArraival]=useState('');
  const[departure,setDeparture]=useState('');
  const[date,setDate]=useState('');
  const[from,setFrom]=useState('');
  const[to,setTo]=useState('');

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/Railway",{

        id:id,
        name:name,
        trainName:trainName,
        arraival:arraival,
        departure:departure,
        date:date,
        from:from,
        to:to
      
        
      

      });
      alert("Added");
      setId("");
      setName("");
      setTrainname("");
      setArraival("");
      setDeparture("");
      setDate("");
      setFrom("");
      setTo("");

    }
    catch(err){
      alert("Not Added")
    }
  }
  return (
    <>
   
    <center>

      
    <div className='body'>
      
    <form >
    <h2>PASSENGER DETAILS</h2>
    
      <div className='input-div'>

        <label htmlFor="username"><b>ID</b>:</label>
        <input type="number" value={id} onChange={(event)=>setId(event.target.value)}/>
      </div>

      <div className='input-div'>
        <label htmlFor="name"><b>Name</b> :</label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/ >
      </div>

      <div className='input-div'>
        <label htmlFor="trainname"><b>TrainName</b> :</label>
        <input type="text" value={trainName} onChange={(event)=>setTrainname(event.target.value)} / >
      </div>

      <div className='input-div'>
        <label htmlFor="arraival"><b>ARRIVAL</b> :</label>
        <input type="text" value={arraival} onChange={(event)=>setArraival(event.target.value)} / >
      </div>

      <div className='input-div'>
        <label htmlFor="departure"><b>DEPARTURE</b> :</label>
        <input type="text" value={departure} onChange={(event)=>setDeparture(event.target.value)} / >
      </div>
      
      <div className='input-div'>
        <label htmlFor="text"><b>Date of journey</b> :</label>
        <input id="dateEntry" type="date" value={date} onChange={(event)=>setDate(event.target.value)} />
       </div>
       <div className='input-div'>
        <label htmlFor="from"><b>From</b> :</label>
        <input type="text" value={from} onChange={(event)=>setFrom(event.target.value) }/>
      </div>
      <div className='input-div'>
      <label htmlFor="to"><b>To</b> :</label>
      <input type="text" value={to} onChange={(event)=>setTo(event.target.value) }/>


      </div>
      <button type="submit" onClick={save}>ADD</button>
    </form>
    </div>
      </center>
    </>
  );
};


export default Login;