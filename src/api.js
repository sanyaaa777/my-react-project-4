import axios from 'axios';

const ACCESS_KEY = 'tVab-4sKCb377v71Rc5T9Z-O2GwW46ZRt0YsZYMcV5w';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};