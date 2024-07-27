import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewMy = () => {
    const [data, setdata] = useState([])
    const [token, settoken] = useState(sessionStorage.getItem("token"))
    const [userid, setuserid] = useState(
        { "userid": sessionStorage.getItem("userid") }
    )

    const fetchData = () => {
        axios.post("http://localhost:3030/viewmy", userid, { headers: { "token": token, "Content-Type": "application/json" } }).then(
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
                                    return <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div class="card mb-3" >
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="https://media.istockphoto.com/id/479629586/vector/pointing-at-himself-emoticon-pick-me.jpg?s=612x612&w=0&k=20&c=GJCnkPuG0n2gofzk22VHvBeueLYugg26EWH8vmIyix0=" class="img-fluid rounded-start" alt="..."></img>
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

export default ViewMy