import { View, StyleSheet, Image } from "react-native";
import { TextLight } from "../ui/TextLight";
import { TextBold } from '../ui/TextBold';

export const WeatherMiniIcon = ({ data, day }) => {

   const { date, temp, icon } = data;

   return (
      <View>
         <View style={styles.containerBigLine}>
            <View style={styles.bigLine} />
            <TextLight >{day ? `${date.hour}:${date.minute}` : `${date.date}.${date.mounthNum}`}</TextLight>
         </View>
         <View style={{ alignItems: "center" }}>
            <Image style={styles.image} source={icon} />
            <TextBold style={styles.textBold} >{temp}°C</TextBold>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   containerBigLine: {
      alignItems: 'center'
   },
   bigLine: {
      width: 1,
      height: 15,
      opacity: 0.2,
      backgroundColor: '#fff',
      marginVertical: 10
   },
   image: {
      width: 43,
      height: 43,
      marginTop: 14
   },
   textBold: {
      marginTop: 13,
      fontSize: 13
   }
})