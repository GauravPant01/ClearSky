 Weather Now - Weather App :

A simple weather web app built with React.js.
Search for any city to get live weather updates like temperature, wind speed, and conditions (sunny, rainy, cloudy).
Includes a dark mode toggle for better experience.



 Features :

Search cities with live suggestions (via GeoDB Cities API)

Real-time weather data (via Open-Meteo API)

Light/Dark mode toggle (saved in localStorage)

Responsive and easy-to-use UI



 API Keys :

For getting cities recommendation when user enter city name -
 GeoDB Cities API → Requires a free key from RapidAPI (a8438f968cmsh1e9f55ffb991bf6p1d6a35jsnd756b78ac8fb)

For getting weather data when search button is pressed -
Open-Meteo → No key required , Open-Meteo needs a latitude and longitude for the location which we can get from the  GeoDB Cities API .





Folder Structure :

weather-app/
├── public/                   
│   ├── vite.svg
│   └── weathericon.jpg       
│
├── src/                      
│   ├── assets/               
│   │   ├── Body.css          
│   │   ├── Navbar.css        
│   │   ├── react.svg
│   │   └── searchIcon.webp   
│   │
│   ├── components/           
│   │   ├── Body.jsx          
│   │   └── Navbar.jsx        
│   │
│   ├── utils/                
│   │   └── weatherCodes.js   
│   │
│   ├── App.jsx               
│   ├── index.css             
│   └── main.jsx              
│
├── .gitignore
├── README.md                 
├── eslint.config.js          
├── index.html                
├── package-lock.json
├── package.json              
└── vite.config.js            

