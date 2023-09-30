import { Typography } from "../../App.Styled";
import { Img, ImgContainer, InstagramContent } from "./Instagram.Styled";

export const Instagram = () => {
  return (
    <InstagramContent>
      <Typography fs={16} fw={600} mb={8}>
        #nayzakdesign
      </Typography>
      <Typography fs={40} fw={500} mb={32}>
        On Instagram
      </Typography>
      <ImgContainer>
        <Img
          src={require("../../assets/instaImages/image1.png")}
          alt="Image 1"
        />
        <Img
          src={require("../../assets/instaImages/image2.png")}
          alt="Image 2"
        />
        <Img
          src={require("../../assets/instaImages/image3.png")}
          alt="Image 3"
        />
        <Img
          src={require("../../assets/instaImages/image4.png")}
          alt="Image 4"
        />
        <Img
          src={require("../../assets/instaImages/image5.png")}
          alt="Image 5"
        />
        <Img
          src={require("../../assets/instaImages/image6.png")}
          alt="Image 6"
        />
      </ImgContainer>
    </InstagramContent>
  );
};
