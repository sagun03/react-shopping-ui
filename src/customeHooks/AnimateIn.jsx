import React from "react";
import useElementOnScreen from "./Observer";

const AnimateIn = ({ from, to, children, transition }) => {
  const ref = React.createRef(null);
  console.log("ref", ref);

  const onScreen = useElementOnScreen(ref);
  console.log("onScreen", onScreen);
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...to,
              transition,
            }
          : {
              ...from,
              transition,
            }
      }
    >
      {children}
    </div>
  );
};

export default AnimateIn;

const FadeIn = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    transition="600ms ease-in-out"
  >
    {children}
  </AnimateIn>
);

const FadeUp = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    transition="600ms ease-in-out"
  >
    {children}
  </AnimateIn>
);
const ScaleIn = ({ children }) => (
  <AnimateIn
    from={{ scale: "0" }}
    to={{ scale: "1" }}
    transition="600ms ease-in-out"
  >
    {children}
  </AnimateIn>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
};
