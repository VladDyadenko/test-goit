import { Container, Text, Wrapper } from "./Filter.styled";

function Filter({ followers }) {
  const all = followers.length;
  const follow = followers.filter((item) => item.isFollower === true);
  const followings = followers.filter((item) => item.isFollower === false);

  return (
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
  );
}

export default Filter;
