import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="/registration">Reg Page</Link>
            <Link to="/login">Login Page</Link>

        </div>

    )
}

export default Home