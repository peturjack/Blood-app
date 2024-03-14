import React, { FC, ReactElement, useEffect } from "react";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type Props = {
  children: JSX.Element;
  selected: boolean;
};

const NavIcon = ({ children, selected }: Props) => {
  const width = useSharedValue(60);
  const height = useSharedValue(60);
  const marginTop = useSharedValue(0);
  const backgroundColor = useSharedValue("#F23E50");
  const borderColor = useSharedValue("white");
  useEffect(() => {
    handleEnlarge();
  }, [selected]);
  const handleEnlarge = () => {
    console.log("Hello");
    if (selected) {
      width.value = withSpring(70);
      height.value = withSpring(70);
      marginTop.value = withSpring(-25);
    } else {
      width.value = withSpring(60);
      height.value = withSpring(60);
      marginTop.value = withSpring(0);
    }
  };
  return (
    <Animated.View
      onTouchStart={handleEnlarge}
      style={{
        width,
        height,
        marginTop,
        backgroundColor,
        borderColor,
      }}
      className={` rounded-full bg-blood flex justify-center items-center`}
    >
      {children}
    </Animated.View>
  );
};

export default NavIcon;
