import styles from "./styles.module.scss";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import Button from "../Button/Button";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeForm, login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;
        dispatch(
          login({
            email: firebaseUser.email as string,
            fname: firstName,
            lname: lastName,
          })
        );
        toast.success("SignUp Successful");
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
    <div className={styles.signupForm}>
      <div className={styles.formHead}>SIGNUP</div>
      <div className={styles.fName}>
        <label>First Name</label>
        <Input
          placeholder="John"
          size="large"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className={styles.lName}>
        <label>Last Name</label>
        <Input
          placeholder="Stones"
          size="large"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
        <Button text="Signup" handler={handleSignup} />
      </div>

      {loading ? <Loader /> : ""}
      <div
        className={styles.signup}
        onClick={() => {
          dispatch(changeForm());
        }}
      >
        Already have an account? Login
      </div>
    </div>
  );
};

export default SignupForm;
