import { View, Image, StyleSheet } from "react-native";
import { THEME } from "../theme/theme";
import { useSelector } from "react-redux";

import { TextRegular } from "../ui/TextRegular";
import { Loading } from "./load/Loading";


export const Humidity = () => {

   const activeWeather = useSelector(state => state.activeWeather);
   const weather = useSelector(state => state.infoSlider[activeWeather]);
   const load = useSelector(state => state.load);

   return (
      <View style={styles.wrapper}>
         <TextRegular style={styles.title}>ВЛАЖНОСТЬ И ВЕТЕР</TextRegular>
         <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/weathers/humWind.png')} />
            <View style={styles.info}>
               {load ? <View style={{ ...styles.textContainer, paddingTop: 0 }}>
                  <TextRegular style={styles.text}>Влажность:</TextRegular>
                  <TextRegular> {weather.humidity}%</TextRegular>
               </View> : <Loading style={{ width: 133, height: 15 }} />}
               {load ? <View style={styles.textContainer}>
                  <TextRegular style={styles.text}>Ощущение:</TextRegular>
                  <TextRegular> {weather.feels_like}°C</TextRegular>
               </View> : <Loading style={{ width: 133, height: 15, marginTop: 12 }} />}
               {load ? <View style={styles.textContainer}>
                  <TextRegular style={styles.text}>Индекс УФ:</TextRegular>
                  <TextRegular> {weather.uvi}</TextRegular>
               </View> : <Loading style={{ width: 133, height: 15, marginTop: 12 }} />}
               {load ? <View style={styles.textContainer}>
                  <TextRegular style={styles.text}>Направление:</TextRegular>
                  <TextRegular> {weather.wind_deg}</TextRegular>
               </View> : <Loading style={{ width: 133, height: 15, marginTop: 12 }} />}
               {load ? <View style={styles.textContainer}>
                  <TextRegular style={styles.text}>Скорость:</TextRegular>
                  <TextRegular> {weather.wind_speed} м/с</TextRegular>
               </View> : <Loading style={{ width: 133, height: 15, marginTop: 12 }} />}
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: THEME.PADDING_HOR
   },

   title: {
      paddingTop: 70
   },

   container: {
      paddingTop: 50,
      flexDirection: "row",
      justifyContent: "space-between"
   },

   textContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 10
   },

   text: {
      opacity: 0.5
   },

   info: {
      width: 115
   }
})