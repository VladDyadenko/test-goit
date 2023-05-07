import { useDispatch, useSelector } from "react-redux";
import { addDisplayedItems } from "../../Redux/operetions";
import Follower from "./Follower";
import { LoadButton, UserContainer } from "./FollowerCard.stayled";
import { selectItemsPerPage, selectCurrentPage } from "../../Redux/selectors";

const FollowerCard = ({ followers }) => {
  const itemsPage = useSelector(selectItemsPerPage);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(addDisplayedItems());
  };

  const displayedFollowers = followers.slice(0, currentPage * itemsPage);

  return (
    <>
      <UserContainer>
        {displayedFollowers.map(
          ({ id, avatar, followers, tweets, isFollower }) => (
            <Follower
              key={id}
              id={id}
              avatar={avatar}
              followers={followers}
              tweets={tweets}
              isFollower={isFollower}
            />
          )
        )}
      </UserContainer>
      {displayedFollowers.length < followers.length && (
        <LoadButton variant="contained" onClick={handleShowMore}>
          Load More
        </LoadButton>
      )}
    </>
  );
};

export default FollowerCard;
