import { useEffect, useState } from "react";

function useScrollToBottom(threshold = 0) {
  const [isEndScroll, setIsEndScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", fullDownScrollTrigger);

    return function () {
      document.removeEventListener("scroll", fullDownScrollTrigger);
    };
  }, []);

  function fullDownScrollTrigger() {
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    if (window.scrollY + window.innerHeight >= height - threshold) {
      setIsEndScroll(true);
    } else {
      setIsEndScroll(false);
    }
  }

  return [isEndScroll];
}

export default useScrollToBottom;
