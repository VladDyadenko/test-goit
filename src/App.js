import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import Home from "./Page/Home/Home";
import Layout from "./Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./Redux/operetions";
import { selectOperetion } from "./Redux/selectors";
import Loader from "./components/Loader/Loader";
const Followers = lazy(() => import("./Page/Followers/Followers"));

function App() {
  const dispatch = useDispatch();
  const operetion = useSelector(selectOperetion);

  useEffect(() => {
    const userFromStorage = JSON.parse(
      localStorage.getItem("persist:root")
    );

    if (userFromStorage === null) {
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  return (
    <> {operetion ? (
      <Loader/>
    ) :
      (<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>)}
    </>
  );
}

export default App;
