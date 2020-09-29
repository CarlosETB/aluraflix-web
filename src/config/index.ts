const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "http://carlostonholi-aluraflix";

const URL_CATEGORIES = `${URL}/categories?_embed=videos`;

export { URL, URL_CATEGORIES };
