import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from ".";

export const RecipeRouter = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { url } = useParams();

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`http://localhost:3001/recipes/` + url);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecipe(records);
    }

    getRecipe();
    // document.title = recipe.url;

    return;
  }, [url]);

  return <div>{recipe != null && <Recipe {...recipe} />}</div>;
};
