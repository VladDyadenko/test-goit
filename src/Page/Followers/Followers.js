import { useDispatch, useSelector } from "react-redux";
import FollowerCard from "../../components/FollowerCard/FollowerCard";
import { useEffect } from "react";
import { fetchContacts } from "../../Redux/operetions";
import { selectContacts } from "../../Redux/selectors";
import Filter from "../../components/Filter/Filter";

const Followers = () => {
  const followers = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const contactsFromStorage = JSON.parse(
      localStorage.getItem("persist:root")
    );

    if (contactsFromStorage === null) {
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  return (
    <>
      <Filter followers={followers} />
      <FollowerCard followers={followers} />
    </>
  );
};

export default Followers;
