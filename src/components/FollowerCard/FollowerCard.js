import { useDispatch, useSelector } from "react-redux";
import { addDisplayedItems } from "../../Redux/operetions";
import Follower from "./Follower";
import { LoadButton, UserContainer } from "./FollowerCard.stayled";
import { selectCurrentPage, selectDisplayedItems } from "../../Redux/selectors";
import { setFilter } from "../../Redux/slise";

const FollowerCard = () => {
  const displayPage = useSelector(selectDisplayedItems);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(addDisplayedItems(currentPage + 1));
    dispatch(setFilter("all"));
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
      {displayPage?.length && (
        <LoadButton variant="contained" onClick={handleShowMore}>
          Load More
        </LoadButton>
      )}
    </>
  );
};

export default FollowerCard;
