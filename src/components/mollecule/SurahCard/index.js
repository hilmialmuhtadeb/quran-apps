import React from 'react'
import { Link } from 'react-router-dom'
import './surahCard.css'

const SurahCard = (props) => {
  const surah = props.surah
  
  return (
    <Link to={'/surah/' + surah.nomor}>
      <div className='flex font-semibold border border-1 group rounded-md items-center p-4 hover:bg-gray-100 hover:border-teal-600'>
        <div className="grow-0 nomor rounded group-hover:bg-teal-600 group-hover:text-white">
          <p>{surah.nomor}</p>
        </div>
        <div className="grow mx-6">
          <p>{surah.nama_latin}</p>
          <small className='text-gray-500 group-hover:text-teal-700'>{surah.arti}</small>
        </div>
        <div className="grow-0 text-center">
          <p className='text-lg group-hover:text-teal-700'>{surah.nama}</p>
          <small>{surah.jumlah_ayat} ayat</small>
        </div>
      </div>
    </Link>
  )
}

export default SurahCard