import React, {useEffect} from 'react'
import BaseStep from './BaseStep'
import SubmitButton from './SubmitButton'
import UploadButton from './UploadButton'
import ImageStore from '../lib/ImageStore'
export default function StepHome(props) {
  function handleFiles(files) {
    console.log('file handled?');
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (!file.type.startsWith('image/')){ continue }
  
      const img = document.createElement("img");
      img.file = file;
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
  return (
    <div>
      <BaseStep>
  <p> In order to most accurately process your recent claim (#{props.claimNumber}), we ask that you submit photos of the damage you reported. </p>
      </BaseStep>
      <div className="buttons">
        <UploadButton className="mb-2" updateImages={handleFiles}/>
        <SubmitButton />
      </div>
    </div>
  )
}
