import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const clickRef = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;

    const target = clickRef.current;
    if (target) target.addEventListener("click", onClick);

    return () => {
      if (target) target.removeEventListener("click", onClick);
    };
  }, []);

  return clickRef;
};

export default useClick;
