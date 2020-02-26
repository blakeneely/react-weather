import React from 'react';
import Weather from './components/weather/Weather'

import './App.css';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';

const API_key = 'a1e3b3c298370700698105fb435bbe64';

class App extends React.Component {
  constructor(){
    super();
    this.state={};
    this.getWeather();
  }

  getWeather = () => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`)
    .then(function(response){
      console.log(response)
    });
  };

  render(){
    return(
      <div className='App'>
      <Weather />
    </div>
    )
  };
};

export default App;
