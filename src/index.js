import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import {fetchBreeds, fetchCatByBreed} from './cat-api';

const BREED_URL = 'https://api.thecatapi.com/v1/breeds';
const IMAGE_URL = 'https://api.thecatapi.com/v1/images';

const API_KEY ='live_FdT5JfZLkXKoYCUW80F573ja9QfnKV5d9PDAhaxZruV49sGpRQifSKIs9SV9HFPx';

const catSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const catImg = document.querySelector('.cat-img');
const catText = document.querySelector('.cat-text');

catSelect.addEventListener('change', onChangeSelect);

fetchAndRenderBreeds();

function makeSelect(breeds) {
  const markup = breeds
    .map(breed => {
      return '<option value="${breed.reference_image_id}">${breed.name}</option>';
    })
    .join('');
    catSelect.insertAdjacentHTML('beforeend', markup);
    new SlimSelect({
        select: '#single',
      });
    
}

function onChangeSelect(evt){
loader.classList.remove('unvisible');
catImg.innerHTML = '';
catText.innerHTML = '';
const breedId = evt.target.value;
console.log('breedId: ', breedId);
fetchCatByBreed(breedId)
.then(breed => renderBreedDesc (breed))
.catch(error => 
    {Notiflix.Notify.failure( 'Oops! Something went wrong! Try reloading the page!');
})
.finally(() => loader.classList.add('unvisible'))
}

const fetchAndRenderBreeds = () => {
    loader.classList.remove('unvisible');
    fetchBreeds()
    .then(breeds => makeSelect(breeds))
    .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      })
      .finally(() => {
        loader.classList.add('unvisible');
        catSelect.classList.remove('unvisible');
      });
  };
  

function renderBreedDesc (breed) {
    const markupPicture = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}">`;
    const markupDescript = `<h2 class="cat-title">${breed.breeds[0].name}</h2>
      <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
      <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
    catImg.insertAdjacentHTML('beforeend', markupPicture);
    catInfo.insertAdjacentHTML('beforeend', markupDescript);
  };

