import geolocator from "geolocator";
import { GOOGLE_API_KEY } from "./constants.js";

//refrence https://www.loc.gov/standards/iso639-2/php/code_list.php
export const rtl_languages_shortcode = [
  "ar",
  "arc",
  "az",
  "dv",
  "ff",
  "he",
  "ku",
  "nqo",
  "fa",
  "syr",
  "ur",
];

export const getLanguageFlag = (langShortCode) => {
  if (langShortCode) {
    langShortCode = langShortCode.toLowerCase();
    return require(`../assets/images/flags/${langShortCode}.jpg`);
  }
};

export function getCurrentCountry({ onError, onSuccess }) {
  geolocator.config({
    language: "en",
    google: {
      version: "3",
      key: GOOGLE_API_KEY,
    },
  });
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumWait: 10000, // max wait time for desired accuracy
    maximumAge: 0, // disable cache
    desiredAccuracy: 30, // meters
    fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
    addressLookup: true, // requires Google API key if true
    timezone: true, // requires Google API key if true
    // map: "map-canvas", // interactive map element id (or options object)
    // staticMap: true // get a static map image URL (boolean or options object)
  };
  return geolocator.locate(options, function (err, location) {
    // console.log("location", location);
    // console.log("err", err);
    if (err) return onError && onError(err);
    return onSuccess && onSuccess(location);
  });
}
