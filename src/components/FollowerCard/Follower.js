import { useDispatch, useSelector } from "react-redux";
import {
  AbstractionImg,
  BtnWrapper,
  FollowerBtn,
  FollowerCardBox,
  FollowersDescr,
  Item,
  Line,
  LogoImg,
  TweetsDescr,
  UserImg,
} from "./FollowerCard.stayled";
import imagCardHeader from "../../assets/images/imagCardHeader.png";
import Logo from "../../assets/images/Logo.png";
import { addFollower, deleteFollower } from "../../Redux/operetions";
import { selectOperetion } from "../../Redux/selectors";
import { setFilter } from "../../Redux/slise";
import { RotatingLines } from "react-loader-spinner";

const Follower = ({ id, avatar, followers, tweets, isFollower }) => {
  const dispatch = useDispatch();
  const operetion = useSelector(selectOperetion);

  return (
    <>
      <Item>
        <FollowerCardBox>
          <LogoImg src={Logo} alt="Logo" />
          <AbstractionImg src={imagCardHeader} alt="abstraction" />
          <Line />
          <UserImg src={avatar} alt="User"></UserImg>
          <TweetsDescr>{tweets} tweets</TweetsDescr>
          <FollowersDescr>
            {followers.toLocaleString("en-US")} FOLLOWERS
          </FollowersDescr>
          <BtnWrapper>
            <FollowerBtn
              sx={{
                background: isFollower ? "#5cd3a8" : "#ebd8ff",
                "&:hover": {
                  background: isFollower ? "#5cd3a8" : "#ebd8ff",
                },
              }}
              variant="contained"
              onClick={() => {
                if (isFollower) {
                  dispatch(deleteFollower(id));
                  // const displayedItems = follower.filter(
                  //   (item) => item.id !== id
                  // );
                  // dispatch(setDisplayedItems(displayedItems));
                  dispatch(setFilter("all"));
                } else {
                  dispatch(addFollower(id));
                  // const displayedItems = follower.filter(
                  //   (item) => item.id !== id
                  // );
                  // dispatch(setDisplayedItems(displayedItems));
                  dispatch(setFilter("all"));
                }
              }}
            >
              {operetion === id ? (
                <RotatingLines
                  strokeColor="#1565c0"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="25"
                  visible={true}
                />
              ) : (
                <>{isFollower ? "Following" : "Follow"}</>
              )}
            </FollowerBtn>
          </BtnWrapper>
        </FollowerCardBox>
      </Item>
    </>
  );
};
export default Follower;
