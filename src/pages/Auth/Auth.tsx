import styles from "./styles.module.scss";
import mainLogo from "../../assets/mainLogo.webp";
import formHero from "../../assets/formHero.webp";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import { useAppSelector } from "../../app/hooks";

const Auth = () => {
  const loginForm = useAppSelector((state) => state.auth.loginForm);
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
          {/* login/signup form based on redux state */}
          {loginForm ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
