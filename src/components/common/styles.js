let px = 3;
let rem = 0.3;
// units used for css styles
export const units = {
  // rem
  rem0: rem + "rem", // 0.3
  rem1: rem * 2 + "rem", // 0.6
  rem2: rem * 4 + "rem", // 1.2
  rem3: rem * 6 + "rem", // 1.8
  rem4: rem * 8 + "rem", // 2.4
  rem5: rem * 10 + "rem", // 3.0
  rem6: rem * 12 + "rem", // 3.6

  // px
  px0: px + "px", // borders
  px1: px * 2 + "px",
  px2: px * 4 + "px",
};

// css style values
export const styles = {
  border: {
    button: "solid 2px",
  },
  borderRadius: {
    button: units.rem1,
    card: units.rem1,
    bubble: units.rem0,
  },
  transition: {
    body: "0.5s ease-out",
    button: "0.2s ease-out",
  },
  transparency: {
    highlight: 0.15,
    underline: 0.3,
  },
  boxShadow: {
    card: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    hover: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  },
  width: {
    h2: "19rem",
    content: "31rem",
    frog: "10rem",
  },
  height: {
    bubble: rem * 7 + "rem",
  },
  fontSize: {
    h1: "2.7rem",
    h2: "2.1rem",
    h3: "1.6rem",
    body: "1.2rem", //"1.3rem",
    fraction: "1.2rem",
  },
  fontFamily: {
    monospace: "Menlo, monospace", //"courier, monospace",
    sansSerif: "helvetica, sans-serif",
  },
};
