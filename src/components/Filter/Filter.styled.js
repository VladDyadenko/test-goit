import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 400px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: rgba(29, 155, 240, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: sticky;
  left: auto;
  top: 120px;
  transform: translateY(-50%);
  z-index: 111;
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
  justify-content: center;
  align-items: center;
`;
export const WrapperBtn = styled(Box)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: fixed;
  left: auto;
  top: 100px;
  transform: translateY(-50%);
  z-index: 111;
`;
