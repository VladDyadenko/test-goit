import { useSelector } from "react-redux";
import FollowerCard from "../../components/FollowerCard/FollowerCard";
import { selectContacts } from "../../Redux/selectors";
import Filter from "../../components/Filter/Filter";

const Followers = () => {
  const followers = useSelector(selectContacts);

  return (
    <>
      <Filter followers={followers} />
      <FollowerCard followers={followers} />
    </>
  );
};

export default Followers;
