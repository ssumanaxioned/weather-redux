const initialState = {
  loading: true,
  name: '',
  curTemp: '',
  minTemp: '',
  maxTemp: '',
  desc: '',
  error: ''
}

const WeatherReducer =(state = initialState, action)=> {
  console.log('action: ', action);
  switch(action.type) {
    case 'FETCH_WEATHER_REQUEST' :
      return {
        ...state, loading: true
      }
      case 'FETCH_WEATHER_SUCCESS' :
        return {
          loading: false,
          name: action.payload.name,
          curTemp: action.payload.main.temp,
          minTemp: action.payload.main.temp_min,
          maxTemp: action.payload.main.temp_max,
          desc: action.payload.weather[0].main,
          error: ''
        }
        case 'FETCH_WEATHER_FAILURE' :
          return {
            ...state, loading: false,error: action.payload
          }
          default: return state;
  }
}

export default WeatherReducer;