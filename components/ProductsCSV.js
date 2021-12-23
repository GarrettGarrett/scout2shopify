import React from 'react'
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];



function ProductsCSV({downloadClicked, upload} ) {

function writeCSV(){ //returns array of arrays
    let uploadData = []
    upload?.forEach(function (arr, i) {
        if (arr?.data?.length > 30 ){
            let currentRow = arr.data

            if (i == 0 ) { //headers are the first row.
                let headers_arr = ['Handle','Title','Body (HTML)','Vendor','Type','Tags','Published','Option1 Name','Option1 Value','Option2 Name','Option2 Value','Option3 Name','Option3 Value','Variant SKU','Variant Grams','Variant Inventory Tracker','Variant Inventory Policy','Variant Fulfillment Service','Variant Price','Variant Compare At Price','Variant Requires Shipping','Variant Taxable','Variant Barcode','Image Src','Image Alt Text']
                uploadData.push(headers_arr) //set headers as first row.
            
            } else {
    
                let single_row_entry_arr = []
                single_row_entry_arr.push(currentRow[1]) //Handle
                single_row_entry_arr.push(currentRow[1]) //Title
                single_row_entry_arr.push('') //Body (HTML)
                single_row_entry_arr.push("") //Vendor
                single_row_entry_arr.push('') //Standard Product Type
                // single_row_entry_arr.push('') //Custom Product Type
                single_row_entry_arr.push(currentRow[33]) //Tags
                single_row_entry_arr.push('TRUE') //Published
                single_row_entry_arr.push('Size') //Option1 Name
                single_row_entry_arr.push(currentRow[2]) //Option1 Value
                single_row_entry_arr.push('') //Option2 Name
                single_row_entry_arr.push('') //"Option2 Value"
                single_row_entry_arr.push('') //Option3 Name
                single_row_entry_arr.push('') //Option3 Value
                single_row_entry_arr.push('') //"Variant SKU"
                single_row_entry_arr.push('') //"Variant Grams"
                single_row_entry_arr.push('shopify') //"Variant Inventory Tracker"
                single_row_entry_arr.push('deny') //"Variant Inventory Policy"
                single_row_entry_arr.push('manual') //"Variant Fulfillment Service"
                single_row_entry_arr.push('') //"Variant Price" @@@@@@@@?????@@@@@????@@@
                single_row_entry_arr.push('') //"Variant Compare At Price
                single_row_entry_arr.push('TRUE') //"Variant Requires Shipping"
                single_row_entry_arr.push('TRUE') //"Variant Taxable"
                single_row_entry_arr.push('') //"Variant Barcode"
                single_row_entry_arr.push(currentRow[32]) //"Image Src"
                single_row_entry_arr.push(currentRow[1]) //"Image Alt Text"
        
                uploadData.push(single_row_entry_arr)
            }
        }        
    })
    
    return uploadData

}


writeCSV()
console.log("🚀 ~ file: ProductsCSV.js ~ line 63 ~ ProductsCSV ~ writeCSV()", writeCSV())

    return (
        downloadClicked ? 
        <CSVDownload data={writeCSV()} target="_blank" rel="noreferrer"/>
         : null
    )
}

export default ProductsCSV


// Scouts object
// {
//     "data": [
//         "id",
//         "name",
//         "size",
//         "color",
//         "sku",
//         "brand",
//         "purchase_price",
//         "purchase_currency",
//         "place_of_purchase",
//         "tax",
//         "shipping_price",
//         "payout_amount",
//         "purchased_at",
//         "listing_amount",
//         "listed_at",
//         "listing_currency",
//         "sold_at",
//         "platform",
//         "pending_sale",
//         "listed",
//         "sold",
//         "condition",
//         "notes",
//         "custom_market_price",
//         "custom_market_currency",
//         "custom_market",
//         "created_at",
//         "stockx_id",
//         "stockx_chain_id",
//         "stockx_order_number",
//         "stockx_variant_id",
//         "stockx_link",
//         "image_url",
//         "tags",
//         "goat_product_id",
//         "goat_order_id",
//         "goat_product_template_id",
//         "consigned",
//         "order_id",
//         "tracking_code"
//     ],
//     "errors": [],
//     "meta": {
//         "delimiter": ",",
//         "linebreak": "\n",
//         "aborted": false,
//         "truncated": false,
//         "cursor": 473
//     }
// }

// ----------- entry below-------------
// {
//     "data": [
//         "12147144",
//         "Jordan 1 Retro High 85 Varsity Red",
//         "12",
//         "Varsity Red/Black-Varsity Red-White",
//         "BQ4422-600",
//         "Jordan",
//         "450.00",
//         "usd",
//         "",
//         "0.00",
//         "0.00",
//         "0.00",
//         "2021-12-16 05:53:52 UTC",
//         "0.00",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "false",
//         "false",
//         "New",
//         "",
//         "0.00",
//         "",
//         "false",
//         "2021-12-16 10:24:09 UTC",
//         "8ef645e4-8f40-4d7c-8e57-fb4840b8e309",
//         "",
//         "",
//         "",
//         "",
//         "https://stockx.imgix.net/Air-Jordan-1-Retro-High-85-Varsity-Red-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1581534052",
//         "",
//         "",
//         "",
//         "558099",
//         "false",
//         "",
//         ""
//     ],
//     "errors": [],
//     "meta": {
//         "delimiter": ",",
//         "linebreak": "\n",
//         "aborted": false,
//         "truncated": false,
//         "cursor": 927
//     }
// }