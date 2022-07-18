export const LocationService = () => {
   const _apiKey = '86b47c248eb7a8eebe0901cce7287bc413ee18d0';
   const _url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';

   const getCityName = async (lat, lon) => {
      const res = await fetch(_url, {
         method: 'POST',
         mode: 'cors',
         headers: {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + _apiKey
         },
         body: JSON.stringify({ lat, lon })
      }).then(data => data.json());

      return _transformNameCity(res);
   }


   const _transformNameCity = (data) => {
      return {
         city: data.suggestions[0].data.city
      }
   }

   return { getCityName };
}