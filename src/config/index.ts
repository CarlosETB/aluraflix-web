const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "http://carlostonholi-aluraflix";

const URL_CATEGORIES = `${URL}/categories`;
const URL_CATEGORIESBYVIDEOS = `${URL}/categories?_embed=videos`;
const URL_VIDEOS = `${URL}/videos`;

export { URL, URL_CATEGORIES, URL_VIDEOS, URL_CATEGORIESBYVIDEOS };
