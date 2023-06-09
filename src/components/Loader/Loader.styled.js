import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

export const LoaderSpiner = styled(RotatingLines)`
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxLoader = styled(Box)`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
