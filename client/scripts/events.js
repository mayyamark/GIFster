/* eslint-disable max-len */
/**
 * Binds an event handler to element with id "trend".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displayTrendingGifsByClick = (callback) => $(document).on('click', '#trend', callback);

/**
 * Binds an event handler to element with id "search".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displaySearchInputByClick = (callback) => $(document).on('click', '#search',callback);

/**
 * Binds an event handler to element with id "submit-gif".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displaySearchedGifsByClick = (callback) => $(document).on('submit', '#submit-gif', callback);

/**
 * Binds an event handler to element with class "displayed-gif".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displaySingleGifByClick = (callback) => $(document).on('click', '.displayed-gif', callback);

/**
 * Binds an event handler to element with class "favourite-button".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const favouriteGifByClick = (callback) => $(document).on('click', '.favourite-button', callback);

/**
 * Binds an event handler to element with id "my-favourites".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displayFavouriteGifsByClick = (callback) => $(document).on('click', '#my-favourites', callback);

/**
 * Binds an event handler to element with id "upload".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displayUploadInputByClick = (callback) => $(document).on('click', '#upload', callback);

/**
 * Binds an event handler to element with id "upload".
 * @return { void } An pop-up notification, when the input with type "file" is changed.
 */
export const changeFileInput = () => $(document).on('change', '#input-upload', () => toastr.success('Yaay!', 'You have selected your GIF!'));

/**
 * Binds an event handler to element with id "upload-gif-button".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const uploadGifByClick = (callback) => $(document).on('click', '#upload-gif-button', callback);

/**
 * Binds an event handler to element with id "my-uploads".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const displayMyUploadsByClick = (callback) => $(document).on('click', '#my-uploads', callback);

/**
 * Binds an event handler to the document object.
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const clickAnywhereOnDocument = (callback) => $(document).on('click', callback);

/**
 * Binds an event handler to the window object.
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const loadMoreWhenScrolling =(callback) => $(window).on('scroll', callback);

/**
 * Binds an event handler to the element with class "displayed-gif-no-click".
 * @param { function } callback Function describing what should be done when the target is clicked.
 * @return { event } An event, binded to the target.
 */
export const doubleClickLike = (callback) => $(document).on('dblclick', '.displayed-gif-no-click', callback);
