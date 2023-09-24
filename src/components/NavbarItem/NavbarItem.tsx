import styles from "./styles.module.scss";

interface NavbarItmProps {
  name: string;
  logo: string;
  activeOption: string;
  setActive: Function;
}

const NavbarItem = (props: NavbarItmProps) => {
  console.log(props.activeOption);
  return (
    <div
      className={`${styles.navItm} ${
        props.activeOption === props.name ? styles.itmActive : ""
              }`}
          
          onClick={() => {
              props.setActive(props.name)
          }}
    >
      <div className={styles.navItmLogo}>
        <img src={props.logo} alt="" />
      </div>
      <div className={styles.navItmName}>{props.name}</div>
    </div>
  );
};

export default NavbarItem;
