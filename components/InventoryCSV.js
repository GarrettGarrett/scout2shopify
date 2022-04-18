import React from 'react'
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];



function InventoryCSV({inventoryDownloadClicked, upload} ) {

function writeCSV(){ //returns array of arrays
    let uploadData = []
    upload?.forEach(function (arr, i) {
        if (arr?.data?.length > 30 ){
            let currentRow = arr.data

            if (i == 0 ) { //headers are the first row.
                let headers_arr = ['Handle','Title','Option1 Name','Option1 Value', 'Option2 Name','Option2 Value','Option3 Name','Option3 Value','INSERT YOUR STORE LOCATION HERE',]
                uploadData.push(headers_arr) //set headers as first row.
            
            } else {
                let edit1 = currentRow[1]
                let edit2 = edit1.replaceAll(" ", "-")
                let edit3 = edit2.replaceAll("(", "")
                let edit4 = edit3.replaceAll(")", "").toLowerCase()

                // find qty:
                let current_Qty = 0
                upload.forEach(row => {
                    if (row.data[1] == currentRow[1] && row.data[2] == currentRow[2]) {//if handle + size 
                        current_Qty ++
                }
                })


                let single_row_entry_arr = []
                single_row_entry_arr.push(edit4) //Handle
                single_row_entry_arr.push(currentRow[1]) //Title
                single_row_entry_arr.push('Size') //Option1 Name
                single_row_entry_arr.push(currentRow[2]) //Option1 Value
                single_row_entry_arr.push('') //"Option2 Name"
                single_row_entry_arr.push('') //"Option2 Value"
                single_row_entry_arr.push('') //Option3 Name
                single_row_entry_arr.push('') //Option3 Value
                single_row_entry_arr.push(current_Qty) //"Variant Inventory Qty"        
                

                uploadData.push(single_row_entry_arr)
            
                
            }
        }        
    })
    // Removes duplicates.  Can remove because qty is calculated.  Example yeezy size 6 + yeezy size 6 would show only 1 yeezy size 6, but with qty 2.  if i did not remove duplicates id have yeezy size 6 qty (x2) and although that is not an issue for shopify imports, it would confuse the user.
        let obj = {};
        obj.arr = uploadData;
        obj.arr = obj.arr.filter((value, index, self) =>
        index === self.findIndex((t) => (
        t[1] === value[1] && t[3] === value[3]
        ))
    )

    return obj.arr

}


writeCSV()

    return (
        inventoryDownloadClicked ? 
        <CSVDownload data={writeCSV()} target="_blank" rel="noreferrer"/>
         : null
    )
}

export default InventoryCSV


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