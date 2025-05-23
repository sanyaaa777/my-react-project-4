import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;