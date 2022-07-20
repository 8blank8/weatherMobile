const initialState = {
   temp: 14,
   location: {},
   activeWeather: 0,
   load: false,
   daily: [],
   dayOrWeek: true,
   activeInfoWeather: [],
   cityName: { city: '-' },
   modal: false,
}

export const reducerWeather = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_LOCATION':
         return {
            ...state,
            location: action.payload
         };
      case 'ACTIVE_WEATHER':
         return {
            ...state,
            activeWeather: action.payload
         }
      case 'LOAD':
         return {
            ...state,
            load: action.payload
         }
      case 'SET_DAILY':
         return {
            ...state,
            daily: action.payload
         }
      case 'DAY_OR_WEEK':
         return {
            ...state,
            dayOrWeek: !state.dayOrWeek
         }
      case 'ACTIVE_INFO_WEATHER':
         return {
            ...state,
            activeInfoWeather: action.payload
         }
      case 'SET_CITY_NAME':
         return {
            ...state,
            cityName: action.payload
         }
      case 'SET_MODAL':
         return {
            ...state,
            modal: action.payload
         }
      default:
         return state;
   }
}