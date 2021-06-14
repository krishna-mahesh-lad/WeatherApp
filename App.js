import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: ''
    }
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
    return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        weather: responseJson
      })
    })
  }

  componentDidMount = () => {
    this.getWeather();
  }

  render() {
    if(this.state.weather === '') {
      return (
        <View style = {{backgroundColor:"lightyellow"}}> 
          <Text style = {{fontSize:25, padding:2, marginTop:40, marginBottom:10, alignSelf:"center", color:"black", fontWeight: "bold"}}> Forecast </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, marginBottom: 70, color:"black"}}> Loading... </Text>
        </View>
      );
    } else {
      return (
        <View style = {{backgroundColor:"lightyellow"}}> 
          <Text style = {{fontSize:25, padding:2, marginTop:40, marginBottom:10, alignSelf:"center", color:"black", fontWeight: "bold"}}> Forecast </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, color:"black"}}> Weather: {this.state.weather.weather[0].description} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, color:"black"}}> Wind Speed: {this.state.weather.wind.speed} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, color:"black"}}> Temperature: {this.state.weather.main.temp} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, color:"black"}}> Minimum Temperature: {this.state.weather.main.temp_min} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, marginBottom: 70, color:"black"}}> Maxium Temperature: {this.state.weather.main.temp_max} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, marginBottom: 70, color:"black"}}> Pressure: {this.state.weather.main.pressure} </Text>
          <Text style = {{fontSize:18, padding:2, marginLeft:20, marginBottom: 70, color:"black"}}> Humidity: {this.state.weather.main.humidity} </Text>
        </View>
      );
    }
  }
}
