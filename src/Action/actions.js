import axios from "axios"

export const fetchWeatherRequest =()=> {
  return {
    type: 'FETCH_WEATHER_REQUEST'
  }
}

export const fetchWeatherSuccess =data=> {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: data
  }
}
export const fetchWeatherFailure =error=> {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: error
  }
}

export const fetchWeatherDeatails =(url)=>{
  return (dispatch) => {
    dispatch(fetchWeatherRequest)
    axios.get(url)
    .then(response => {
      const weather = response.data
      dispatch(fetchWeatherSuccess(weather))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchWeatherFailure(errorMsg))
    })
  }
}