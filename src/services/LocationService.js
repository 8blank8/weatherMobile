export const LocationService = () => {
   const _apiKey = '86b47c248eb7a8eebe0901cce7287bc413ee18d0';
   const _url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs';

   const options = {
      method: "POST",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": "Token " + _apiKey
      }
   }



   const getCityCoords = async (query) => {
      const res = await fetch(`${_url}/suggest/address`, {
         ...options,
         body: JSON.stringify({ query })
      })
         .then(response => response.json());
      return _transformCityCoords(res);
   }


   const getCityName = async (lat, lon) => {
      const res = await fetch(`${_url}/geolocate/address`, {
         ...options,
         body: JSON.stringify({ lat, lon })
      }).then(data => data.json());

      return _transformNameCity(res);
   }


   const _transformNameCity = (data) => {
      return {
         city: data.suggestions[0].data.city
      }
   }

   const _transformCityCoords = (item) => {
      const arr = item.suggestions.map(item => {
         if (item.data.fias_level === '4' || item.data.fias_level === '6') {
            return {
               city: item.data.city,
               lat: item.data.geo_lat,
               lon: item.data.geo_lon
            }
         }
      })

      return arr.filter(Boolean);
   }

   return { getCityName, getCityCoords };
}