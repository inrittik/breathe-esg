import { useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.png";
import NavbarItem from "../NavbarItem/NavbarItem";
import Category from "../../assets/navbar/Category.svg";
import Export from "../../assets/navbar/Export.svg";
import Finance from "../../assets/navbar/Finance.svg";
import KPI from "../../assets/navbar/KPI.svg";
import NGO from "../../assets/navbar/NGO.svg";
import Program from "../../assets/navbar/Program.svg";
import Project from "../../assets/navbar/Project.svg";
import Storage from "../../assets/navbar/Storage.svg";
import UserMgmt from "../../assets/navbar/UserMgmt.svg";
import Back from "../../assets/navbar/Back.svg";
import Button from "../Button/Button";

const navOptions = [
  {
    name: "Annual action plan",
    logo: Category,
  },
  {
    name: "Program dashboard",
    logo: Program,
  },
  {
    name: "Project dashboard",
    logo: Project,
  },
  {
    name: "KPI Management",
    logo: KPI,
  },
  {
    name: "Financial Dashboard",
    logo: Finance,
  },
  {
    name: "Data Upload & Integration",
    logo: Export,
  },
  {
    name: "File Storage",
    logo: Storage,
  },
  {
    name: "User Management",
    logo: UserMgmt,
  },
];

const navOptions2 = [
  {
    name: "Profile",
    logo: UserMgmt,
  },
  {
    name: "NGO Management",
    logo: NGO,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(navOptions[0].name);
  return (
    <div className={styles.navCnt}>
      <div className={styles.backBtn}>
        <img src={Back} alt="" />
      </div>
      <div className={styles.navHead}>
        <img src={logo} alt="" />
        <div className={styles.navProfile}>
          <div className={styles.profileImg}>
            <img src={profile} alt="" />
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.pname}>Tuki Joshua</div>
            <div className={styles.ptier}>Gold member</div>
          </div>
        </div>
      </div>
      <div className={styles.navBody}>
        {navOptions.map((option) => {
          return (
            <NavbarItem
              {...option}
              activeOption={active}
              setActive={setActive}
            />
          );
        })}
      </div>
      <div className={styles.navMore}>More</div>
      <div className={styles.navBody}>
        {navOptions2.map((option) => {
          return (
            <NavbarItem
              {...option}
              activeOption={active}
              setActive={setActive}
            />
          );
        })}
      </div>
      <div className={styles.btnCnt}>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
