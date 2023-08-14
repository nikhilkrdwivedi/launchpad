import { useLottie } from "lottie-react";
import PropTypes from "prop-types";
const LottieAnimationWrapper = ({
  animationData,
  lottieClass,
  loop = true,
}) => {
  const options = {
    animationData,
    loop,
  };
  const style = {
    height: "100%",
    // border: 3,
    // borderStyle: "solid",
    // borderRadius: 7,
    // backgroundColor: 'red'
  };

  const { View } = useLottie(options, style);

  return <div className={lottieClass}>{View}</div>;
};

LottieAnimationWrapper.propTypes = {
  animationData: PropTypes.any,
  lottieClass: PropTypes.string,
  loop: PropTypes.bool,
};

LottieAnimationWrapper.defaultProps = {
  animationData: {},
  lottieClass: "",
  loop: true,
};
export default LottieAnimationWrapper;
