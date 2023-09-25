import styles from "./styles.module.scss";
import mainLogo from "../../assets/mainLogo.webp";
import formHero from '../../assets/formHero.webp'
import LoginForm from "../../components/LoginForm/LoginForm";

const Auth = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.authFormCnt}>
        <div className={styles.formHero}>
          <img src={mainLogo} alt="breathe-esg" />
          <div className={styles.tagline}>
            Transform your ESG management with <span>BREATHE ESG</span>
          </div>
          <img src={formHero} alt="breathe-esg" className={styles.earthLogo} />
        </div>
        <div className={styles.formMain}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
