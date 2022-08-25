import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { LayoutContext, units, functions } from "../context";
import { Hero, ContentContainer } from "../common";
import { SearchControls } from "./SearchControls";
import { MenuCurtain } from "../common";

export const Home = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useSearchParams();
  const { layout } = useContext(LayoutContext);
  let prevSearch = search.get("name");
  // const fs = require("fs").promises;

  // This method fetches the records from the database.
  useEffect(() => {
    document.title = "Recipes";
    async function getRecords() {
      const searchParams = ["name", "vegetarian", "vegan", "glutenFree"];
      // let searchURL = `http://localhost:3001/search/`;
      // let firstParam = true;
      let filters = {};
      searchParams.forEach((param) => {
        if (search.get(param) != null) {
          // build express router url
          // searchURL += firstParam ? "?" : "&";
          // searchURL += param + "=" + search.get(param);
          // firstParam = false;

          // build github pages filter object
          filters[param] = search.get(param);
        }
      });

      // const response = await fetch(searchURL);
      // if (!response.ok) {
      //   const message = `An error occurred: ${response.statusText}`;
      //   window.alert(message);
      //   return;
      // }

      // const recipes = await response.json();
      const recipes = functions.getRecipesJSON(filters);
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
          backgroundImage={require(`../../assets/photos/${recipe.url}.jpg`)}
          tags={recipe.tags}
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
      <MenuCurtain
        isHome
        search={search}
        updateSearch={updateSearch}
        updateOnEnter={updateOnEnter}
        setSearch={setSearch}
      />
      <ContentContainer
        width={layout.name === "desktop" ? "100%" : layout.width.ingredients}
        justifyContent={layout.name === "desktop" ? "center" : "flex-start"}
      >
        <SearchControls
          search={search}
          updateSearch={updateSearch}
          updateOnEnter={updateOnEnter}
          setSearch={setSearch}
        />
        <RecordDiv
          style={{
            flexDirection: layout.name === "desktop" ? "row" : "column",
            flexWrap: layout.name === "desktop" ? "wrap" : "nowrap",
          }}
        >
          {recordList()}
        </RecordDiv>
      </ContentContainer>
    </ColDiv>
  );
};

const ColDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  // box model
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
`;

const RecordDiv = styled.div`
  // flexbox
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: ${units.rem3};

  // box model
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
  /* min-height: 100vh; */
`;
