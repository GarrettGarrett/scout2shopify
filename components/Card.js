/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/solid'



export default function Card({instruction}) {
  return (
    <div key={instruction.stepNumber } className="bg-white px-4 py-5 sm:px-6 rounded-lg flex justify-center shadow-lg">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
         
         <span className='text-4xl pr-4'>{instruction.stepNumber}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">
            <span className="text-xl">
              {instruction.name}
            </span>
          </p>
          
          <p>
            {instruction.description}
          </p>
          <img className={instruction.shadow ? 'shadow-2xl' : null} src={instruction.img} width={instruction.w ? instruction.w : null}/>
        </div>
        
        <div className="flex-shrink-0 self-center flex">
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
             
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Add to favorites</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <CodeIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Embed</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Report content</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
