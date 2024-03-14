import React, { FC, ReactElement, useEffect } from "react";

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
    if (selected) {
      width.value = withSpring(80);
      height.value = withSpring(80);
      marginTop.value = withSpring(-25);
    } else {
      width.value = withSpring(70);
      height.value = withSpring(70);
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
