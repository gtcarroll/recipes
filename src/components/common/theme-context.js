import { createContext } from "react";
export const themes = {
  dark: {
    foreground: "rgb(201, 209, 217)", // #C9D1D9
    background: "rgb(13, 17, 23)", // #0D1117
    overlay: "rgba(242, 238, 232, 0.075)", // #F2EEE8
    overlay2: "rgba(242, 238, 232, 0.15)", // #F2EEE8

    ingredient1: "rgb(252, 136, 155)", // #FC889B
    ingredient2: "rgb(252, 200, 115)", // #FCC873
    instruction: "rgb(188, 201, 120)", // #BCC978
  },
  light: {
    foreground: "rgb(54, 46, 38)", // #362e26
    background: "rgb(246, 241, 228)", // #f6f1e4
    overlay: "rgba(9, 14, 27, 0.05)", // #090e1b

    ingredient1: "rgb(173, 12, 155)", // #AD0C9B
    ingredient2: "rgb(13, 67, 191)", // #0D43BF
    instruction: "rgb(14, 122, 124)", // #0E7A7C
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => {},
});
