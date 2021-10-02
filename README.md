# Nasa Space Apps Challenge 2021 IUT Meteorites
This project was done as a solution implementation of the "Space for Change" challenge as a part of Nasa Space Apps Challenge 2021 by team IUT Meteorites.

## Description 
In today's world, where the privileged are contributing more towards environmental pollution compared to the marginalized communities, but the marginalized communities are suffering more despite having very little control over it, we, team IUT Meteorites have come up with an idea that can take the world closer to an equitable solution. Our four-step solution will be implemented using a ** user-friendly and informative website**. The first two steps are all about **identifying injustices** around the world by analyzing NASA’s EarthData and different quality of life indexes, such as access to clean water and food, education, housing, health, income, to draw an easily comprehensible visualization of how marginalized communities have to suffer a vastly unproportional impact of our deteriorating climate and use that data to **encourage people to complete challenges** which will help to build an environmentally friendly lifestyle. The next step will focus on **encouraging people to work with their communities** to make relatively large-scale changes and we will encourage this by maintaining a leaderboard based on users’ activities. In our last step, we will provide links to external sources regarding how an individual can contribute from their current positions including links to **charitable and research organizations** that help to fight the environmental injustices marginalized people are facing around the globe.

# Tech Stack
- MongoDB Atlas
  - Used for database and handling the APIs
- React
  -  Used for frontend
- NodeJS
  -  Used for backend
- Express
  - Framework of backend

### API documentation for backend
https://documenter.getpostman.com/view/14575493/UUy396bm?fbclid=IwAR0pyPFsSiFwZy2_tL1MIcWYao9Bz6OKZQvrZ-g1Cc8xLxteYTqulvNDuNA
  

## APIs Used
- https://eonet.sci.gsfc.nasa.gov/docs/v3#categoriesAPI
  - The Earth Observatory Natural Event Tracker (EONET) provides a curated source of continuously updated natural event metadata and, service that links those natural events to thematically-related web service-enabled image sources (e.g., via WMS, WMTS, etc.).
- http://hdr.undp.org/en/content/human-development-report-office-statistical-data-api
  -   The Human Development Report Office (HDRO) under United Nations Development Programme offers this REST API for the developers to query human development-related data in JSON format. The data can be queried by indicator id(s), year(s), and country-code(s), and group by any order.
- https://emissions-api.org/
  - Emissions API is a service providing a REST interface to easily access satellite-based emissions data from the European Space Agency’s Sentinel-5P satellite.

## The Complete Picture
- We find climate injustices by calculating the effects of climate change in a community and the quality of life of that community. If a community has a very poor quality of life and also suffers heavily from impacts of climate change, that is climate injustice.
- We get location-based natural event metadata from EONET and compare it with human index related data from HDRO to identify specific cases of climate injustices.
- We use this data to encourage users to participate in challenges that will make people aware of the suffering of marginalized communities.
![Screenshot challenges](https://user-images.githubusercontent.com/57323907/135718089-18b19a71-dbe7-4efd-96cd-6ed2d25d5155.png)
- There are worldwide and local leaderboards to make the challenges more interesting and competitive at the same time. 
![image](https://user-images.githubusercontent.com/57323907/135718047-e2a79747-78c1-431e-b250-971f48296817.png)
- a separate section of our website is dedicated to tracking causes of environmental pollution.
- Finally, we promote donating to charities that are working with marginalized communities and investing in eco-friendly technologies.

# How to Install
1. git clone or zip download the code base
2. install Node.js
3. go to the directory nammed 'backend'
4. create .env file that contains CONNECTION_URL of mongodb atlas and ACCESS_TOKEN_SECRET for bcrypt
5. run npm install
6. run npm start
7. go to the directiry nammed 'frontend'
8. run npm install
9. run npm start

