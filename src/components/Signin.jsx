import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate()
    const [data,setdata]=useState(
        {"email":"",
         "password":""
        }
)
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:3030/signin",data).then(
            (response)=>{
                if(response.data.status == "invalid password"){
                    alert("incorrect password")
                   
                }
                else if(response.data.status=="invalid email")
                {
                    alert("invalid email")
                }
                else{
                   let token=response.data.token
                   let userid=response.data.userid
                   console.log(userid)
                   console.log(token)
                   sessionStorage.setItem("userid",userid)
                   sessionStorage.setItem("token",token)
                   navigate("/create")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
                
            }
        ).finally()
    }
  return (
    
        <div>
            <h1 align="center"><u>LOGIN </u></h1><br></br>
        <div className="container">
       
        <div class="card"  style={{ width: '50rem' ,height:'20rem'}} >
            <div class="card-body" align='center' >

            <div className="row">
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>EMAILID</b></label>
                            <input type="text" className="form-control"  name='email' value={data.email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="password" value={data.password} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p>  new users click to Signup <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

  )
}

export default Signin