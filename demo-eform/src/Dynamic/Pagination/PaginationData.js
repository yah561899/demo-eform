import React, { useState } from 'react'
import Pagination from './Pagination'
import Test from './test'
import { getStaticAssetsData } from './static_data'

const PaginationData = () => {
    
  const [data, setData] = useState(getStaticAssetsData)
  const [nowData, setNowData] = useState(getStaticAssetsData)
  const [query, setQuery] = useState("")

  const keys = Object.keys(data[0])

  const search = (data) => {
    return data.filter((item) => 
      keys.some((key) => typeof item[key] === "string" && item[key].toLowerCase().includes(query)))
  }
  return (
    <div>
        <input type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)}/>
        <Pagination testData={search(data)} nowData={nowData}/>
        {/* <Test testData={search(data)} nowData={nowData}/> */}
    </div>
  )
}

export default PaginationData