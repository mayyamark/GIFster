/* eslint-disable max-len */
import {
  displayTrendingGifsByClick,
  displaySearchedGifsByClick,
  displayUploadInputByClick,
  changeFileInput,
  uploadGifByClick,
  displayFavouriteGifsByClick,
  displayMyUploadsByClick,
  displaySingleGifByClick,
  favouriteGifByClick,
  clickAnywhereOnDocument,
  loadMoreWhenScrolling,
  doubleClickLike
} from './events.js';

import {
  displaySingleCallback,
  favouriteAGifCallback,
  uploadGifCallback,
  clickAnywhereToCloseCallback,
  displayMyUploadsCallback,
  displayUploadInputCallback,
  displayFavouritesCallback,
  doubleClickLikeCallback,
  displaySearchedCallback,
  displayTrendingCallback,
  scrollingCallback
} from './callbacks.js';

import { displayTrendingGifs } from './display.js';

$(() => {
  displayTrendingGifs();

  displaySearchedGifsByClick(displaySearchedCallback);

  displayFavouriteGifsByClick(displayFavouritesCallback);

  displayTrendingGifsByClick(displayTrendingCallback);

  displayUploadInputByClick(displayUploadInputCallback);

  changeFileInput();

  uploadGifByClick(uploadGifCallback);

  displayMyUploadsByClick(displayMyUploadsCallback)

  displaySingleGifByClick(displaySingleCallback);

  favouriteGifByClick(favouriteAGifCallback);

  clickAnywhereOnDocument(clickAnywhereToCloseCallback);

  loadMoreWhenScrolling(scrollingCallback);
  doubleClickLike(doubleClickLikeCallback);

  $(document).on('click', '#search', (ev) => {
    ev.preventDefault();
    $('#main').empty();
    $('#main').append(
      $(`<form id="submit-gif" style="display: inline-block">
      <input type="text" id="searchInput" placeholder="Search by a keyword..">
      <button type="submit">Search</button>
  </form>`))
  });
  
});

