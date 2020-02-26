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
      country: undefined
    };
    this.getWeather();
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

    const response = await api_call.json()

    console.log(response)

    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }

  render(){
    return(
      <div className='App'>
      <Weather 
        city={this.state.city} 
        country={this.state.country}
      />
    </div>
    )
  };
};

export default App;
