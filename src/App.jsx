import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './ProductList'
import SearchBar from './SearchBar'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])

  const fetchData = async () => {
    const resp = await fetch('https://dummyjson.com/products')
    const data1 = await resp.json()
    const result = data1.products
    // console.log(result.products)
    setData(result)

  }

  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {

    const fetchSearch = async () => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
      const result = await response.json()
      setFilter(result.products)
    }

    let timer = setTimeout(() => {
      fetchSearch()
    }, 1000);

    return () => clearTimeout(timer)

  }, [search])

  function hdlChange(e) {
    let newSearch = e.target.value.toLowerCase()
    setSearch(newSearch)
  }

  return (
    <div>
      <h1 className='text-3xl font-extrabold mb-5'>Product Search</h1>
      <SearchBar search={search} hdlChange={hdlChange} setSearch={setSearch} />
      <ProductList filter={filter} search={search} data={data} />
    </div>
  )
}

export default App
