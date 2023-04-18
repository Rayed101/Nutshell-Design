import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 2048px;
  height: 2048px;
  background-color: black;
`;

export const WhiteLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 697px;
  background-color: white;
`;

export const HeadlineText = styled.h1`
  font-size: 132.35px;
  font-weight: 400;
  font-family: "Helvetica", sans-serif; // Change the font as needed
  color: black;
  margin: 75px 0 0 75px;
  word-spacing: -3px;
  letter-spacing: -8px;
  line-height: 1.23;
  white-space: pre-wrap; // Add this line to handle line breaks
`;

export const SourceText = styled.p`
  font-size: 45.2px;
  font-family: "Helvetica", sans-serif; // Change the font as needed
  color: black;
  font-weight: 300;
  letter-spacing: -3px;
  margin: 81px 0 0 75px;
`;

export const Img = styled.div`
  height: 20px
  background-image: url(/nt.png);
`;

export const RedBackgroundText = styled.span`
  background-color: ${(props) => props.color};
  font-family: "Helvetica", sans-serif; // Change the font as needed
  color: white;
  position: relative;
  font-weight: bold;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 10px; // Adjust the width value to control the space
  }

  &::before {
    margin-right: 1px;
  }

  &::after {
    margin-left: 1px;
  }

  padding-top: 0;
  padding-bottom: 0;
`;
