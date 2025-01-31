/* eslint-disable max-len */
import {
  displayTrendingGifsByClick,
  displaySearchInputByClick,
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
  displaySearchInputCallback,
  displayMyUploadsCallback,
  displayUploadInputCallback,
  displayFavouritesCallback,
  doubleClickLikeCallback,
  displaySearchedCallback,
  displayTrendingCallback,
  scrollingCallback
} from './callbacks.js';

import { displayTrendingGifs, displaySearchedGifs } from './display.js';

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

  displaySearchInputByClick(displaySearchInputCallback);  
});

