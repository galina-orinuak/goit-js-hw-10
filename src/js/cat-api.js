
const BREED_URL_ENDPOINT = '/breeds';
const IMAGE_URL_ENDPOINT = '/images';
const BASE_URL = 'https://api.thecatapi.com/v1'

const API_KEY ='live_FdT5JfZLkXKoYCUW80F573ja9QfnKV5d9PDAhaxZruV49sGpRQifSKIs9SV9HFPx';


const fetchBreeds = () => {
    return fetch(`${BASE_URL}${BREED_URL_ENDPOINT}?api_key=${API_KEY}`).then(responce => {
      if (!responce.ok) {
        throw new Error(resp.status);
      }
      return responce.json();
    });
  };


const fetchCatByBreed = breedId => {
    return fetch(`${BASE_URL}${IMAGE_URL_ENDPOINT}/${breedId}?api_key=${API_KEY}`).then(responce => {
      if (!responce.ok) {
        throw new Error(resp.status);
      }
      return responce.json();
    });
  };
  


export {fetchBreeds, fetchCatByBreed};