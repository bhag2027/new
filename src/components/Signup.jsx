import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [input,setinput]=new useState(
        {
            "name":"",
            "phno":"",
            "email":"",
            "password":"",
            "cpwd":""
        }
    
    )

const inputHandler=(event)=>{
    setinput({...input,[event.target.name]:event.target.value})
}
 const readvalue=()=>{
    if (input.password==input.cpwd) {
      let newinput={"name":input.name,"phno":input.phno, "email":input.email,"password":input.password }

    axios.post("http://localhost:3030/signup",newinput).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully registered")
              setinput(
                {
                    "name":"",
                    "phno":"",
                    "email":"",
                    "password":"",
                    "cpwd":""
                }
            )

            } else {
                alert("email already exit")
                setinput(
                    {
                        "name":"",
                        "phno":"",
                        "email":"",
                        "password":"",
                        "cpwd":""
                    }
                )
                
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )




    } else {
       alert("password and confirmpassword are not same") 
    }
   
 }
  return (
    <div>
        <h1 align="center"><u> REGISTRATION </u> </h1><br></br>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} placeholder='enter your name'/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">phonenumber</label>
                            <input type="text" className="form-control" name='phno' value={input.phno} onChange={inputHandler} placeholder='enter your phonenumber'/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} placeholder='enter your email'/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} placeholder='enter your password' />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Confirmpassword</label>
                            <input type="password" className="form-control" name='cpwd' value={input.cpwd} onChange={inputHandler} placeholder='enter your correct password' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href='/' className="btn btn-success">Back to login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup