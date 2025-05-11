import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './api';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
        setHasMore(data.total_pages > page);
      } catch (err) {
        setError('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (value) => {
    if (!value.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);
  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
