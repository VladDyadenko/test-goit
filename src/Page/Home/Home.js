import { HomeBox, HomeDescr, HomeImg } from "./Home.styled";
import Twetter from "../../assets/images/twitter-logo_large.jpg";

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Twetter} alt="img" />
      <HomeDescr>
        До Вашої уваги представляється тестова робота з React. За створення цієї
        роботи хочу подякувати всіх, хто мене вчив - лектори, ментори,
        адміністратори та всі інші, надихав та не заважав працювати - кохана
        дружина та діти. З повагою до всіх Vladimir Dyadenko.
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;
