import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color={'#123abc'} loading={true} />
    </div>
  );
}

export default Loader;