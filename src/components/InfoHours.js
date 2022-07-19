import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { THEME } from '../theme/theme';

import { TextRegular } from '../ui/TextRegular';
import { TextLight } from '../ui/TextLight';
import { InfoHoursLoad } from './load/InfoHoursLoad';
import { Loading } from './load/Loading';

export const InfoHours = props => {

   const activeWeather = useSelector(state => state.activeWeather);
   const weather = useSelector(state => state.activeInfoWeather[activeWeather]);
   const load = useSelector(state => state.load);

   // const { temp, date, pop, humidity, wind_speed, description } = weather;

   return (
      <View>
         <View style={styles.wrapper}>
            <View>
               {load ? <TextRegular style={styles.textDay}>{weather.date.day}, {weather.date.date} {weather.date.mounth}</TextRegular> : <Loading style={{ height: 15 }} />}
               {load ? <View style={styles.wrapperTemperature}>
                  <TextLight style={{ fontSize: 100 }}>{weather.temp}</TextLight>
                  <TextLight style={{ fontSize: 30, paddingTop: 15 }}>°C</TextLight>
               </View> : <Loading style={{ marginTop: 20 }} />}
               {load ? <TextLight style={{ fontSize: 14 }}>{weather.description}</TextLight> : <Loading style={{ height: 15, marginTop: 20 }} />}
            </View>
            <View style={styles.containerTwo}>
               {load ? <TextRegular style={styles.textCharacters}>Осадки: {weather.pop.toFixed(0)}%</TextRegular> : <Loading style={{ height: 15, width: 93, marginTop: 5 }} />}
               {load ? <TextRegular style={styles.textCharacters}>Влажность: {weather.humidity}%</TextRegular> : <Loading style={{ height: 15, width: 93, marginTop: 5 }} />}
               {load ? <TextRegular style={styles.textCharacters}>Ветер: {weather.wind_speed} м/с</TextRegular> : <Loading style={{ height: 15, width: 93, marginTop: 5 }} />}
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: THEME.PADDING_HOR
   },
   textDay: {
      opacity: 0.5,
      fontSize: THEME.FONT_SIZE
   },
   wrapperTemperature: {
      flexDirection: 'row',
      alignItems: 'flex-start'
   },
   containerTwo: {
      justifyContent: 'flex-end'
   },
   textCharacters: {
      fontSize: THEME.FONT_SIZE,
      paddingTop: 5
   }
})