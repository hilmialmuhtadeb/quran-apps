import React from 'react'

const SurahBadge = (props) => {
  return (
    <a href={props.url} className="block mx-2 my-1 px-4 py-1 rounded-xl bg-teal-300 duration-150 hover:bg-teal-400 shadow">
      { props.text }
    </a>
  )
}

export default SurahBadge