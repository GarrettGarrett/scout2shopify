/* This example requires Tailwind CSS v2.0+ */
export default function HeadTitle() {
    return (
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {/* <span className="block">Save Time.</span> */}
            <span className="block">Scout.csv to Shopify.csv</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Upload your Scout inventory.csv file below
          </p>
          {/* <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </a> */}
        </div>
      </div>
    )
  }
  