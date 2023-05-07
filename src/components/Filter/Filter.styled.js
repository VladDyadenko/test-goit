import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 300px;
  height: 100px;
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
  left: 0;
  top: 20%;
  transform: translateY(-50%);
  z-index: 111;
`;
export const Container = styled(Box)`
  flex: 1;
  text-align: center;
  padding: 0 10px;
`;
export const Text = styled(Typography)`
  color: #800080;
  font-family: "Montserrat";
`;
