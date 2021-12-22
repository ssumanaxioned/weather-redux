import React, { Component } from 'react'
import { fetchWeatherDeatails } from '../Action/actions';
import { connect } from 'react-redux'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lon: '',
      lat: ''
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.currentLoc);
    }
    else {
      alert('geolocation not available');
    }
  }

  currentLoc = (pos) => {
    this.setState({ lon: pos.coords.longitude, lat: pos.coords.latitude })
  }

  handleOnchange = (e) => {
    this.setState({ city: e.target.value })
  }

  handleWeatherApi = (e) => {
    e.preventDefault();
    const Apikey = 'bf05f6752ed21dece19eeb54892e903c';
    if (this.state.city === '') {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${Apikey}&units=metric`
      this.props.dispatch(fetchWeatherDeatails(url))
      console.log(url);
    } else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${Apikey}&units=metric`
      this.props.dispatch(fetchWeatherDeatails(url))
      console.log(url);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleWeatherApi}>
        <input type="text" onChange={this.handleOnchange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default connect()(Search)
