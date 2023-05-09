import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { BsFillRewindFill } from "react-icons/bs";
import {
  ButtonContainer,
  Container,
  Text,
  Wrapper,
  WrapperBtn,
} from "./Filter.styled";
import { setDisplayedItems, setFilter } from "../../Redux/slise";
import { selectFilter } from "../../Redux/selectors";

function Filter({ followers }) {
  const filter = useSelector(selectFilter);

  const navigate = useNavigate();
  const onGoHome = () => navigate("/");

  const dispatch = useDispatch();

  const all = followers.length;
  const follow = followers.filter((item) => item.isFollower === false);
  const followings = followers.filter((item) => item.isFollower === true);

  const handleAllClick = () => {
    dispatch(setFilter("all"));
    const displayedItems = followers;

    dispatch(setDisplayedItems(displayedItems));
  };

  const handleFollowingsClick = () => {
    dispatch(setFilter("followings"));
    const displayedItems = followers.filter((item) => item.isFollower);

    dispatch(setDisplayedItems(displayedItems));
  };

  const handleFollowClick = () => {
    dispatch(setFilter("follow"));
    const displayedItems = followers.filter((item) => !item.isFollower);

    dispatch(setDisplayedItems(displayedItems));
  };
  return (
    <>
      <Wrapper>
        <Container>
          <Button
            onClick={handleAllClick}
            variant="contained"
            sx={{
              color:
                filter === "all" || filter === undefined ? "#00ff00" : "#fff",
            }}
          >
            All
          </Button>
          <Text variant="h5" component="h3">
            {all}
          </Text>
        </Container>
        <Container>
          <Button
            onClick={handleFollowClick}
            variant="contained"
            sx={{ color: filter === "follow" ? "#00ff00" : "#fff" }}
          >
            Follow
          </Button>
          <Text variant="h5" component="h3">
            {follow.length}
          </Text>
        </Container>
        <Container>
          <Button
            onClick={handleFollowingsClick}
            variant="contained"
            sx={{ color: filter === "followings" ? "#00ff00" : "#fff" }}
          >
            Followings
          </Button>
          <Text variant="h5" component="h3">
            {followings.length}
          </Text>
        </Container>
      </Wrapper>
      <WrapperBtn>
        <ButtonContainer>
          <Button onClick={onGoHome} variant="contained">
            <BsFillRewindFill style={{ marginRight: "10px" }} /> Back to Home
          </Button>
        </ButtonContainer>
      </WrapperBtn>
    </>
  );
}

export default Filter;
