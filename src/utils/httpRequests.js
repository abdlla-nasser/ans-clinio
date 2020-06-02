import { BASE_URL } from "../utils/constants";

export const getRequest = async (url, headers = null) => {
  return await fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      ...headers,
    },
  });
};

export const postRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};

export const patchRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "PATCH",
    headers: {
      Accept: "appliation/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};

export const deleteRequest = async (url, body) => {
  return await fetch(BASE_URL + url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: !body ? null : JSON.stringify(body),
  });
};
