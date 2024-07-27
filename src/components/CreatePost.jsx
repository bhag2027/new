import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const CreatePost = () => {
    const [input,setinput]=useState(
      	
    {
      "message":"",
      "userid": sessionStorage.getItem("userid")
  
    }
)
const [token,settoken]=useState(sessionStorage.getItem("token"))

const inputhandler = (event)=>{
  setinput({...input,[event.target.name]:event.target.value})
}

const readvalue=()=>{
  console.log(input)
  axios.post("http://localhost:3030/add",input,{headers:{"token":token,"Content-Type":"application/json"}} ).then(
    (response)=>{
      console.log(response.data)
      if (response.data.status== "success") 
        {
            alert("posted")
        
      } 
      else {
        alert("something wrong")
        
      }

    }
  ).catch(
    (error)=>{
      console.log(error)
    }
  )
}



  return (
    <div>
      <NavBar/>
      <h1 align="center"> <u>CREATE A POST </u></h1><br></br>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Type a Message</label>
                <textarea name="message" value={input.message} className="form-control" onChange={inputhandler}></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success"onClick={readvalue}>POST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
   
  )
}

export default CreatePost