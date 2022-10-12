
import Head from 'next/head'
import React, { Component, useEffect, useState } from 'react'
import { CSVReader } from 'react-papaparse'
import Header from '../components/Header'
import HeaderSection from '../components/HeaderSection'
import InventoryCSV from '../components/InventoryCSV'
import ProductsCSV from '../components/ProductsCSV'
import Uploader from '../components/Uploader'
import { DownloadIcon } from '@heroicons/react/outline'
import Details from '../components/Details'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  SwitchHorizontalIcon,
  CollectionIcon
} from '@heroicons/react/outline'
import Card from '../components/Card'
import HeadTitle from '../components/HeadTitle'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

const instructions = [
  { name: 'Export inventory from Scout', img: '/exportmodal.png', description: '', stepNumber: 1},
  { name: 'Unzip the downloaded file & find inventory.csv', img: '/csv.png', w: 250, description: '', stepNumber: 2},
  { name: 'Drag & drop in the section above', img: '/csv.png', description: '', stepNumber: 3},
  // Drag and drop your scout inventory.csv file into the section above

]


function index() {
  const [upload, setUpload] = useState()
  const [downloadClicked, setDownloadClicked] = useState(false)
  const [inventoryDownloadClicked, setInventoryDownloadClicked] = useState(false)
  const [effect, setEffect] = useState(false)
  

  return (
    <>
      {/* <div className='bg-gray-100' > */}
      <div className='bg-gray-900' >
        {/* <header className='bg-red-500 h-2'>
          <header className='bg-orange-500 h-2'></header>
        </header> */}
         <header className="sticky top-0 z-50">
          <Header />
        </header> 
        
        <HeadTitle />

        <div className="py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <>
            <Uploader upload={upload} setUpload={setUpload} effect={effect} setEffect={setEffect}/>     
              <div className='py-2 flex flex-wrap  justify-center sm:justify-center '>
              <ProductsCSV data={upload} downloadClicked={downloadClicked} upload={upload}/>
                  <button 
                  onClick={()=> {
                    upload?.length > 0 ? setDownloadClicked(!downloadClicked) : setEffect(true)
                    
                  }}
                  className={`my-3 mx-3 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                    <DownloadIcon className="h-6 w-6 mr-1 my-auto" aria-hidden="true" />
                    Download Products CSV</button>

                
                <InventoryCSV upload={upload} inventoryDownloadClicked={inventoryDownloadClicked} />
                <button 
                  onClick={()=> {
                    upload?.length > 0 ? setInventoryDownloadClicked(!inventoryDownloadClicked) : setEffect(true)
                  }}
                  className="my-3 mx-3 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  
                  >
                    <DownloadIcon className="h-6 w-6 mr-1 my-auto" aria-hidden="true" />
                    Download Inventory CSV</button>
                </div>
          </>
          <Details /> 
        </div>
      </div>
      <Blog />
      <Footer />
    </>
  )
}

export default index


// Shopifys object
// access by: data[0].data['handle']
// {
//     "data": [
// Handle
// Title
// Body (HTML)
// Vendor
// Tags
// Published
// Option1 Name
// Option1 Value
// Option2 Name
// Option2 Value
// Option3 Name
// Option3 Value
// Variant SKU
// Variant Grams
// Variant Inventory Tracker
// Variant Inventory Qty
// Variant Inventory Policy
// Variant Fulfillment Service
// Variant Price
// Variant Compare At Price
// Variant Requires Shipping
// Variant Taxable
// Variant Barcode
// Image Src
// Image Position
// Image Alt Text
// Gift Card
// SEO Title
// SEO Description
//         "Google Shopping / Google Product Category",
//         "Google Shopping / Gender",
//         "Google Shopping / Age Group",
//         "Google Shopping / MPN",
//         "Google Shopping / AdWords Grouping",
//         "Google Shopping / AdWords Labels",
//         "Google Shopping / Condition",
//         "Google Shopping / Custom Product",
//         "Google Shopping / Custom Label 0",
//         "Google Shopping / Custom Label 1",
//         "Google Shopping / Custom Label 2",
//         "Google Shopping / Custom Label 3",
//         "Google Shopping / Custom Label 4",
//         "Variant Image",
//         "Variant Weight Unit",
//         "Variant Tax Code",
//         "Cost per item",
//         "Status",
//         "Standard Product Type",
//         "Custom Product Type"
//     ],
//     "errors": [],
//     "meta": {
//         "delimiter": ",",
//         "linebreak": "\r\n",
//         "aborted": false,
//         "truncated": false,
//         "cursor": 954
//     }
// }

// ----entry below---------
// {
//   "data": [
//       "example-t-shirt",
//       "Example T-Shirt",
//       "",
//       "Acme",
//       "mens t-shirt example",
//       "TRUE",
//       "Title",
//       "Lithograph - Height: 9\" x Width: 12\"",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "3629",
//       "",
//       "",
//       "deny",
//       "manual",
//       "25",
//       "",
//       "TRUE",
//       "TRUE",
//       "",
//       "https://burst.shopifycdn.com/photos/green-t-shirt.jpg?width=5000",
//       "1",
//       "",
//       "FALSE",
//       "Our awesome T-shirt in 70 characters or less.",
//       "A great description of your products in 320 characters or less",
//       "Apparel & Accessories > Clothing",
//       "Unisex",
//       "Adult",
//       "7X8ABC910",
//       "T-shirts",
//       "cotton, pre-shrunk",
//       "used",
//       "FALSE",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "g",
//       "",
//       "",
//       "active",
//       "Apparel & Accessories > Clothing",
//       "Shirts"
//   ],
//   "errors": [],
//   "meta": {
//       "delimiter": ",",
//       "linebreak": "\r\n",
//       "aborted": false,
//       "truncated": false,
//       "cursor": 1442
//   }
// }