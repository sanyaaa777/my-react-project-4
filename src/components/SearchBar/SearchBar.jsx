import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
