import React from 'react'
import '../styles/Contact.scss'
import UploadButton from './UploadButton'
export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <p>Contact our home office today to find out how we can help.</p>
        <div className="email">
        <p>Email:</p>
        <a href="mailto:customerservice@eigrestoration.com">customerservice@eigrestoration.com</a>
        </div>
        <div className="phone">
        <p>Phone:</p>
        <a href="tel:+18002377796">1-800-237-7796</a>
        </div>
        <div className="upload">
        <UploadButton />
        </div>
      </div>
    </div>
  )
}
