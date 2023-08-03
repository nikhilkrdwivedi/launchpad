import { useState } from 'react'
import './App.css'
import { useTheme } from '@contexts/ThemeContext'
import TopHeader from '@components/headers/TopHeader'
import HomePageBanner from '@components/banners/HomePageBanner'
import Footers from './components/headers/Footers'
const light = ['bg-red-900', 'bg-green-900', 'bg-yellow-900', 'bg-pink-900']
const dark = ['dark:bg-red-900', 'dark:bg-green-900', 'dark:bg-yellow-900', 'dark:bg-pink-900'].reverse()
function App() {
  const [count, setCount] = useState(0)
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className='bg-white dark:bg-gray-800'>
    <TopHeader />
    <HomePageBanner />
    <Footers />
    {/* {[2,1,1,1].map((item, index)=>(
      <div key={index} className={`h-96 flex items-center`}>
      <div key={index} className={`h-96 flex items-center ${dark[index]} ${light[index]} dark:text-white`}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ad magnam iste a minus, recusandae in repellendus, neque ex culpa doloremque, excepturi illo natus pariatur aspernatur. Dolores nemo pariatur nobis.</p>
        
      </div>
    ))} */}
    </div>
  )
}

export default App
