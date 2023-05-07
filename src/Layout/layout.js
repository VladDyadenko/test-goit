import { Toolbar } from "@mui/material";
import {
  HeaderBox,
  HeaderButton,
  HeaderNav,
  HeaderTitle,
  LinkHeader,
} from "./layout.styled";
import { GrTwitter } from "react-icons/gr";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const layout = () => {
  const svgTwitter = { fill: "#1D9BF0", marginRight: "10px" };
  return (
    <>
      <HeaderBox>
        <HeaderNav>
          <Toolbar sx={{ padding: "5px" }}>
            <HeaderButton variant="contained">
              <LinkHeader to="/"> Home</LinkHeader>
            </HeaderButton>
            <HeaderTitle variant="h6" component="div">
              <GrTwitter style={svgTwitter} size={25} />
              Twitcard
            </HeaderTitle>
            <HeaderButton variant="contained">
              <LinkHeader to="/followers">Tweets</LinkHeader>
            </HeaderButton>
          </Toolbar>
        </HeaderNav>
      </HeaderBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default layout;
