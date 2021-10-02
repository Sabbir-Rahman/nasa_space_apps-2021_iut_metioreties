import React from 'react'

const SingleCard = (props) => {
    return (
          <article class="overflow-hidden rounded-lg shadow-lg">

                {/* <a href="#">
                    <img alt="Placeholder" class="h-auto w-full" src='../image/planttree.png'></img>
                </a> */}

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                            {props.title}
                      
                    </h1>
                    <p class="text-grey-darker text-sm">
                       {props.date} joined
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <p class="ml-2 text-sm">
                        <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
{props.button}
</button>
                          
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
    )
}

export default SingleCard
