

import React, { Component, useState } from 'react'
import { CSVReader } from 'react-papaparse'





  
  function Uploader({upload, setUpload, effect, setEffect}) {
      
    let handleOnDrop = (data) => {
        console.log('---------------------------')
    
        setUpload(data)
        console.log('---------------------------')
      }
    
      let handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
      }
    
      let handleOnRemoveFile = (data) => {
        setUpload()
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
      }

    return (
      <div 
      onAnimationEnd={() => setEffect(false)}
      className={`${
        effect && "animate-wiggle"
      }  w-full h-40 mt-2`}>
        <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h=10 w-10
            " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
            <span>Drop CSV file here or click to upload.</span>
          </CSVReader>
          </div>
      )
  }
  
  export default Uploader
  