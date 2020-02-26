import React from 'react';
import Weather from './components/weather/Weather'

import './App.css';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    this.getWeather();
  }

  convertTemp(temp){
    let newTemp =  Math.floor((temp - 273.15)*1.8) + 32 
    return newTemp;
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

    const response = await api_call.json()

    console.log(response)

    this.setState({
      city: response.name,
      country: response.sys.country,
      temp: this.convertTemp(response.main.temp),
      temp_high: this.convertTemp(response.main.temp_max),
      temp_low: this.convertTemp(response.main.temp_min),
      description: response.weather[0].description,
    })
  }

  render(){
    return(
      <div className='App'>
      <Weather 
        city={this.state.city} 
        country={this.state.country}
        temp={this.state.temp}
        temp_high={this.state.temp_high}
        temp_low={this.state.temp_low}
        description={this.state.description}
      />
    </div>
    )
  };
};

export default App;
