import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal  }) => {
  return (
    <div>
        <ul className={css.imageGallery}>
          
          {Array.isArray(images) && images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ImageGallery;
