export const functions = {
  // converts [rgb] string to rgba with provided [alpha] value
  // return: "rgba([rgb values], [alpha])"
  addAlpha: (rgb, alpha) => {
    return (
      "rgba" +
      rgb.slice(rgb.indexOf("("), rgb.indexOf(")")) +
      ", " +
      alpha +
      ")"
    );
  },

  // converts [rgb] string to an object with 3 color values
  // return: {red, green, blue}
  rgb2Object: (rgb) => {
    let values = rgb.slice(rgb.indexOf("(") + 1, rgb.indexOf(")")).split(",");
    return {
      red: parseInt(values[0]),
      green: parseInt(values[1]),
      blue: parseInt(values[2]),
    };
  },

  // generates a color gradient with [length] colors ranging from [rgb1] to [rgb2]
  // return: ["rgb(r1, g1, b1)", ..., "rgb(r2, g2, b2)"]
  getColorGradient: (length, rgb1, rgb2) => {
    let gradient = [];
    let color1 = functions.rgb2Object(rgb1);
    let color2 = functions.rgb2Object(rgb2);
    let iMax = length - 1;
    for (let i = 0; i < length; i++) {
      let blendedColor = {};
      for (const key in color1) {
        blendedColor[key] = Math.round(
          color1[key] * ((iMax - i) / iMax) + color2[key] * (i / iMax)
        );
      }
      let blendedRGB =
        "rgb(" +
        blendedColor.red +
        ", " +
        blendedColor.green +
        ", " +
        blendedColor.blue +
        ")";
      gradient.push(blendedRGB);
    }
    return gradient;
  },

  // breaks the [amount] string into a partial fraction object
  // return: {?whole, ?numerator, ?denominator}
  splitFraction: (amount) => {
    if (amount.includes("/")) {
      let parts = amount.split(" ");
      if (parts.length > 1) {
        let fraction = parts[1].split("/");
        return {
          whole: parts[0],
          numerator: fraction[0],
          denominator: fraction[1],
        };
      } else {
        let fraction = parts[0].split("/");
        return {
          numerator: fraction[0],
          denominator: fraction[1],
        };
      }
    }
    return { whole: amount };
  },
};
