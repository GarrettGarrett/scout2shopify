import Feedback from "./Feedback"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-blue-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-3 flex items-center justify-between  border-blue-500 lg:border-none">
            <div className="flex items-center ">

            <Feedback />
                          
            </div>
           
                
            <a
               target="_blank"
               rel="noreferrer"
                href="https://www.shopify.com/"
                className="mr-1.5 inline-block bg-blue-500 py-0 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                <img src="/shopify.png" className='h-10 w-auto'/>
                
              </a>
              <a
              target="_blank"
              rel="noreferrer"
                href="https://scoutapp.ai/"
                className="inline-block bg-white py-0 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                <img src="/scout.png" className='h-10 w-auto'/>
              </a>
           
          </div>
          
         
        </nav>
        
      </header>
    )
  }
  