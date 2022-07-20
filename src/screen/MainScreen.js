import { View, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location';
import * as Font from 'expo-font';

import { LocationService } from '../services/LocationService';
import { WeatherService } from "../services/WeatherService";
import { getlocation, setLoad, setDaily, activeInfoWeather, setCityName } from "../redux/actionWeather";

import { Navbar } from "../components/Navbar";
import { WeatherIcon } from "../components/WeatherIcon";
import { InfoHours } from "../components/InfoHours";
import { SliderWeather } from "../components/SliderWeather";
import { ToogleWeather } from "../components/ToogleWeather";
import { ModalWeather } from "../components/ModalWeather";
import { Humidity } from "../components/Humidity";
import { Sunrise } from "../components/Sunrise";

import { THEME } from "../theme/theme";

SplashScreen.preventAutoHideAsync();

async function loadApplication() {
   await Font.loadAsync({
      'helvetica-regular': require('../../assets/fonts/HelveticaRegular.ttf'),
      'helvetica-light': require('../../assets/fonts/HelveticaLight.ttf'),
      'helvetica-bold': require('../../assets/fonts/HelveticaBold.ttf')
   });
}

export const MainScreen = () => {
   const [appIsReady, setAppIsReady] = useState(false);
   const dispatch = useDispatch();
   const { getWeatherHours, getWeatherDaily } = WeatherService();
   const { getCityName } = LocationService();
   const date = new Date();

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
      wind: require('../../assets/weathers/wind.png'),
      ellipse: require('../../assets/ellipse.png'),
      ellipseBlue: require('../../assets/EllipseBlue.png')
   }

   const addIcon = (data) => {
      const res = data.map((item) => {
         if (item.id >= 210 && item.id <= 221) {
            return {
               ...item,
               icon: waetherIcons.thunderstorm,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if ((item.id >= 200 && item.id <= 202) || (item.id >= 230 && item.id <= 232)) {
            return {
               ...item,
               icon: waetherIcons.thunderstormRain,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if (item.id >= 500 & item.id <= 501) {
            return {
               ...item,
               icon: waetherIcons.lightRain,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if (item.id >= 502 && item.id <= 531) {
            return {
               ...item,
               icon: waetherIcons.heavyRain,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if (item.id >= 600 && item.id <= 601) {
            return {
               ...item,
               icon: waetherIcons.lightSnowfall,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if (item.id >= 602 && item.id <= 622) {
            return {
               ...item,
               icon: waetherIcons.heavySnowfall,
               ellipse: waetherIcons.ellipseBlue
            }
         } else if (item.id === 800) {
            if (date.getHours() > 23 || date.getHours() > 0 && date.getHours() < 5) {
               return {
                  ...item,
                  icon: waetherIcons.moon,
                  ellipse: waetherIcons.ellipse
               }
            } else {
               return {
                  ...item,
                  icon: waetherIcons.sun,
                  ellipse: waetherIcons.ellipse
               }
            }
         } else if (item.id === 801) {
            if (date.getHours() > 23 || date.getHours() > 0 && date.getHours() < 5) {
               return {
                  ...item,
                  icon: waetherIcons.cloudMoon,
                  ellipse: waetherIcons.ellipse
               }
            } else {
               return {
                  ...item,
                  icon: waetherIcons.oblachno,
                  ellipse: waetherIcons.ellipse
               }
            }

         } else if (item.id >= 802 && item.id <= 804) {
            return {
               ...item,
               icon: waetherIcons.cloud,
               ellipse: waetherIcons.ellipseBlue
            }
         }
         return item;
      })

      return res;
   }


   useEffect(() => {
      (async () => {
         try {
            loadApplication();

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
            getCityName(location.coords.latitude, location.coords.longitude).then(data => dispatch(setCityName(data)));
            dispatch(getlocation(loc));
            getWeatherDaily(loc).then(data => {
               const res = addIcon(data);

               dispatch(setDaily(res));
            });
            getWeatherHours(loc).then(data => {
               const res = addIcon(data);

               dispatch(activeInfoWeather(res));
               dispatch(setLoad(true));
            });

         } catch {
            console.warn(e);
         } finally {
            setAppIsReady(true);
         }
      })();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }


   return (
      <View style={styles.wrapper} onLayout={onLayoutRootView}>
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
         <ModalWeather />
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