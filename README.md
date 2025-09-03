🌤️ Weather Now 

Weather Now is a simple and responsive weather application built with React.js, Css, Html.

🔍 Search for any city and instantly get live weather updates including temperature, wind speed, and conditions (☀️ Sunny, 🌧️ Rainy, ☁️ Cloudy, etc.).

🌓 Comes with a dark mode toggle for a better viewing experience.

⚡ Powered by the Open-Meteo API, no API key required.



✨ Features

🔍 Smart city search – Get live city suggestions powered by the GeoDB Cities API.

🌦 Real-time weather data – Accurate temperature, wind speed, and conditions from the Open-Meteo API.

🌓 Light/Dark mode toggle – Saves your theme preference in localStorage for a personalized experience.

📱 Responsive UI – Clean and simple design that works seamlessly across devices.



 🔑 API Keys

GeoDB Cities API

Used to fetch live city suggestions as the user types.

Requires a free API key from RapidAPI.

Example key (a8438f968cmsh1e9f55ffb991bf6p1d6a35jsnd756b78ac8fb
):



Open-Meteo API

Used to fetch real-time weather data.

No API key required.

Needs latitude & longitude, which we get from the GeoDB Cities API response.





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

