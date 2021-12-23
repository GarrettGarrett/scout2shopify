/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export default function SuccessModal({open, setOpen}) {
  

  return (
    <div className="pt-3">
    <div>
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Your feedback has been received!
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Thank you for the help.
          </p>
        </div>
      </div>
    </div>
    <div className="mt-5 sm:mt-6">
     
    </div>
  </div>
  )
}
