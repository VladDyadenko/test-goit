import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillRewindFill } from "react-icons/bs";
import {
  ButtonContainer,
  ButtonSelect,
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
      <WrapperBtn>
        <ButtonContainer>
          <ButtonSelect onClick={onGoHome} variant="contained">
            <BsFillRewindFill style={{ marginRight: "10px" }} /> Back to Home
          </ButtonSelect>
        </ButtonContainer>
      </WrapperBtn>
      <Wrapper>
        <Container>
          <ButtonSelect
            onClick={handleAllClick}
            variant="contained"
            sx={{
              color:
                filter === "all" || filter === undefined ? "#00ff00" : "#fff",
            }}
          >
            All
          </ButtonSelect>
          <Text variant="h5" component="h3">
            {all}
          </Text>
        </Container>
        <Container>
          <ButtonSelect
            onClick={handleFollowClick}
            variant="contained"
            sx={{ color: filter === "follow" ? "#00ff00" : "#fff" }}
          >
            Follow
          </ButtonSelect>
          <Text variant="h5" component="h3">
            {follow.length}
          </Text>
        </Container>
        <Container>
          <ButtonSelect
            onClick={handleFollowingsClick}
            variant="contained"
            sx={{ color: filter === "followings" ? "#00ff00" : "#fff" }}
          >
            Followings
          </ButtonSelect>
          <Text variant="h5" component="h3">
            {followings.length}
          </Text>
        </Container>
      </Wrapper>
    </>
  );
}

export default Filter;
