import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { LayoutContext, units } from "../context";
import { Hero, ContentContainer } from "../common";
import pbCookies from "../../assets/photos/pb-cookies.jpg";

export const Home = (props) => {
  const [records, setRecords] = useState([]);
  const { layout } = useContext(LayoutContext);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/recipe/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Hero
          key={record._id}
          backgroundImage={pbCookies}
          text={record.name}
          isScreenWidth={layout.name === "mobile"}
        />
      );
    });
  }

  return (
    <ColDiv>
      <ContentContainer
        width={layout.name === "desktop" ? "100%" : layout.width.ingredients}
        flexWrap={layout.name === "desktop" ? "wrap" : "nowrap"}
        flexDirection={layout.name === "desktop" ? "row" : "column"}
        justifyContent={layout.name === "desktop" ? "center" : "flex-start"}
      >
        {recordList()}
        {recordList()}
        {recordList()}
        {recordList()}
        {recordList()}
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
