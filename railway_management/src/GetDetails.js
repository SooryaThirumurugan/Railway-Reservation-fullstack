import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
function GetDetails () {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:8080/Railway")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
  return (
    <>
    <center>
    {isError !== "" && <h2>{isError}</h2>}
            <h2>PASSENGER DETAILS</h2>
    <div className='grid'>
          <table id='table'>
              <tr>
                <th>Name</th>
                <th>TrainName</th>
                <th>Arraival</th>
                <th>Departure</th>
                <th>Date of journey</th>
                <th>From</th>
                <th>To</th>
              </tr>
      {myData.slice(0,8).map((post)=>{
        return(
          
              <tr key={(post.id)}>
              <td>{post.name}</td>
              <td> {post.trainName}</td>
              <td>{post.arraival}</td>
              <td>{post.departure}</td>
              <td>{post.date}</td>
              <td>{post.from}</td>
              <td>{post.to}</td>
            </tr>
              )
            })}
              </table>
    </div>
    
    </center>
    
    </>
  );
};

export default GetDetails