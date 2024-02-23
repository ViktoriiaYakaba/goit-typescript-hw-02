import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ image, setIsOpen, modalIsOpen }) => {
  // Funzione per chiudere il modal solo se non si è cliccato sull'immagine
  function closeModal() {
    if (!image) {
      setIsOpen(false);
    }
  }

  // Funzione per chiudere il modal quando si clicca sull'immagine
  function handleImageClick() {
    closeModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* Aggiungi un gestore di eventi onClick per l'immagine */}
        <img src={image.regular} alt={image.alt} onClick={handleImageClick} />{' '}
      </Modal>
    </div>
  );
};

export default ImageModal;
