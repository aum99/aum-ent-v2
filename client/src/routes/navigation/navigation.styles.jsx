import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  padding-top: 10px;
  padding-bottom: 15px;
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #fff;
`;

export const NavLogo = styled(Logo)`
  width: 70px;
  height: 70px;
  margin-left: 15px;
  cursor: pointer;
  border-radius: 50px !important;
  @media (max-width: 940px) {
    padding: 5px;
    width: 50px;
    height: 50px;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  margin-left: 10%;
  justify-content: space-around;
  @media (max-width: 840px) {
    display: none;
  }
`;

export const NavMenuContainer = styled.div`
  display: none;
  @media (max-width: 940px) {
    display: flex;
    background-color: #e5e5e5;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: larger;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  --s: 0.1em; /* the thickness of the line */
  --c: #1095c1; /* the color */

  color: #0000;
  padding-bottom: var(--s);
  background: linear-gradient(90deg, var(--c) 50%, #000 0)
      calc(100% - var(--_p, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.5s;
  &:hover {
    --_p: 100%;
  }
  @media (max-width: 940px) {
    padding: 20px 0;
    font-size: 20px;
  }
`;

export const NavbarCtaContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavMenu = styled(Link)`
  cursor: pointer;
  display: none;
  font-size: 30px;
  margin-right: 5px;
  color: black;
  text-decoration: none;
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const NavMenuBlock = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyContainer = styled.div`
  margin-top: 10px;
  margin: 5px 80px;
  @media (max-width: 940px) {
    margin: 0;
    margin-top: 0;
    padding: 10px;
  }
`;
