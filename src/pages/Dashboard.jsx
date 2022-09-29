import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useCookies } from "react-cookie";

import DataTable from 'react-data-table-component'

const Dashboard = () => {
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])
    const [cookies] = useCookies(["accessToken"]);
    const [filteredProduct, setFilteredProduct] = useState([])
  
  const getProduct = async () => {
    try {
        const response = await axios.get("http://94.74.86.174:8080/login", {
            headers: { 
                Authorization: `Bearer ${cookies.accessToken}`
         },
        })
        setProduct(response.data)
        setFilteredProduct(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const result =  product.filter(product => {
        return product.name.toLowerCase().match(search.toLowerCase())
    })
    setFilteredProduct(result)
  }, [search])

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    
    {
      name: "Action",
      cell: (row) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => alert(row.id)}
        >
          Edit
        </button>
      ),
    },
  ];


  return (
    <DataTable 
    columns={columns} 
    data={filteredProduct} 
    pagination
    fixedHeader
    fixedHeaderScrollHeight='450px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    subHeader
    subHeaderComponent={
        <input
        className="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search Here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    } 
    />
  )
}

export default Dashboard
