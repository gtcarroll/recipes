import React, {
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { RibbonButton } from "./RibbonButton";
import { LayoutContext } from "./layout-context";
import { ThemeContext } from "./theme-context";
import { functions } from "./functions";
import { units, styles } from "./styles";
// import { MultiplierButton } from "../recipe/ingredients/MultiplierButton";
import { ReactComponent as Tomato } from "../../assets/photos/tomato.svg";
import { RadioButton } from "./RadioButton";
import { PatreonButton } from "./PatreonButton";

export const MenuCurtain = (props) => {
  const [isActive, setActive] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let menuHeight = "19.5rem";
  let gradient = functions.getColorGradient(
    3,
    theme.ingredient1,
    theme.ingredient2
  );

  return (
    <MenuUnderlay
      style={{
        backgroundColor: theme.background,
        boxShadow: isActive ? styles.boxShadow.card : null,
        top: isActive ? 0 : "calc(-" + menuHeight + " - " + units.rem2 + ")",
        right: layout.width.menuSpacer,
        borderBottomRightRadius: layout.name === "mobile" ? 0 : null,
      }}
    >
      <MenuOverlay
        style={{
          color: theme.instruction,
          backgroundColor: theme.overlay,
          height: menuHeight,
          borderBottomRightRadius: layout.name === "mobile" ? 0 : null,
        }}
      >
        <ColumnDiv
          style={{
            width: layout.width.menu,
          }}
        >
          <MenuHeader>
            <Unbold> —</Unbold>recipes<Unbold>— </Unbold>
          </MenuHeader>
          <MenuItem
            icon={<Tomato fill={gradient[0]} />}
            color={gradient[0]}
            label="sweet"
          />
          <MenuItem
            icon={<Tomato fill={gradient[1]} />}
            color={gradient[1]}
            label="savory"
          />
          <MenuItem
            icon={<Tomato fill={gradient[2]} />}
            color={gradient[2]}
            label="vegan"
          />
          <MenuHeader>
            <Unbold> —</Unbold>themes<Unbold>— </Unbold>
          </MenuHeader>
          <RowDiv>
            <RadioButton
              label={<Tomato fill={theme.background} />}
              color={gradient[0]}
              isActive
            />
            <RadioButton
              label={<Tomato fill={theme.ingredient2} />}
              color={gradient[2]}
            />
          </RowDiv>
          {/* <PatreonButton /> */}
        </ColumnDiv>
        <RibbonButton
          menuHeight={menuHeight}
          isActive={isActive}
          onClick={() => {
            setActive(!isActive);
          }}
        />
      </MenuOverlay>
    </MenuUnderlay>
  );
};

const MenuUnderlay = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  // positioning
  z-index: 999;
  position: fixed;
`;

const MenuOverlay = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // box model
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-right: ${units.rem2};
  padding-bottom: ${units.rem2};
`;

const MenuHeader = styled.div`
  // box model
  padding: ${units.rem2};
  padding-bottom: ${units.rem1};

  // typography
  white-space: nowrap;
  font-family: ${styles.fontFamily.sansSerif};
  font-weight: bold;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; //flex-end;
  align-items: center;

  min-width: 11rem;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: calc(100% - ${units.rem6} - ${units.rem1});
  gap: ${units.rem1};

  // box model
  margin-top: ${units.rem1};
`;

const Unbold = styled.span`
  font-weight: normal;
`;
