import { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn';
import ImageModal from './ImageModal';




const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [hasMoreImages, setHasMoreImages] = useState(true);
    const [query, setQuery] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);


   async function fetchImages(query, pageNum) {
    try {
        setLoading(true);
        const apiKey = 'wmfnsVc_DdNJUYvLvziU9AjLz2nPehfwjBFjdxGMITc';
        const params = {
            client_id: apiKey,
            query: query,
            orientation: 'landscape',
            page: pageNum,
            per_page: 12,
        };
        const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
            params: params,
            headers: {
                Authorization: `Client-ID ${apiKey}`
            }
        });
        const normalizeData = response.data.results.map(({ alt_description, id, urls }) => ({
            alt: alt_description,
            id,
            small: urls.small,
            regular: urls.regular,
        }));
        
        if (pageNum === 1) {
            setImages(normalizeData);
        } else {
            setImages(prevImages => [...prevImages, ...normalizeData]);
        }

        setError('');

        if (response.data.results.length === 0) {
            setHasMoreImages(false);
        }
        return { totalImages: response.data.total, images: response.data.results };

    } catch (error) {
        setError('Error fetching images. Please try again later.'); 
    } finally {
        setLoading(false);
    }
}

    const handleSearch = (query) => {
        setQuery(query);
        fetchImages(query, 1);
        setPage(1);
        setImages([]);
        setHasMoreImages(true);
    };

    const loadMore = () => {
        fetchImages(query, page + 1);
        setPage(page + 1);
    };
 function openModal() {
    setIsOpen(true);
  }
    function closeModal() {
    setIsOpen(false);
  }

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {images.length > 0 && <ImageGallery images={images}  onClick={openModal} />}
            {hasMoreImages && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
   
        </div>
    );
};

export default App;
