import React from "react";
import { Image, Text, View } from "react-native";
import Gradient from "../../components/colors/gradient";


const NotEligible = () => {
  return (
   <Gradient>
    <View>
      <Image source={require('../../assets/white_confused_5.svg')}></Image>
      <View>
        <Text>We're bloody sorry...</Text>
      </View>
    </View>
   </Gradient>
  );
};

export default NotEligible;
