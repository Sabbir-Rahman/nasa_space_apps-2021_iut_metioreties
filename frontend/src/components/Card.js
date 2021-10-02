import React from 'react'
import SingleCard from './SingleCard'

const Card = (props) => {
    return (
         <div  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
     <SingleCard title={props.title} date={props.joined} button={  'Join challenge'} />

       
         
       
   </div>
    )
}

export default Card
