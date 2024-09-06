import {useState,useEffect} from 'react'

export default function ProductList({filter,data,search}) {

let beforeSearch = search ? filter : data
// console.log(beforeSearch)

  return (
    <ul className="menu bg-base-200 rounded-box w-90 mt-5">
    {beforeSearch.map((el,index) => (
                <li><a>{el.title} || {el.category} || {el.price}</a></li>
            ))}
  </ul>
  )
}
