import { BoxLoader, LoaderSpiner } from "./Loader.styled";

const Loader = () => {
  return (
    <BoxLoader>
      <LoaderSpiner
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </BoxLoader>
  );
};

export default Loader;
