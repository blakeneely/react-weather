import React from 'react';
import Weather from './components/weather/Weather';
import Form from './components/form/Form';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_key = 'a1e3b3c298370700698105fb435bbe64';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      temp: undefined,
      temp_high: undefined,
      temp_low: undefined,
      description: '',
      error: false
    };
    
    this.weatherIcon = {
      thunderstorm:'wi-thunderstorm',
      drizzle: 'wi-sleet',
      rain: 'wi-storm-showers',
      snow: 'wi-snow',
      atmosphere: 'wi-fog',
      clear: 'wi-day-sunny',
      clouds: 'wi-day-fog'
    };
  };

  get_WeatherIcon(icons, rangeId) {
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.thunderstorm})
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.drizzle})
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.rain})
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon:this.weatherIcon.snow})
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon:this.weatherIcon.atmosphere})
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.clear})
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.clouds})
        break;
      default:
        this.setState({icon:this.weatherIcon.clouds})
    };
  };

  convertTemp(temp){
    let newTemp =  Math.floor((temp - 273.15)*1.8) + 32 
    return newTemp;
  };

  getWeather = async(e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const response = await api_call.json()
  
      console.log(response)
  
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        temp: this.convertTemp(response.main.temp),
        temp_high: this.convertTemp(response.main.temp_max),
        temp_low: this.convertTemp(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
  
    }else {
      this.setState({error: true})
    };
  };

  render(){
    return(
      <div className='App'>
        <Form 
          loadweather={this.getWeather}
          error={this.state.error}
        />
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp={this.state.temp}
          temp_high={this.state.temp_high}
          temp_low={this.state.temp_low}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
    </div>
    )
  };
};

export default App;
