import React from 'react'
import { NavLink } from 'react-router-dom'

const Scoreheader = () => {
    return (

           
        <div className="grid gap-8 lg:grid-cols-2 p-10">
            <NavLink  to='/Scoreboard/countrywise'  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" className=" text-center	bg-gray-500 text-gray-300 px-3 py-2 rounded-md text-sm font-medium" >Country wise </NavLink>
            <NavLink  to='/Scoreboard/Worldwide'  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"  className=" text-center bg-gray-500 text-gray-300 px-3 py-2 rounded-md text-sm font-medium" >World wide </NavLink>      
       </div>


  

     
    )
}

export default Scoreheader
