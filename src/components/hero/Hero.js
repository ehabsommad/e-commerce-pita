import { Typography } from "../../App.Styled";
import {
  StyledHeroContent,
  StyledImg,
  Container,
  StyledBtn,
} from "./Hero.Styled";

function Hero() {
  return (
    <Container>
      <StyledHeroContent>
        <Typography className="extrStyled" fs="54" fw="500" ls="-1px">
          Care products for every home.
        </Typography>
        <Typography className="extrStyled" fs="18" m="8px 0 0 0">
          Keep your everyday style chic and on-trend with our selection 20+
          styles to choose from.
        </Typography>
        <StyledBtn>See Collection</StyledBtn>
      </StyledHeroContent>
      <StyledImg>
        <img src={require("../../assets/img.png")} alt="Hero" />
      </StyledImg>
    </Container>
  );
}

export default Hero;
