import { useRef, useEffect, useState, useCallback } from "react";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

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
