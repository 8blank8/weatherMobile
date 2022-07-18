import { useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { THEME } from "../theme/theme";
import { TextRegular } from "../ui/TextRegular";
import { useSelector } from "react-redux";
import sun from '../../assets/sun.png';

export const Sunrise = (props) => {

   const daily = useSelector(state => state.daily);

   const [timeSunrise, setTimeSunrise] = useState('--:--');
   const [timeSunset, setTimeSunset] = useState('--:--');
   const [lineValue, setLineValue] = useState(1);
   const [bottom, setBottom] = useState(0);
   const [left, setLeft] = useState(20);
   const nowDate = Math.round(Date.now() / 1000);
   useEffect(() => {
      if (daily.length !== 0 && nowDate <= daily[0].sunset) {
         setLineValue(Math.round(((nowDate - daily[0].sunrise) * 100) / (daily[0].sunset - daily[0].sunrise)));
         setTimeSunrise(daily[0].timeSunrise);
         setTimeSunset(daily[0].timeSunset);
      } else if (daily.length !== 0 && nowDate <= daily[1].sunset) {
         setTimeSunrise(daily[1].timeSunrise);
         setTimeSunset(daily[1].timeSunset);
      }
   })

   useEffect(() => {
      if (lineValue >= 1 && lineValue <= 5) {
         setBottom(lineValue * 0);
         setLeft((lineValue * 0) + 20)
      } else if (lineValue >= 5 && lineValue <= 10) {
         setBottom(lineValue * 1.3);
         setLeft((lineValue * 0.8) + 20)
      } else if (lineValue >= 10 && lineValue <= 15) {
         setBottom(lineValue * 1.7);
         setLeft((lineValue * 1.3) + 20)
      } else if (lineValue >= 15 && lineValue <= 20) {
         setBottom(lineValue * 2);
         setLeft((lineValue * 1.6) + 20)
      } else if (lineValue >= 20 && lineValue <= 25) {
         setBottom(lineValue * 2.1);
         setLeft((lineValue * 1.9) + 20)
      } else if (lineValue >= 25 && lineValue <= 30) {
         setBottom(lineValue * 2.1);
         setLeft((lineValue * 2.1) + 20)
      } else if (lineValue >= 30 && lineValue <= 35) {
         setBottom(lineValue * 1.95);
         setLeft((lineValue * 2.35) + 20)
      } else if (lineValue >= 35 && lineValue <= 40) {
         setBottom(lineValue * 1.85);
         setLeft((lineValue * 2.45) + 20)
      } else if (lineValue >= 40 && lineValue <= 45) {
         setBottom(lineValue * 1.75);
         setLeft((lineValue * 2.6) + 20)
      } else if (lineValue >= 45 && lineValue <= 50) {
         setBottom(lineValue * 1.55);
         setLeft((lineValue * 2.73) + 20)
      } else if (lineValue >= 50 && lineValue <= 55) {
         setBottom(lineValue * 1.4);
         setLeft((lineValue * 2.8) + 20)
      } else if (lineValue >= 55 && lineValue <= 60) {
         setBottom(lineValue * 1.20);
         setLeft((lineValue * 2.88) + 20)
      } else if (lineValue >= 60 && lineValue <= 65) {
         setBottom(lineValue * 1.05);
         setLeft((lineValue * 2.9) + 20)
      } else if (lineValue >= 65 && lineValue <= 70) {
         setBottom(lineValue * 0.88);
         setLeft((lineValue * 2.99) + 20)
      } else if (lineValue >= 70 && lineValue <= 75) {
         setBottom(lineValue * 0.7);
         setLeft((lineValue * 2.99) + 20)
      } else if (lineValue >= 75 && lineValue <= 80) {
         setBottom(lineValue * 0.5);
         setLeft((lineValue * 2.99) + 20)
      } else if (lineValue >= 80 && lineValue <= 85) {
         setBottom(lineValue * 0.33);
         setLeft((lineValue * 2.99) + 20)
      } else if (lineValue >= 85 && lineValue <= 90) {
         setBottom(lineValue * 0.15);
         setLeft((lineValue * 2.95) + 20)
      } else if (lineValue >= 90 && lineValue <= 95) {
         setBottom(lineValue * -0.06);
         setLeft((lineValue * 2.89) + 20)
      } else if (lineValue >= 95 && lineValue <= 100) {
         setBottom(lineValue * -0.06);
         setLeft((lineValue * 2.79) + 20)
      }
   }, [lineValue])

   return (
      <View style={styles.wrapper}>
         <TextRegular>
            ВОСХОД И ЗАКАТ
         </TextRegular>
         <View style={styles.line}>
            <Svg
               xmlns="http://www.w3.org/2000/svg"
               width={296}
               height={99}
               fill="none"
               {...props}
            >
               <Path
                  stroke="#fff"
                  d="M1.293 98.412a159.5 159.5 0 0 1 293.205-.487"
                  opacity={0.2}
               />
            </Svg>
            {lineValue < 101 ? <Image style={{ ...styles.sun, bottom: bottom, left: left }} source={sun} /> : null}
            {lineValue < 101 ? <Image style={{ ...styles.sun, bottom: bottom - 120, left: left - 120 }} source={require('../../assets/EllipseMini.png')} /> : null}
         </View>
         <View style={styles.suntime}>
            <TextRegular>{timeSunrise}</TextRegular>
            <TextRegular>{timeSunset}</TextRegular>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: THEME.PADDING_HOR,
      paddingTop: 50,
      marginBottom: 20
   },
   line: {
      marginTop: 40,
      alignItems: "center"
   },
   sun: {
      position: "absolute",
   },
   suntime: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      marginTop: 10,
   }

})