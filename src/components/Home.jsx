import MainBanner from "./banners/MainBanner";
import SecBanner from "./banners/SecBanner";
import ThirdBanner from "./banners/ThirdBanner";

const Home = () => {
  return (
    <>
      <div className="MainSetion">
        <MainBanner />
        <SecBanner />
      </div>
      <ThirdBanner />
    </>
  );
};
export default Home;
