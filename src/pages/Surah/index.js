import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Surah = () => {
  const { order } = useParams()
  const [surah, setSurah] = useState({})

  useEffect(() => {
    axios.get(`https://equran.id/api/surat/${order}`)
      .then(res => setSurah(res.data))
  }, [order])
  
  if (surah) {
    return (
      <>
        <h1 className='text-center text-4xl'>{surah.nama}</h1>
      </>
    )
  }

  return (
    <p>kosong</p>
  )
}

export default Surah