
import Modal from "react-modal";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(15, 12, 12, 0.9)",
  },

  content: {
    height: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(233, 233, 244)",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ image, modalIsOpen, closeModal }) => {
  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={customStyles}
        contentLabel="Image Modal"
        
      >
        <div >
          <img
            src={image.urls.regular}
            alt={image.alt_description} 
          />
          <h2>{image.alt_description}</h2>
          <p>Autor: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;