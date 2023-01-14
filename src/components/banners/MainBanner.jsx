import DesktopImg from "../../assets/image-web-3-desktop.jpg";
import MobileImg from "../../assets/image-web-3-mobile.jpg";
import style from "./MainBanner.module.css";
import useScreen from "../../hooks/useScreen";

const MainBanner = () => {
  const screen = useScreen().width;
  return (
    <div className={style.MainBannerContainer}>
      <div>
        {screen < 768 ? (
          <img src={MobileImg} className={style.ImgMainBanner} />
        ) : (
          <img src={DesktopImg} className={style.ImgMainBanner} />
        )}
      </div>
      <div className={style.ContainerLeyenda}>
        <div className={style.TittleContainer}>
          <h1>The Brigth Future of Web 3.0?</h1>
        </div>
        <div className={style.LeyendaContainer}>
          <p className={style.leyenda}>
            We dive into the next evolution of the web that claims to put the
            power of thr platfomrs back into the hands of the peopel. But is it
            really fulfilling its promise?
          </p>
          <button className={style.ReadBtn}>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
