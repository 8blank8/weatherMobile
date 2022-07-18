import { createStore } from "redux";

import { reducerWeather } from "./ruducerWeather";

const store = createStore(reducerWeather);

export default store;