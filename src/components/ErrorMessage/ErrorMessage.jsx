import { useEffect } from 'react';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  useEffect(() => {
    const timer = setTimeout(() => onRetry(), 4000);
    return () => clearTimeout(timer);
  }, [onRetry]);

  return (
    <div className={styles.error}>
      <p>{message}</p>
      <button className={styles.retryBtn} onClick={onRetry}>Try again</button>
    </div>
  );
}

export default ErrorMessage;