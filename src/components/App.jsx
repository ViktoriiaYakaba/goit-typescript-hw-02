import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (query) => {
        setLoading(true);
        try {
            const apiKey = 'wmfnsVc_DdNJUYvLvziU9AjLz2nPehfwjBFjdxGMITc';
            const params = {
                client_id: apiKey,
                query: query,
                page: 1,
                per_page: 20,
                lang: "uk",
            };
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: params,
                headers: {
                    Authorization: `Client-ID ${apiKey}`
                }
            });
            setImages(response.data.results);
            setError(null);
        } catch (error) {
            setError('Error fetching images. Please try again later.');
        } finally {
            setLoading(false);
        }
    }
};

export default App;
