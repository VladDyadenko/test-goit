import { HomeBox, HomeDescr, HomeImg } from "./Home.styled";
import Twetter from "../../assets/images/twitter-logo_large.jpg";

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Twetter} alt="img" />
      <HomeDescr>
        Test work with React is brought to your attention. For creating this
        work, I want to thank everyone who taught me - lecturers, mentors,
        administrators and all others, inspired and did not interfere with work
        - beloved wife and children. Sincerely, Vladimir Dyadenko.
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;
