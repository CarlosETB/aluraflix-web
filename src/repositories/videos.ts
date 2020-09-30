import { URL_VIDEOS } from "config";

function create(obj: any) {
  return fetch(URL_VIDEOS, {
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

export default { create };
