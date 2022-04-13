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
  let menuHeight = "19rem"; //"21.5rem";
  let gradient = functions.getColorGradient(
    3,
    theme.ingredient1,
    theme.ingredient2
  );
  let transparent0 = functions.addAlpha(theme.instruction, 0.3);

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
            paddingTop: units.rem0,
          }}
        >
          <MenuHeader
            style={{
              borderColor: transparent0,
            }}
          >
            Recipes
          </MenuHeader>
          {/* <MenuItem
            icon={<Tomato fill={gradient[0]} />}
            color={gradient[0]}
            label="home"
          /> */}
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
          <MenuHeader
            style={{
              borderColor: transparent0,
            }}
          >
            Themes
          </MenuHeader>
          <RowDiv>
            <RadioButton
              label={<Tomato fill={theme.background} />}
              color={gradient[0]}
              isActive
            />
            {/* <RadioButton
              label={<Tomato fill={gradient[1]} />}
              color={gradient[1]}
            /> */}
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
  padding: ${units.rem2};
  padding-top: 0;
`;

const MenuHeader = styled.div`
  // box model
  border-bottom: 3px solid;
  padding: ${units.rem1} ${units.rem2};
  padding-bottom: ${units.rem0};
  margin-bottom: ${units.rem0};

  // typography
  white-space: nowrap;
  font-family: ${styles.fontFamily.sansSerif};
  font-weight: bold;
  margin-left: -${units.rem2};
  padding-left: ${units.rem3};
  margin-right: calc(-${units.rem5} - ${units.rem2} - 4px);
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: calc(100% - ${units.rem6} - ${units.rem1});

  // box model
  margin-top: ${units.rem1};
  width: calc(100% - ${units.rem4});
  padding: 0 ${units.rem1};
`;
