import style from "./SecBanner.module.css";
const SecBanner = () => {
  return (
    <div className={style.SecBannerContainer}>
      <div className={style.SecBanner}>
        <h1 className={style.Tittle}>New</h1>
        <div className={style.ContainerNew}>
          <h3 className={style.SubTittle}>Hydrogen VS Electri Cars</h3>
          <p className={style.Leyenda}>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div className={style.ContainerNew}>
          <h3 className={style.SubTittle}>The Downsides of Al Artistry</h3>
          <p className={style.Leyenda}>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <hr />
        <div className={style.ContainerNew}>
          <h3 className={style.SubTittle}>Is VC Fundind Drying Up?</h3>
          <p className={style.Leyenda}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </div>
  );
};
export default SecBanner;
