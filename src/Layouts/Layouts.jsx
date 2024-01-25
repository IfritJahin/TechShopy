import React from 'react'
import Home from '../components/Home'
import Home from '../components/Footer'
import { Outlet } from 'react-router-dom'

function componentName() {
    return (
        <div>

            <Home></Home>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    )
}

export default componentName
