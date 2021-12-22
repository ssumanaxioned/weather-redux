import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import WeatherReducer from "./Reducer/WeatherReducer";

const store = createStore(WeatherReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;