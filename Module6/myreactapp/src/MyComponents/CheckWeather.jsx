// Child component - receives parent state handler via props
function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];

  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40); // random temp 0-39
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length); // random index for weather types to show weathertypes array
    
    // ++ try to destructure this function from the props object
    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };

  return (
    <button onClick={randomWeather}>Check Weather</button> // calls the randomWeather function on click
  );
}
export default CheckWeather;

// ++ Add some more weather types of your own
// ++ Try adding a button to convert between C and F temps
