import css from './ImageCard.module.css'

const ImageCard = ({ openModal,image }) => {
  return (
    <div>
      <img className={css.ImageCard} src={image.urls.small}
        alt={image.alt_description}
      onClick={() => openModal(image)}/>
      
    </div>
  );
};

export default ImageCard;
