import styles from "./styles.module.scss";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Button from "../Button/Button";

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.formHead}>LOGIN</div>
      <div className={styles.email}>
        <label>Email</label>
        <Input
          placeholder="your@business.com"
          size="large"
          prefix={<UserOutlined />}
        />
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <Input.Password placeholder="Enter password" size="large" />
      </div>

      <div className={styles.btnCnt}>
        <Button text="Login" />
      </div>
    </div>
  );
};

export default LoginForm;
