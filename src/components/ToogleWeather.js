import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { TextLight } from "../ui/TextLight";
import { dayOrWeek, activeInfoWeather } from '../redux/actionWeather';

import { THEME } from '../theme/theme';

export const ToogleWeather = () => {
   const dispatch = useDispatch();
   const dayWeek = useSelector(state => state.dayOrWeek);
   const infoSlider = useSelector(state => state.infoSlider);
   const daily = useSelector(state => state.daily);

   return (
      <View style={styles.wrapper}>
         <Image style={styles.img} source={require('../../assets/backgroundToogle.png')} />
         <TouchableOpacity style={styles.toucheble} onPress={() => {
            dayWeek ? dispatch(activeInfoWeather(daily)) : dispatch(activeInfoWeather(infoSlider));
            dispatch(dayOrWeek());
         }}>
            <TextLight>
               Прогноз на неделю
            </TextLight>
            <View style={styles.tringle}><Feather name="triangle" color={'#fff'} size={15} /></View>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingVertical: 10,
   },
   tringle: {
      marginLeft: 5,
      transform: [{ rotate: '90deg' }],
   },
   img: {
      width: '100%',
      position: "absolute",
      top: 0,
      left: 0,
   },
   toucheble: {
      flexDirection: "row",
      paddingHorizontal: THEME.PADDING_HOR
   }
})