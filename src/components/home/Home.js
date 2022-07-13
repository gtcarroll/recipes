import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import {
  LayoutContext,
  ThemeContext,
  functions,
  styles,
  units,
} from "../context";
import { Hero, ContentContainer, IconButton } from "../common";
import pbCookies from "../../assets/photos/peanut-butter-cookies.jpg";
import { SearchControls } from "./SearchControls";
import { ReactComponent as Vegetarian } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";
import { ReactComponent as GlutenFree } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

export const Home = (props) => {
  console.log("rendering Home");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useSearchParams();
  const { layout } = useContext(LayoutContext);
  let prevSearch = search.get("name");

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const searchParams = ["name", "vegetarian", "vegan", "glutenFree"];
      let searchURL = `http://localhost:3001/search/`;
      let firstParam = true;
      searchParams.forEach((param) => {
        if (search.get(param) != null) {
          searchURL += firstParam ? "?" : "&";
          searchURL += param + "=" + search.get(param);
          firstParam = false;
        }
      });
      const response = await fetch(searchURL);
      console.log(searchURL);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecords();

    return;
  }, [search]);

  // This method will map out the records on the table
  function recordList() {
    return recipes.map((recipe) => {
      return (
        <Hero
          key={recipe._id}
          backgroundImage={pbCookies}
          text={recipe.name}
          url={recipe.url}
          isScreenWidth={layout.name === "mobile"}
          isHome
        />
      );
    });
  }

  function updateOnEnter(e) {
    if (e.key === "Enter") {
      updateSearch();
    }
  }
  function updateSearch() {
    const nextSearch = search.get("name");
    // const prevSearch = search.get("name");
    console.log(prevSearch + " -> " + nextSearch);
    if (
      nextSearch !== prevSearch &&
      !(nextSearch === "" && prevSearch === null)
    ) {
      if (nextSearch) search.set("name", nextSearch);
      else search.delete("name");
      setSearch(search);
    }
    prevSearch = nextSearch;
  }

  return (
    <ColDiv>
      <ContentContainer
        width={layout.name === "desktop" ? "100%" : layout.width.ingredients}
        flexWrap={layout.name === "desktop" ? "wrap" : "nowrap"}
        flexDirection={layout.name === "desktop" ? "row" : "column"}
        justifyContent={layout.name === "desktop" ? "center" : "flex-start"}
      >
        <SearchControls
          search={search}
          updateSearch={updateSearch}
          updateOnEnter={updateOnEnter}
          setSearch={setSearch}
        />
        {recordList()}
      </ContentContainer>
    </ColDiv>
  );
};

const ColDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // box model
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
`;
