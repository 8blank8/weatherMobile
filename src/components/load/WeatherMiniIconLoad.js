import { View, StyleSheet, Image, ImageBackgroundComponent } from 'react-native';
import { TextLight } from "../../ui/TextLight";
import { TextBold } from '../../ui/TextBold';
import { Loading } from './Loading';

export const WeatherMiniIconLoad = () => {
   return (
      <View>
         <View style={styles.containerBigLine}>
            <View style={styles.bigLine} />
            <TextLight >-</TextLight>
         </View>
         <View style={{ alignItems: "center" }}>
            <Loading style={{ width: 43, height: 43 }} />
            <TextBold style={styles.textBold} >--°C</TextBold>
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
      width: 41,
      height: 31,
      marginTop: 14
   },
   textBold: {
      marginTop: 13,
      fontSize: 13
   }
})