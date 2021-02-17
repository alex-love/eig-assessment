import React from 'react'
import BaseButton from './BaseButton'
import '../styles/UploadButton.scss';
import ImageStore from '../lib/ImageStore'
export default function UploadButton(props) {
  
  const handleImageUpload = event => {
    console.log(event);
    const files = event.target.files
    if (files.length > 0) {
      console.log(event.target.files)
      for (let i = 0; i < event.target.files.length; i++) {
        ImageStore.add(files[i]);
      }
    }
    props.updateImages(files);
    console.log(` image store stuff: ${ImageStore.getAll()}`)
    
  }
//   const fileSelect = document.getElementById("fileSelect"),
//   fileElem = document.getElementById("fileElem");

// fileSelect.addEventListener("click", function (e) {
//   if (fileElem) {
//     fileElem.click();
//   }
// }, false);
  return (
    <div>
      <BaseButton 
        label="Upload Photos"
        color="blue"
      />
       <div className="upload-wrap">
      <input onChange={handleImageUpload} type="file" id="fileUpload" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    </div>
  )
}



