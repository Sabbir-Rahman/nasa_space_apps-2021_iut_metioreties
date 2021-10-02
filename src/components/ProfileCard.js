import React from 'react'

const ProfileCard = () => {
    return (
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
  	<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
    <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3"/>		
    </div>
	<div class="text-center px-3 pb-6 pt-2">
		<h3 class="text-white text-sm bold font-sans">Olivia Dunham</h3>
		<p class="mt-2 font-sans font-light text-white">Environmental activists</p>
	</div>
  	<div class="flex justify-center pb-3 text-white">
      <div class="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Challenges</span>
      </div>
      <div class="text-center">
        <h2>42</h2>
        <span>Score</span>
      </div>
  	</div>
</div>
    )
}

export default ProfileCard
