import { View, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location';

import { WeatherService } from "../services/WeatherService";
import { getlocation, addInfoSlider, setLoad, setDaily, activeInfoWeather } from "../redux/actionWeather";

import { Navbar } from "../components/Navbar";
import { WeatherIcon } from "../components/WeatherIcon";
import { InfoHours } from "../components/InfoHours";
import { SliderWeather } from "../components/SliderWeather";
import { ToogleWeather } from "../components/ToogleWeather";
import { ModalWeather } from "../components/ModalWeather";
import { Humidity } from "../components/Humidity";
import { Sunrise } from "../components/Sunrise";

import { THEME } from "../theme/theme";

export const MainScreen = () => {
   const waetherIcons = {
      cloud: require('../../assets/weathers/cloud.png'),
      oblachno: require('../../assets/weathers/oblachno.png'),
      cloudMoon: require('../../assets/weathers/cloudMoon.png'),
      heavyRain: require('../../assets/weathers/heavyRain.png'),
      heavySnowfall: require('../../assets/weathers/heavySnowfall.png'),
      lightRain: require('../../assets/weathers/lightRain.png'),
      lightSnowfall: require('../../assets/weathers/lightSnowfall.png'),
      moon: require('../../assets/weathers/Moon.png'),
      sun: require('../../assets/weathers/sun.png'),
      thunderstorm: require('../../assets/weathers/thunderstorm.png'),
      thunderstormRain: require('../../assets/weathers/thunderstormRain.png'),
      wind: require('../../assets/weathers/wind.png')
   }

   const addIcon = (data) => {
      const res = data.map((item) => {
         if (item.id >= 210 && item.id <= 221) {
            return {
               ...item,
               icon: waetherIcons.thunderstorm
            }
         } else if ((item.id >= 200 && item.id <= 202) || (item.id >= 230 && item.id <= 232)) {
            return {
               ...item,
               icon: waetherIcons.thunderstormRain
            }
         } else if (item.id >= 500 & item.id <= 501) {
            return {
               ...item,
               icon: waetherIcons.lightRain
            }
         } else if (item.id >= 502 && item.id <= 531) {
            return {
               ...item,
               icon: waetherIcons.heavyRain
            }
         } else if (item.id >= 600 && item.id <= 601) {
            return {
               ...item,
               icon: waetherIcons.lightSnowfall
            }
         } else if (item.id >= 602 && item.id <= 622) {
            return {
               ...item,
               icon: waetherIcons.heavySnowfall
            }
         } else if (item.id === 800) {
            return {
               ...item,
               icon: waetherIcons.sun
            }
         } else if (item.id === 801) {
            return {
               ...item,
               icon: waetherIcons.oblachno
            }
         } else if (item.id >= 802 && item.id <= 804) {
            return {
               ...item,
               icon: waetherIcons.cloud
            }
         }
         return item;
      })

      return res;
   }

   const [modalVisible, setModalVisible] = useState(false);

   const location = useSelector(state => state.location);
   const dispatch = useDispatch();
   const { getWeatherHours, getWeatherDaily } = WeatherService();

   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
         }

         let location = await Location.getCurrentPositionAsync({});

         const loc = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
         }

         dispatch(getlocation(loc));
         getWeatherDaily(loc).then(data => {
            const res = addIcon(data);

            dispatch(setDaily(res));
         });
         getWeatherHours(loc).then(data => {
            const res = addIcon(data);

            dispatch(addInfoSlider(res));
            dispatch(activeInfoWeather(res));
            dispatch(setLoad(true));
         });

      })();
   }, []);

   return (
      <View style={styles.wrapper}>
         <Image style={styles.img} source={require('../../assets/background.png')} />
         <View style={styles.wrapperPadding}>
            <ScrollView  >
               <Navbar />
               <WeatherIcon />
               <InfoHours />
               <SliderWeather />
               <Humidity />
               <Sunrise />
            </ScrollView>
            <ToogleWeather />
         </View>
         <ModalWeather modalVisible={modalVisible} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      paddingTop: StatusBar.currentHeight,
   },

   img: {
      width: "100%",
      height: '100%',
      position: "absolute",
      top: 0,
      left: 0,
   },

   wrapperPadding: {
      height: '100%'
   },
})