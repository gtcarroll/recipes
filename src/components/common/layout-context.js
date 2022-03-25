import { createContext } from "react";
export const layouts = {
  mobile: {
    name: "mobile",
    minWidth: 0,
    width: {
      header: "19rem",
      ingredients: "31rem",
      instructions: "31rem",
    },
    height: {
      hero: "16rem",
    },
    fontSize: {
      h1: "2.4rem",
      h2: "1.8rem",
      h3: "1.5rem",
      body: "1.2rem",
    },
  },
  tablet: {
    name: "tablet",
    minWidth: 768,
    width: {
      header: "21.5rem",
      ingredients: "35rem",
      instructions: "35rem",
    },
    height: {
      hero: "16rem",
    },
    fontSize: {
      h1: "2.55rem",
      h2: "1.95rem",
      h3: "1.65rem",
      body: "1.35rem",
    },
  },
  laptop: {
    name: "laptop",
    minWidth: 962,
    width: {
      header: "24rem",
      ingredients: "39rem",
      instructions: "39rem",
    },
    height: {
      hero: "16rem",
    },
    fontSize: {
      h1: "2.7rem",
      h2: "2.1rem",
      h3: "1.8rem",
      body: "1.5rem",
    },
  },
  desktop: {
    name: "desktop",
    minWidth: 1382,
    width: {
      header: "24rem",
      ingredients: "39rem",
      instructions: "63rem",
    },
    height: {
      hero: "20rem",
    },
    fontSize: {
      h1: "2.7rem",
      h2: "2.1rem",
      h3: "1.8rem",
      body: "1.5rem",
    },
  },
};

export const LayoutContext = createContext({
  layout: layouts.mobile,
  setLayout: () => {},
});
