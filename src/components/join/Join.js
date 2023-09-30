import React from "react";
import {
  EmailContainer,
  JoinContent,
  JoinFonts,
  JoinHeader,
  JoinP,
  StyledBtn,
  StyledButton,
  StyledInput,
} from "./Join.Styled";
import { AiOutlineMail } from "react-icons/ai";
function Join() {
  return (
    <JoinContent>
      <JoinHeader fs={"50"} fw={500} mt={50}>
        Join Our Newsletter
      </JoinHeader>
      <JoinP fs={"20"} fw={400}>
        Big discounts and right to your inbox.
      </JoinP>
      <EmailContainer>
        <AiOutlineMail />
        <StyledInput placeholder="Email address"></StyledInput>
        <StyledBtn type="submit" value="Submit">
          Signup
        </StyledBtn>
      </EmailContainer>
    </JoinContent>
  );
}

export default Join;
