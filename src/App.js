import { Route, Routes } from "react-router-dom";
import Followers from "./Page/Followers/Followers";
import Home from "./Page/Home/Home";
import Layout from "./Layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="followers" element={<Followers />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
