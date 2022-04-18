const posts = [
    {
      title: 'Importing products with a CSV file',
      href: 'https://help.shopify.com/en/manual/products/import-export/import-products',
      category: { name: 'Article', href: '#' },
      description:
        'Importing products into your Shopify store using a comma-separated values (CSV) file is useful when you switch to Shopify from another platform or when you want to make many changes to your products or inventory.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        '/article1.png',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Exporting or importing inventory with a CSV file',
      href: 'https://help.shopify.com/en/manual/products/inventory/getting-started-with-inventory/inventory-csv',
      category: { name: 'Article', href: '#' },
      description:
        'You can export an inventory CSV file that contains your inventory quantities at your locations. You can use that exported CSV file as a template to update the inventory quantities. Then, you can import the CSV file to update Shopify with the inventory quantities for each product in each location.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        '/article2.png',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Solutions to common product CSV import problems',
      href: 'https://help.shopify.com/en/manual/products/import-export/common-import-issues',
      category: { name: 'Article', href: '#' },
      description:
        `If you're having a problem uploading your product CSV file, then see if the problem is listed in the following solutions. If you're still having problems, then contact Shopify Support.`,
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        '/article3.png',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function Blog() {
    return (
      
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Helpful Articles</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Helpful articles from the Shopify Help Center.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (

            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a  className="">
                      {post.category.name}
                    </a>
                  </p>
                  <a target="_blank" rel="noreferrer" href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
  }
  