import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const [data, setdata] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3030/viewall", {}, { headers: { "token": sessionStorage.getItem("token"), "Content-Type": "application/json" } }).then(
            (response) => {
                console.log(response.data)
                setdata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div class="card mb-3" >
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="https://images.unsplash.com/photo-1481988535861-271139e06469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="..."></img>
                                                </div>
                                                
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.message}</h5>

                                                        <p class="card-text"><small class="text-body-secondary">posted on {value.posteddate}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll