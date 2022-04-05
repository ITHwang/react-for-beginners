import { useRef } from "react";

export const useFullscreen = (callback) => {
  const fullscreenRef = useRef();

  const triggerFull = () => {
    if (fullscreenRef.current) {
      fullscreenRef.current.requestFullscreen();
      if (callback && typeof callback === "function") callback(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") callback(false);
  };

  return { fullscreenRef, triggerFull, exitFull };
};
