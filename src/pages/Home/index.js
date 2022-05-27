import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/templates/Hero";
import SurahCard from "../../components/mollecule/SurahCard";

function App() {
  const [allSurah, setAllSurah] = useState(null);

  useEffect(() => {
    axios.get('https://equran.id/api/surat')
      .then(res => {
        setAllSurah(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function showAllSurah() {
    if (allSurah) {
      return allSurah.map(surah => {
        return (
          <SurahCard key={surah.nomor} surah={surah} />
        )
      })
    } else {
      return (
        <div>
          kosong
        </div>
      )
    }
  }

  return (
    <>
      <Hero />
      <div className="my-4 flex border-b">
        <h2 className="px-4 pb-2 border-b border-b-2 border-black">Surah</h2>
        <h2 className="px-4">Juz</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {showAllSurah()}
      </div>
    </>
  );
}

export default App;
