import { useDispatch } from "react-redux";
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

const Follower = ({ id, avatar, followers, tweets, isFollower }) => {
  const dispatch = useDispatch();

  return (
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
              } else {
                dispatch(addFollower(id));
              }
            }}
          >
            {isFollower ? "Following" : "Follow"}
          </FollowerBtn>
        </BtnWrapper>
      </FollowerCardBox>
    </Item>
  );
};
export default Follower;
