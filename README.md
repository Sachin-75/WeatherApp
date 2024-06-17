# Weather App
Welcome to the Weather App! This application allows you to get real-time weather information for any city. By entering a city name, you can retrieve the current temperature, wind status, minimum and maximum temperatures, and other weather details.

## Features
- Current Temperature: Displays the current temperature of the entered city.
- Minimum and Maximum Temperature: Displays the minimum and maximum temperatures recorded for the day.
- City and Country Display: Shows the name of the city and the country code.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Usage
- Open the application in your browser (usually at http://localhost:3000).
- Enter the name of a city in the input field and click the search button.
- The app will display the current weather information for the entered city.

### Code Structure
- `src/components/Tempapp.js`: Main component where the weather fetching logic and UI components are implemented.
- `src/styleApp.css`: CSS file for styling the application.
- `public/index.html`: HTML template for the application.


### API Reference
This application uses the OpenWeatherMap API to fetch weather data.

Endpoint: `https://api.openweathermap.org/data/2.5/weather`
Parameters:
- q: City name
- units: Units of measurement (metric)
- appid: Your API key
