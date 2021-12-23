import React, { useRef } from 'react';
import emailjs from 'emailjs-com';




  function sendEmail (){


    emailjs.send('service_axfk9rf', 'template_as9mo2q', {from_name:"from name" , to_name:"to name", message: "hey"}, 'user_MHlVYVr0ZcUp64v7J1L7X')
  }

export default function helloAPI(req, res) {
    sendEmail()
    res.status(200).json({ name: 'John Doe' })
  }
  
