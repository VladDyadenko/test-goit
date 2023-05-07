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

function Filter({ followers }) {
  const all = followers.length;
  const follow = followers.filter((item) => item.isFollower === true);
  const followings = followers.filter((item) => item.isFollower === false);

  const navigate = useNavigate();
  const onGoHome = () => navigate("/");

  return (
    <>
      <Wrapper>
        <Container>
          <Text variant="h5" component="h3">
            All
          </Text>
          <Text variant="h5" component="h3">
            {all}
          </Text>
        </Container>
        <Container>
          <Text variant="h5" component="h3">
            Follow
          </Text>
          <Text variant="h5" component="h3">
            {follow.length}
          </Text>
        </Container>
        <Container>
          <Text variant="h5" component="h3">
            Followings
          </Text>
          <Text variant="h5" component="h3">
            {followings.length}
          </Text>
        </Container>
      </Wrapper>
      <WrapperBtn>
        <ButtonContainer>
          <Button onClick={onGoHome} variant="contained">
            <BsFillRewindFill style={{ marginRight: '10px' }}/>  Back to Home
          </Button>
        </ButtonContainer>
      </WrapperBtn>
    </>
  );
}

export default Filter;
