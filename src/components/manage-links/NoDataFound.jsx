import LottieAnimationWrapper from '@components/lottie-animations/LottieAnimationWrapper'
import React from 'react'
import noDataFoundJson from "../../assets/lottie-json/noDataFound.json";
export default function NoDataFound({ loading, data = [] }) {
    console.log({ flag: data && data.length < 1, loading, data })
    return (
        (!loading && data?.length < 1) &&
        <div className='flex justify-center items-center flex-col gap-4'>
            <LottieAnimationWrapper lottieClass="h-72 md:h-96" animationData={noDataFoundJson} />
            <div className='text-center text-2xl font-bold text-gray-600 dark:text-gray-200 '>
                "Looks like the data went on vacation without telling us"
            </div>
            <div className='text-center text-lg font-semibold text-gray-400 dark:text-gray-400 '>
                Please add new links
            </div>
        </div>
    )
}
