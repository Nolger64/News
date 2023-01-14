import useScreen from "../../hooks/useScreen.jsx";
import logo from "../../assets/logo.svg";
import style from "./Navbar.module.css";
import { useState } from "react";
import imgClose from "../../assets/icon-menu-close.svg";
import imgMenu from "../../assets/icon-menu.svg";
import Modal from "react-modal";

const Navbar = () => {
  const screen = useScreen().width;
  const [handleMenu, setHandleMenu] = useState(false);
  const handleMenuStatus = () => {
    setHandleMenu(!handleMenu);
  };
  return (
    <>
      {screen < 750 ? (
        <NavbarMobile MenuStatus={handleMenu} changeMenu={handleMenuStatus} />
      ) : (
        <NavbarDesk />
      )}
    </>
  );
};
const NavbarMobile = (props) => {
  return (
    <div>
      <nav className={style.navbar}>
        <div>
          <img src={logo} alt="" />
        </div>
        {props.MenuStatus ? (
          <img src={imgClose} onClick={props.changeMenu} />
        ) : (
          <img src={imgMenu} onClick={props.changeMenu} />
        )}
      </nav>
      <NavbarModal
        MenuStatus={props.MenuStatus}
        changeMenu={props.changeMenu}
      />
    </div>
  );
};
const NavbarDesk = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <a className={style.itemNavLink} href="">
            Home
          </a>
          <a className={style.itemNavLink} href="">
            New
          </a>
          <a className={style.itemNavLink} href="">
            Popular
          </a>
          <a className={style.itemNavLink} href="">
            Trending
          </a>
          <a className={style.itemNavLink} href="">
            Categories
          </a>
        </div>
      </nav>
    </div>
  );
};
const NavbarModal = (props) => {
  const root = document.getElementById("root");
  return (
    <Modal
      isOpen={props.MenuStatus}
      appElement={root}
      onRequestClose={props.changeMenu}
      className={style.modal}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <img
        className={style.modalClose}
        src={imgClose}
        onClick={props.changeMenu}
      />
      <a className={style.itemNavLinkModal} href="">
        Home
      </a>
      <a className={style.itemNavLinkModal} href="">
        New
      </a>
      <a className={style.itemNavLinkModal} href="">
        Popular
      </a>
      <a className={style.itemNavLinkModal} href="">
        Trending
      </a>
      <a className={style.itemNavLinkModal} href="">
        Categories
      </a>
    </Modal>
  );
};
export default Navbar;
