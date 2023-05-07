import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const HomeBox = styled(Box)`
  padding: 15px;
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
`;
export const HomeDescr = styled(Typography)`
  font-weight: 500;
  font-size: 25px;
  padding: 0 15px;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 25px;
    margin-left: 5px;
    color: #006400;
    cursor: pointer;
  }
`;

export const HomeImg = styled.img`
  display: block;
  width: 150px;
  width: 400px;
  height: 250px;
  margin-right: 20px;
`;
