
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import SuccessModal from './SuccessModal';
import { SetPredicate } from 'ow/dist';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feedback() {
    const [loading, setLoading] = useState(false)
    const [submited, setSubmitted] = useState(false)
    const [open, setOpen] = useState(true)

    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
    
    emailjs.sendForm('service_axfk9rf', 'template_as9mo2q', form.current, 'user_MHlVYVr0ZcUp64v7J1L7X')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          .then(setSubmitted(true))
          .then(setLoading(false))
      };


  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            )}
          >
                                            <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Feedback
                                    </button>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform mt-3 min-w-fit  sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="w-64 relative grid gap-6 bg-gray-50 px-5 py-5">


            <div>
                {
                    submited ? 
                    <SuccessModal open={open} setOpen={setOpen}/>
                    :
                    <>
                    <form ref={form} onSubmit={sendEmail}>
                    <input className='hidden' type="text" name="to_name" value={process.env.to_name}/>
                    <input className='hidden' type="email" name="from_name" value={process.env.from_name}/>
                                <label htmlFor="comment" className="pb-2 block text-sm font-medium text-gray-700">
                                        Feedback
                                    </label>
                            <div className="mt-1">
                                <textarea
                                rows={4}
                                name="message"
                                id="comment"
                                className="px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={''}
                                placeholder='Your feedback...'
                                />
                            </div>
                    
                            <button
                            disabled={loading}
                            type='submit'
                            // onClick={()=> setSubmitted(true)}
                                type="submit"
                                className="mt-4 w-full  items-center  py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                {loading ? 'loading..' : "Send"}
                            </button>
                            </form>
                    </>
                }
                    
            </div>
                
            
               

                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}



