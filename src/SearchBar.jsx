import React from 'react'

export default function SearchBar({search,hdlChange}) {

  return (
    <input type="text" value={search} onChange={hdlChange} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
  )
}
