import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(29, 155, 240, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: sticky;
  left: auto;
  top: 150px;
  transform: translateY(-50%);
  z-index: 111;
  @media screen and (min-width: 480px)  {
     width: 400px;
  }
`;
export const Container = styled(Box)`
  flex: 1;
  text-align: center;
  padding: 0 10px;
`;
export const Text = styled(Typography)`
  color: #ffff00;
  font-family: "Montserrat";
`;
export const ButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const WrapperBtn = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  transform: translateY(-50%);
  z-index: 111;
`;
export const ButtonSelect = styled(Button)`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
   font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
