import React from "react";
import { Container, FlexBox } from "../../App.Styled";
import {
  StyledCart,
  StyledLink,
  StyledIcon,
  StyledNav,
  StyledMenuIcon,
  StyledNavBar,
  StyledNavBarContent,
  StyledLogo,
} from "./Header.Styled";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Header = () => {
  return (
    <div className="header">
      <StyledNavBar>
        <Container>
          <StyledNavBarContent>
            <StyledLogo>
              <img
                src={require("../../assets/Branding.png")}
                alt=""
                srcset=""
              />
            </StyledLogo>
            <StyledNav>
              <StyledLink to={"/"}>Home</StyledLink>
              <StyledLink to={"/products"}>Product</StyledLink>
              <StyledLink to={"/category"}>Category</StyledLink>
            </StyledNav>
            <FlexBox align="center">
              <StyledIcon>
                <AiOutlineSearch size={"24px"} />
                <AiOutlineUser size={"24px"} />
              </StyledIcon>
              <BiShoppingBag size={"24px"} />
              <StyledCart>5</StyledCart>
              <StyledMenuIcon>
                <HiOutlineMenuAlt4 />
              </StyledMenuIcon>
            </FlexBox>
          </StyledNavBarContent>
        </Container>
      </StyledNavBar>
    </div>
  );
};

export default Header;
