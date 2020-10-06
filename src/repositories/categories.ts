import { URL_CATEGORIES, URL_CATEGORIESBYVIDEOS } from "config";

function getAll() {
  return fetch(URL_CATEGORIES).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível pegar os dados");
  });
}

function getAllVideos() {
  return fetch(URL_CATEGORIESBYVIDEOS).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível pegar os dados");
  });
}

function create(obj: any) {
  return fetch(URL_CATEGORIES, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível cadastrar os dados");
  });
}

export default { getAll, getAllVideos, create };
