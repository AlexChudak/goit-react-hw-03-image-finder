import style from './ImageGallery.module.css';
// import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({imageArray}) => {
    return (
         <ul className={style.ImageGallery}>
        {imageArray.map(({webformatURL,id,tags}) => {
          return (
            <ImageGalleryItem
              key={id}
              imageLink={webformatURL}
              imagAlt={tags}
            />
          );
        })}
      </ul>

    )
};

export default ImageGallery;