import { View, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const WeatherIcon = () => {

   const activeWeather = useSelector(state => state.activeWeather);
   const infoSlider = useSelector(state => state.activeInfoWeather);
   const load = useSelector(state => state.load);

   return (
      <View style={styles.wrapper}>
         <Image source={load ? infoSlider[activeWeather].ellipse : require('../../assets/ellipse.png')} style={styles.ellipse} />
         <Image source={load ? infoSlider[activeWeather].icon : require('../../assets/weathers/sun.png')} style={styles.img} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      justifyContent: "center",
      alignItems: "center",
      height: 400
   },
   ellipse: {
      position: "absolute",
      top: -27,
   },
   img: {
      width: 200,
      height: 200
   }
})