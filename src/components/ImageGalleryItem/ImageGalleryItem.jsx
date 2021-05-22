import React from 'react';
import style from './ImageGalleryItem.module.css';


const ImageGalleryItem= ({imageLink,imagAlt}) => {
    return (
        <li className="ImageGalleryItem">
  <img src={imageLink} alt={imagAlt} className={style.ImageGalleryItem_image} />
</li>
    )
}

export default ImageGalleryItem;

