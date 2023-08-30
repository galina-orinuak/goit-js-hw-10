
const BREED_URL = 'https://api.thecatapi.com/v1/breeds';
const IMAGE_URL = 'https://api.thecatapi.com/v1/images';

const API_KEY ='live_FdT5JfZLkXKoYCUW80F573ja9QfnKV5d9PDAhaxZruV49sGpRQifSKIs9SV9HFPx';


function fetchBreeds() {
  return fetch('${BREED_URL}?api_key=${API_KEY}').thet(resp => {
    if (!resp.ok) {
      throw new Eror(resp.statusText);
    }
    return resp.json();
  });
}


function fetchCatByBreed(breedId) {
    return fetch('${BREED_URL}/${breedId}?api_key=${API_KEY}').thet(resp => {
        if (!resp.ok) {
          throw new Eror(resp.statusText);
        }
        return resp.json();
      });
    }



export {fetchBreeds, fetchCatByBreed};