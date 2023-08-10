// import React from "react";
import LottieAnimationWrapper from '@components/lottie-animations/LottieAnimationWrapper'
import React from 'react'
import noDataFoundJson from "../../assets/lottie-json/pageNotFound.json";
export default function PageNotFound() {
  return (
    <div className='flex justify-center items-center flex-col gap-4 h-screen bg-gray-200 dark:bg-gray-900'>
      <LottieAnimationWrapper lottieClass="h-72 md:h-96" animationData={noDataFoundJson} />
      <div className='text-center text-2xl font-bold text-gray-600 dark:text-gray-200 '>
        "Oops! Looks like this page took a wrong turn at the binary crossroads."
      </div>
      <div className='text-center text-4xl font-semibold text-gray-400 dark:text-gray-400 '>
        Page Not Found
      </div>
    </div>
  )
}