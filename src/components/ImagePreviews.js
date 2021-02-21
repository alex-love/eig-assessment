import React from 'react'
import '../styles/UploadButton.scss';
export default function ImagePreviews(props) {
  const {images} = props;
  return (
    <div className="previews">
      {images.map(image => {

      })}
    </div>
  )
}



