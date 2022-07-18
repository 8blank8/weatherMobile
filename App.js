import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from 'react';
import { Provider } from 'react-redux';


import store from './src/redux/StoreWeather';

import { MainScreen } from './src/screen/MainScreen';

async function loadApplication() {
   await Font.loadAsync({
      'helvetica-regular': require('./assets/fonts/HelveticaRegular.ttf'),
      'helvetica-light': require('./assets/fonts/HelveticaLight.ttf'),
      'helvetica-bold': require('./assets/fonts/HelveticaBold.ttf')
   });
}


export default function App() {

   const [isLoad, setIsLoad] = useState(false);


   if (!isLoad) {
      return (
         <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsLoad(true)}
         />
      )
   }

   return (
      <Provider store={store} >
         <MainScreen />
      </Provider>
   );
}
