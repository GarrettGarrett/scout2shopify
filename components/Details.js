/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    SwitchHorizontalIcon,
    CollectionIcon,
    TagIcon
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Importing Products.csv', icon: TagIcon, description: 'This file should be uploaded first and will import products to your Shopify store but will not adjust the inventory quantity.  To set prices on your products, open this file and edit the "Variant Price" column before importing to Shopify' },
    { name: 'Importing Inventory.csv', icon: CollectionIcon, description: 'This file should be uploaded last and will import inventory quantity levels for products that already exist in your inventory.  To add inventory quantity to your products, open this file and replace "INSERT YOUR STORE LOCATION HERE" with your Shopify store location.'  },
    
  ]
  
  export default function Details() {
    return (
      <div className="my-8 relative bg-white py-8 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">How To</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Import to Shopify from Scout
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-1000">
            After uploading your Scout inventory.csv file, download the available Products.csv and Inventory.csv files.  Inside the Products.csv file, make sure to edit the "Variant Price" column to price your products.  Then, go to your Shopify dashboard and import the Products.csv file under the "All Products" tab.  Lastly, open the Inventory.csv file and replace 'INSERT YOUR STORE LOCATION HERE' with the name of your Shopify store location.   Import the Inventory.csv file under the "Inventory" tab to complete the process.  
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-1000">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  