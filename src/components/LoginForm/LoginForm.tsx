import { useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import { changeForm, login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;
        console.log(userCredential);
        dispatch(
          login({
            email: firebaseUser.email as string,
            fname: "First",
            lname: "Last",
          })
        );
        toast.success("SignIn Successful");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid Credentials");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.formHead}>LOGIN</div>
      <div className={styles.email}>
        <label>Email*</label>
        <Input
          placeholder="your@business.com"
          size="large"
          prefix={<UserOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label>Password*</label>
        <Input.Password
          placeholder="Enter password"
          size="large"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.btnCnt}>
        <Button text="Login" handler={handleLogin} />
      </div>

      {loading ? <Loader /> : ""}
      <div
        className={styles.signup}
        onClick={() => {
          dispatch(changeForm());
        }}
      >
        Create an account? Signup
      </div>
    </div>
  );
};

export default LoginForm;
