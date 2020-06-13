import { useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { getRequest } from "./httpRequests";
import createApiUrl from "./createApiUrl";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 *  Custom Hook to watch user activity
 */
function watchUserActivity({ startTimer, resetTimer }) {
  window.addEventListener("mousemove", resetTimer, false);
  window.addEventListener("mousedown", resetTimer, false);
  window.addEventListener("keypress", resetTimer, false);
  window.addEventListener("DOMMouseScroll", resetTimer, false);
  window.addEventListener("mousewheel", resetTimer, false);
  window.addEventListener("touchmove", resetTimer, false);
  window.addEventListener("MSPointerMove", resetTimer, false);

  startTimer();
}
export function useIdleTimer(action, timeInterval) {
  let watchId;
  const [isActive, setIsActive] = useState(false);

  const toggleIdleState = useCallback(
    () => setIsActive((oldState) => !oldState),
    [setIsActive]
  );

  const startTimer = useCallback(() => {
    //eslint-disable-next-line
    watchId = setTimeout(() => {
      action();
      toggleIdleState();
    }, timeInterval);
    //eslint-disable-next-line
  }, [toggleIdleState]);

  const clearTimer = useCallback(() => {
    clearTimeout(watchId);
    //eslint-disable-next-line
  }, []);

  const resetTimer = useCallback(() => {
    if (!isActive) {
      clearTimer();
      startTimer();
    }
    //eslint-disable-next-line
  }, [isActive, clearTimer, startTimer]);

  useEffect(() => {
    watchUserActivity({ startTimer, resetTimer });
    return clearTimer;
    //eslint-disable-next-line
  }, [startTimer, resetTimer]);
}

/**
 *  Custom hook to retrieve labels
 */
export const useRequestLabels = (pageName) => {
  const [labels, setLabels] = useState({});
  const language = useSelector(
    ({ appBaseReducer }) => appBaseReducer.language.language_code
  );
  const prevLang = usePrevious(language);
  const isLangChanged = language !== prevLang;

  const fetchPageLabel = useCallback(async () => {
    let response = await getRequest(
      createApiUrl({ url: `PageLabels/${pageName}/${language}` })
    );
    response = await response.json();
    setLabels(response);
  }, [language, pageName]);

  useEffect(() => {
    if (isLangChanged) {
      fetchPageLabel();
    }
    //eslint-disable-next-line
  }, [isLangChanged]);

  return { labels };
};
