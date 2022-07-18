export const WeatherService = () => {
   const _apiKey = 'ef5c12f3340e7fb1585b95d84fe57fa8';

   const addZero = (data) => {
      return data < 10 ? `0${data}` : data;
   }

   const formatDate = (time) => {
      const dates = new Date(time * 1000);
      const week = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
      const mounths = ['Январь', "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

      return {
         hour: addZero(dates.getHours()),
         minute: addZero(dates.getMinutes()),
         date: dates.getDate(),
         day: week[dates.getDay()],
         mounth: mounths[dates.getMonth()],
         mounthNum: addZero(dates.getMonth())
      }

   }

   const addWind = (wind) => {
      if (wind > 0 && wind <= 45) {
         return 'СВ'
      } else if (wind > 45 && wind <= 90) {
         return 'В'
      } else if (wind > 90 && wind <= 135) {
         return 'ЮВ'
      } else if (wind > 135 && wind <= 180) {
         return 'Ю'
      } else if (wind > 180 && wind <= 225) {
         return 'ЮЗ'
      } else if (wind > 225 && wind <= 270) {
         return "З"
      } else if (wind > 270 && wind <= 315) {
         return 'СЗ'
      } else {
         return 'С'
      }
   }

   const getWeatherHours = async (location) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=daily,current&units=metric&lang=ru&appid=${_apiKey}`)
         .then(data => data.json())
      return _transformHours(res);
   }

   const getWeatherDaily = async (location) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=hourly,current&units=metric&lang=ru&appid=${_apiKey}`)
         .then(data => data.json());
      return _transformDaily(res);
   }


   const _transformDaily = (weather) => {
      const weatherArr = weather.daily.map((item, i) => {
         if (i <= 5) {
            const timeSunriseDate = new Date(item.sunrise * 1000);
            const timeSunsetDate = new Date(item.sunset * 1000);

            const elem = {
               date: formatDate(item.dt),
               temp: Math.round(item.temp.max),
               humidity: item.humidity,
               wind_speed: Math.round(item.wind_speed),
               pop: item.pop * 100,
               id: item.weather[0].id,
               description: item.weather[0].description,
               feels_like: Math.round(item.feels_like.day),
               uvi: Math.round(item.uvi),
               wind_deg: addWind(item.wind_deg),
               sunrise: item.sunrise,
               sunset: item.sunset,
               moonrise: item.moonrise,
               moonset: item.moonset,
               timeSunrise: `${addZero(timeSunriseDate.getHours())}:${addZero(timeSunriseDate.getMinutes())}`,
               timeSunset: `${addZero(timeSunsetDate.getHours())}:${addZero(timeSunsetDate.getMinutes())}`
            }
            return elem;
         }
      });

      const arr = weatherArr.filter(item => {
         if (item !== undefined || item !== null) {
            return item;
         }
      });
      return arr;
   }

   const _transformHours = (weather) => {
      let num = 0;

      const weatherArr = weather.hourly.map((item, i) => {
         if (i === num && i <= 20) {
            num += 2;

            const elem = {
               date: formatDate(item.dt),
               temp: Math.round(item.temp),
               humidity: item.humidity,
               wind_speed: Math.round(item.wind_speed),
               pop: item.pop * 100,
               id: item.weather[0].id,
               description: item.weather[0].description,
               feels_like: Math.round(item.feels_like),
               uvi: Math.round(item.uvi),
               wind_deg: addWind(item.wind_deg)
            }
            return elem;
         }
      })

      const arr = weatherArr.filter(item => {
         if (item !== undefined || item !== null) {
            return item;
         }
      });
      return arr;

   }

   return { getWeatherHours, getWeatherDaily };
}
