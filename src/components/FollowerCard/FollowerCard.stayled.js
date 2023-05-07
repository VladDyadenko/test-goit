import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const FollowerCardBox = styled(Box)`
  flex-grow: 1;
  font-family: "Montserrat";
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 380px;
  height: 460px;
`;
export const LogoImg = styled.img`
  display: block;
  margin-left: 20px;
`;
export const AbstractionImg = styled.img`
  display: block;
  width: 308px;
  height: 168px;
  margin-top: 28px;
  margin-left: 36px;
  margin-bottom: 18px;
`;
export const Line = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const UserImg = styled.img`
  display: block;
  width: 73px;
  height: 73px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0px 0px 0px 4px #fff;
  display: block;
`;
export const TweetsDescr = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 17px 0 0 0;
`;
export const FollowersDescr = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 16px 0 0 0;
`;
export const FollowerBtn = styled(Button)`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.833;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  min-width: 196px;
  height: 50px;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 20px;
`;
export const Item = styled.li`
  padding-left: 0;
`;
export const UserContainer = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
export const LoadButton = styled(Button)`
  margin: 15px auto;
  display: block;
  width: 20%;
  font-family: "Montserrat";
  font-size: 16px;
`;
