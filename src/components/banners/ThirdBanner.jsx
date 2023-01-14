import style from "./ThirdBanner.module.css";
import BannerImg1 from "../../assets/image-retro-pcs.jpg";
import BannerImg2 from "../../assets/image-top-laptops.jpg";
import BannerImg3 from "../../assets/image-gaming-growth.jpg";

const ThirdBanner = () => {
  return (
    <div className={style.thirdBannerContainer}>
      <div className={style.thirdBanner}>
        <img src={BannerImg1} className={style.ImgThridBanner} />
        <div className={style.LeyendaContainer}>
          <h1 className={style.Tittle}>01</h1>
          <h3 className={style.SubTittle}>Reviving Retro PCs</h3>
          <p className={style.Leyenda}>
            What happends when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className={style.thirdBanner}>
        <img src={BannerImg2} className={style.ImgThridBanner} />
        <div className={style.LeyendaContainer}>
          <h1 className={style.Tittle}>02</h1>
          <h3 className={style.SubTittle}>Top 10 Laptops of 2022</h3>
          <p className={style.Leyenda}>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className={style.thirdBanner}>
        <img src={BannerImg3} className={style.ImgThridBanner} />
        <div className={style.LeyendaContainer}>
          <h1 className={style.Tittle}>03</h1>
          <h3 className={style.SubTittle}>The Growth of Gaming</h3>
          <p className={style.Leyenda}>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ThirdBanner;
