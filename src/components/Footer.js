import React from 'react'
import {Link} from '@reach/router'
export default function Footer() {
  return (
    <div className="footer">
      <div className="link-wrap">
        <Link to="/upload-tips" className="link">What photos should I take?</Link>
        <Link to="/contact" className="link">Contact EIG</Link>
      </div>
    </div>
  )
}
