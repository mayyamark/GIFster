/* eslint-disable max-len */
import {
  displayGifsByGivenIds,
  displayRandom
} from './display.js';

import { getItemFromLocalStorageByKey } from './extract-data.js'

/**
 * Saves a GIF's ID in localStorage when it is favourited once.
 * If the ID excists already, this ID is deleted from localStorage.
 * @param { string } gifId The favourited GIF's ID.
 */
export const saveFavouriteGifIdLocalStorageById = async (gifId) => {
  let currentFavourites = getItemFromLocalStorageByKey('myFavourites');

  if (currentFavourites === '' || currentFavourites === null) {
    localStorage.setItem('myFavourites', gifId);
    toastr.success('Go to myFavoutites now...', 'Yay! Added to myFavourites!')
  } else {
    const arrayOfFavs = currentFavourites.split(',');
    if (arrayOfFavs.includes(gifId)) {
      const result = arrayOfFavs.filter((el) => el !== gifId).join(',');
      localStorage.setItem('myFavourites', result);
      toastr.warning(':(', 'Removed from Myfavourites!');

      if (localStorage.getItem('currentTab') === 'myFavourites') {
        const arrOfIds = localStorage.getItem('myFavourites').split(',');
        if (result !== '') {
          displayGifsByGivenIds(arrOfIds);
        } else {
          displayRandom();
        }
      }
      
    } else {
      const newString = currentFavourites.concat(',', gifId);
      localStorage.setItem('myFavourites', newString);
      toastr.success('Go to myFavoutites now...', 'Yay! Added to myFavourites!')
    }
  }
}

/**
 * Saves uploaded GIF's ID in localStorage
 * @param { string } uploadedGifId The uploaded GIF's ID.
 */
export const saveUploadedGifIdToLocalStorage = (uploadedGifId) => {
  let currentUploads = getItemFromLocalStorageByKey('upload');
  if (currentUploads === '' || currentUploads === null) {
    localStorage.setItem('upload', uploadedGifId);
  } else {
    const arrayOfUploads = Array.of(currentUploads);
    const newString = arrayOfUploads.concat(uploadedGifId);
    localStorage.setItem('upload', newString);
  }
}

/**
 * Checks if the passed key exists in localStorage.
 * If it doesn't, then a random GIF would be displayed.
 * If it does, then the value of the key would be turned into an array of GIFs' IDs and these GIFs
 * would be displayed.
 * @param { string } key The key to search for in localStorage.
 */
export const checkValuesInLocalStorageByKey = (key) => {
  const stringOfIds = localStorage.getItem(key);
  if (stringOfIds === '' || stringOfIds === null) {
    displayRandom();
  } else {
    const arrOfIds = localStorage.getItem(key).split(',');
    displayGifsByGivenIds(arrOfIds);
  }
}


