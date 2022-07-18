import Slider from '@react-native-community/slider';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveWeather } from '../redux/actionWeather';
import { WeatherMiniIcon } from './WeatherMiniIcon';
import { WeatherMiniIconLoad } from './load/WeatherMiniIconLoad';
import { THEME } from '../theme/theme';


export const SliderWeather = () => {
   const dispatch = useDispatch();


   const infoSlider = useSelector(state => state.activeInfoWeather);
   const dayWeek = useSelector(state => state.dayOrWeek);
   const load = useSelector(state => state.load);
   const activeWeather = useSelector(state => state.activeWeather);

   const content = infoSlider.map((item, i) => {
      const arr = [];
      if (dayWeek === true) {
         if (i % 2 === 0) {
            arr.push(<WeatherMiniIcon key={Date.now() + Math.random()} data={item} day={dayWeek} />);
         } else {
            arr.push(<View key={Date.now() + Math.random()} style={styles.smallLine} />)
         }
      } else {
         arr.push(<WeatherMiniIcon key={Date.now() + Math.random()} data={item} />);
         if (i < 5) {
            arr.push(<View key={i} style={styles.smallLine} />)
         }
      }
      return arr;
   })

   return (
      <View style={styles.wrapper}>
         <Slider
            thumbImage={require('../../assets/polygon.png')}
            maximumTrackTintColor='#fff'
            minimumTrackTintColor='transparent'
            maximumValue={dayWeek ? 10 : 5}
            value={activeWeather}
            step={1}
            onValueChange={(e) => dispatch(setActiveWeather(e))}
            style={{ width: '97%', position: 'relative', left: 5 }}
         />
         <View style={styles.containerLine}>
            {load ? content : <View style={styles.containerLine}>
               <WeatherMiniIconLoad />
               <View style={styles.smallLine} />
               <WeatherMiniIconLoad />
               <View style={styles.smallLine} />
               <WeatherMiniIconLoad />
               <View style={styles.smallLine} />
               <WeatherMiniIconLoad />
               <View style={styles.smallLine} />
               <WeatherMiniIconLoad />
               <View style={styles.smallLine} />
               <WeatherMiniIconLoad />
            </View>}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingTop: 22,
      paddingHorizontal: THEME.PADDING_HOR
   },

   smallLine: {
      width: 1,
      height: 8,
      opacity: 0.2,
      backgroundColor: '#fff',
      marginTop: 10
   },
   containerLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
   }
})