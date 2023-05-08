import { useDispatch, useSelector } from "react-redux";
import { addDisplayedItems } from "../../Redux/operetions";
import Follower from "./Follower";
import { LoadButton, UserContainer } from "./FollowerCard.stayled";
import { selectDisplayedItems } from "../../Redux/selectors";

const FollowerCard = ({ followers }) => {
  const displayPage = useSelector(selectDisplayedItems);

  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(addDisplayedItems());
  };

  return (
    <>
      <UserContainer>
        {displayPage?.map(({ id, avatar, followers, tweets, isFollower }) => (
          <Follower
            key={id}
            id={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            isFollower={isFollower}
          />
        ))}
      </UserContainer>
      {displayPage?.length < followers?.length && (
        <LoadButton variant="contained" onClick={handleShowMore}>
          Load More
        </LoadButton>
      )}
    </>
  );
};

export default FollowerCard;
