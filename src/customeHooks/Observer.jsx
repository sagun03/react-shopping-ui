import { useEffect, useState } from "react";

const useElementOnScreen = (ref, rootMargin = "0px") => {
  console.log("ref", ref);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    const current = ref?.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [rootMargin, ref]);
  return isIntersecting;
};

export default useElementOnScreen;
