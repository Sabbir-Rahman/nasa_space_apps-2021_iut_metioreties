import React from 'react'

const Scores = (props) => {
    return (
        <div className="flex bg-gray-100 m-10 rounded-full">
            <div class="flex-1 text-2xl text-center m-5 p-2 rounded-l-full bg-gray-200 ">
              {props.position}
            </div>
            <div class="flex-1 text-2xl text-center m-5 h-12 p-2 bg-gray-200 ">
               {props.name}
            </div>
            <div class="flex-1 text-2xl text-center m-5 p-2  bg-gray-200 rounded-r-full  ">
               { props.score}
            </div>

            
        </div>
    )
}

export default Scores
