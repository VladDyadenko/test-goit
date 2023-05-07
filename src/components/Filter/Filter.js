import { Button } from "@mui/material";
import {
  ButtonContainer,
  Container,
  Text,
  Wrapper,
  WrapperBtn,
} from "./Filter.styled";
import { BsFillRewindFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayedItems, setFilter } from "../../Redux/slise";

function Filter({ followers }) {
  const all = followers.length;
  const follow = followers.filter((item) => item.isFollower === false);
  const followings = followers.filter((item) => item.isFollower === true);

  const navigate = useNavigate();
  const onGoHome = () => navigate("/");

  const dispatch = useDispatch();

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
          <Button onClick={handleAllClick} variant="contained">
            All
          </Button>
          <Text variant="h5" component="h3">
            {all}
          </Text>
        </Container>
        <Container>
          <Button onClick={handleFollowClick} variant="contained">
            Follow
          </Button>
          <Text variant="h5" component="h3">
            {follow.length}
          </Text>
        </Container>
        <Container>
          <Button onClick={handleFollowingsClick} variant="contained">
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
