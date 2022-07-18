import { Provider } from 'react-redux';

import store from './src/redux/StoreWeather';

import { MainScreen } from './src/screen/MainScreen';

export default function App() {


   return (
      <Provider store={store} >
         <MainScreen />
      </Provider>
   );
}
