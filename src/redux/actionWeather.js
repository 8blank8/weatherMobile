
export const getlocation = (location) => {
   return {
      type: 'GET_LOCATION',
      payload: location
   }
}

export const setActiveWeather = (weather) => {
   return {
      type: 'ACTIVE_WEATHER',
      payload: weather
   }
}

export const setLoad = (load) => {
   return {
      type: 'LOAD',
      payload: load
   }
}

export const setDaily = (daily) => {
   return {
      type: 'SET_DAILY',
      payload: daily
   }
}

export const dayOrWeek = () => {
   return {
      type: 'DAY_OR_WEEK'
   }
}

export const activeInfoWeather = (weather) => {
   return {
      type: 'ACTIVE_INFO_WEATHER',
      payload: weather
   }
}

export const setCityName = (name) => {
   return {
      type: 'SET_CITY_NAME',
      payload: name
   }
}

export const setModal = (modal) => {
   return {
      type: 'SET_MODAL',
      payload: modal
   }
}