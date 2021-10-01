import React from 'react'
import Scores from './Scores'

const WorldwideInvidual = () => {
    return (
     
            <div className='p-10 w-30 bg-gray-300'>
                <h1 className='text-center bold text-4xl'>Individual Leader Board</h1>
                <Scores position='1' name='Sabbir' score="1243234"/>
                <Scores position='2' name='asdjhas' score="124334"/>
                <Scores position='3' name='dfdf' score="24234"/>
                <Scores position='4' name='Bangladesh' score="1244"/>
                <Scores position='5' name='rtrtr' score="124"/>
              
            </div>
        
    )
}

export default WorldwideInvidual
