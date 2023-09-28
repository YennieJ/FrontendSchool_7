import { useState, useEffect } from "react";

function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    setIsBottom(
      window.innerHeight + document.documentElement.scrollTop + 5 >=
        document.documentElement.offsetHeight
    );
  }, []);
  return isBottom;
}

export default useScroll;
