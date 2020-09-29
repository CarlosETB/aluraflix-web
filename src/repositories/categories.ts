import { URL_CATEGORIES } from "config";

function getAllVideos() {
  return fetch(URL_CATEGORIES).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível pegar os dados");
  });
}

export default { getAllVideos };
