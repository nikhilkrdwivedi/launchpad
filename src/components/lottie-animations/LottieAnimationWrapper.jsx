

import React from "react";
import { useLottie } from "lottie-react";

const LottieAnimationWrapper = ({animationData,lottieClass,loop=true}) => {
  // console.log({animationData})
  const options = {
    animationData,
    loop
  };
  const style = {
    height: '100%',
    // border: 3,
    // borderStyle: "solid",
    // borderRadius: 7,
    // backgroundColor: 'red'
  };
  

  const { View } = useLottie(options,style);

  return <div className={lottieClass}>{View}</div>;
};

export default LottieAnimationWrapper;