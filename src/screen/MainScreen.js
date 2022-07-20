import { View, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location';
import * as Font from 'expo-font';

import { LocationService } from '../services/LocationService';
import { WeatherService } from "../services/WeatherService";
import { IconService } from '../services/IconService';
import { getlocation, setLoad, setDaily, activeInfoWeather, setCityName, setInfoSlider } from "../redux/actionWeather";

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
   const { addIcon } = IconService();

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
               dispatch(setInfoSlider(res));
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