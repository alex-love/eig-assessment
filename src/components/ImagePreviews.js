import React from 'react'
import '../styles/ImagePreviews.scss';
export default function ImagePreviews(props) {
  const {images} = props;
  return (
    <div className="previews">
      {images.slice(0).reverse().map((data) => {
        return (
          <div className="preview-image">
            <img key={data.key} src={data.image} alt=""/>
            <div className="preview-image-name">{data.name}</div>
          </div>
        )
      })}
    </div>
  )
}



