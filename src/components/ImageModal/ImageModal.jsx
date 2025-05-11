import { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalBody}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <div className={styles.info}>
          <p><strong>Author:</strong> {image.user.name}</p>
          <p><strong>Likes:</strong> {image.likes}</p>
          {image.description && <p><strong>Description:</strong> {image.description}</p>}
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;