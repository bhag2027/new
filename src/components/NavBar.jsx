import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const logout=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">BLOG APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/create">CREATE A POST</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">VIEW POSTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewmy">VIEW MY POSTS</a>
                            </li>
                            <li class="nav-item">
                                <button onClick={logout} className="btn btn-secondary">Log out</button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar