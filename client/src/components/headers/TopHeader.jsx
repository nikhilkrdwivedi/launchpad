import React from 'react';
import darkLogo from '@assets/dark-logo.png';
import lightLogo from '@assets/light-logo.png';
import { useTheme } from '@contexts/ThemeContext'

export default function TopHeader() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className='flex justify-between px-4 md:px-24 py-4 backdrop-filter bg-transparent backdrop-blur-lg bg-opacity-70 sticky -top-0.5 bottom-0.5 border-b-2 border-gray-200 dark:border-gray-400 rounded-md'>
        <div>
            <img src={!isDarkMode ? darkLogo: lightLogo} height={48} width={48} />
        </div>
        <div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-black text-white"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
    </div>
  )
}
