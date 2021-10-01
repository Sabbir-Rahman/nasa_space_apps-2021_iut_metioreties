import React from 'react'
import Chartprofile from '../components/Chartprofile'
import SingleCard from '../components/SingleCard'


const Profile = () => {
    return (
    
      // <div class="container sm mx-auto">
      <div className="grid gap-8 lg:grid-cols-5 p-10 md:grid-cols-1  sm:grid-cols-1">
      <div className="lg:col-span-2  ">
       <SingleCard />
      </div>
           <div className="lg:col-span-3 flex justify-self-center self-center " > <Chartprofile/></div>
           
      </div>
      //      
        


    )
}

export default Profile
