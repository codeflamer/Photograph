import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Home page
            {false ? 'Helo thereo' : (
                <Redirect
                to={{pathname: "/login"}}
              />
            )}
        </div>
    )
}

export default Home
