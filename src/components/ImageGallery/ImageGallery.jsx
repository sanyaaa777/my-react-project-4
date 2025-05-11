import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
