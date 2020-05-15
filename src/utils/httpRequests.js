import { BASE_URL } from "../utils/constants";

export const getRequest = async (url, header = null) => {
  return await fetch(BASE_URL + url, {
    method: "GET",
    header: {
      "content-type": "application/json",
      ...headers,
    },
  });
};

export const postRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};

export const putRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "PUT",
    header: {
      Accept: "appliation/json",
      "content-type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};

export const deleteRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};
