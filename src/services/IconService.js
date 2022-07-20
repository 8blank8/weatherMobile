export const IconService = () => {
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

   return { addIcon };
}