import { Menu } from "react-feather";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mobileHeader}>
      <div>
        <Menu size={24} color="#006aff" />
      </div>
      <div>
        <img
          src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
          alt="zillow-logo"
          className="w-[120px] h-[25px]"
        />
      </div>
      <div className={styles.loginContainer}>Sign In</div>
    </header>
  );
};

export default Header;
