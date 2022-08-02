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

  roundToNearestHalf: (num) => {
    let nearestHalf = Math.round(num * 2) / 2.0;
    return "" + Math.abs(nearestHalf);
  },

  multiplyIngredients: (multiplier, ingredients) => {
    let newIngredients = ingredients.map((ingredient) => {
      let newIngredient = {
        ...ingredient,
      };
      if (ingredient.imperial) {
        newIngredient.imperial = {
          ...ingredient.imperial,
          amount: functions.multiplyAmount(
            multiplier,
            ingredient.imperial.amount
          ),
        };
      }
      if (ingredient.metric) {
        newIngredient.metric = {
          ...ingredient.metric,
          amount: functions.multiplyAmount(
            multiplier,
            ingredient.metric.amount
          ),
        };
      }
      return newIngredient;
    });
    return newIngredients;
  },

  multiplyYields: (multiplier, yields) => {
    return {
      ...yields,
      amount: functions.multiplyAmount(multiplier, yields.amount),
    };
  },

  multiplyAmount(multiplier, amount) {
    if (!amount) return null;

    // set flag for fractional multipliers
    let isDivision = multiplier.includes("/");
    if (isDivision) multiplier = multiplier.split("/")[1];

    let num = functions.splitFraction(amount);
    // convert mixed num to fractional form
    // (eg 2 3/4 => 11/4)
    if (num.whole) {
      if (!num.numerator) num.numerator = 0;
      if (!num.denominator) num.denominator = 1;
      num.numerator =
        parseInt(num.numerator) + parseInt(num.whole * num.denominator);
    }
    // multiply fractional form
    // (eg 11/4 => 11/8)
    if (isDivision) num.denominator *= multiplier;
    else num.numerator *= multiplier;
    // simplify fractional form
    // (eg 12/4 => 3/1)
    let factor = functions.gcf(num.numerator, num.denominator);
    num.numerator = num.numerator / factor;
    num.denominator = num.denominator / factor;
    // convert fractional form to mixed form
    // (eg 11/8 => 1 3/8)
    if (num.numerator > num.denominator) {
      let quotient = Math.floor(num.numerator / num.denominator);
      num = {
        whole: quotient,
        numerator: num.numerator - quotient * num.denominator,
        denominator: num.denominator,
      };
      if (num.numerator === 0) {
        num = {
          whole: quotient,
        };
      }
    } else if (num.numerator === num.denominator) {
      num = {
        whole: 1,
      };
    } else {
      // num.numerator < num.denominator
      num.whole = "";
    }

    // store mixed form in new ingredients data as a string
    let newAmount = num.whole ? num.whole : "";
    newAmount += num.numerator
      ? " " + num.numerator + "/" + num.denominator
      : "";
    return newAmount;
  },

  // returns the greatest common factor that [a] and [b] share
  gcf(a, b) {
    if (b) {
      return functions.gcf(b, a % b);
    } else {
      return Math.abs(a);
    }
  },

  // iterate over JSON files and return only those that match given filters
  getRecipesJSON(filters) {
    function importAll(f) {
      return f.keys().map(f);
    }
    const files = importAll(
      require.context(`../../assets/recipes`, false, /.*json/)
    );
    if (filters.name) filters.name = filters.name.toLowerCase();
    return files.filter((file) => {
      let result = true;
      if (filters.name)
        result &= file.name.toLowerCase().includes(filters.name);
      if (filters.vegetarian) result &= file.tags.vegetarian;
      if (filters.vegan) result &= file.tags.vegan;
      if (filters.glutenFree) result &= file.tags.glutenFree;
      return result;
    });
  },
};
