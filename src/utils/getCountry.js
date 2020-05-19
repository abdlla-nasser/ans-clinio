import geolocator from "geolocator";
import { GOOGLE_API_KEY } from "./constants.js";

// reference "https://github.com/onury/geolocator"

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
