import React from 'react'
import QuranArabic from "../../../assets/images/quran-kaligrafi.png";
import SurahBadge from '../../atom/SurahBadge'

const Hero = () => {
  return (
    <div className="flex items-center flex-col py-8 lg:py-12">
      <img className="w-1/2 lg:w-1/4" src={QuranArabic} alt="" />
      <input type="text" className="border-2 rounded-2xl my-4 py-2 px-4 lg:px-8 w-full lg:w-3/5" placeholder="Mau baca surah apa?" />
      <div className="flex flex-wrap justify-center">
        <SurahBadge text="Al-Kahfi" />
        <SurahBadge text="Al-Mulk" />
        <SurahBadge text="Yasin" />
        <SurahBadge text="Al-Waqiah" />
        <SurahBadge text="Yusuf" />
      </div>
    </div>
  )
}

export default Hero