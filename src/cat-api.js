
const BREED_URL = 'https://api.thecatapi.com/v1/breeds';
const IMAGE_URL = 'https://api.thecatapi.com/v1/images';

const API_KEY ='live_FdT5JfZLkXKoYCUW80F573ja9QfnKV5d9PDAhaxZruV49sGpRQifSKIs9SV9HFPx';


const fetchBreeds = () => {
    return fetch(`${BREED_URL}?api_key=${API_KEY}`).then(responce => {
      if (!responce.ok) {
        throw new Error(resp.status);
      }
      return responce.json();
    });
  };


const fetchCatByBreed = breedId => {
    return fetch(`${IMAGE_URL}/${breedId}?api_key=${API_KEY}`).then(responce => {
      if (!responce.ok) {
        throw new Error(resp.status);
      }
      return responce.json();
    });
  };
  


export {fetchBreeds, fetchCatByBreed};