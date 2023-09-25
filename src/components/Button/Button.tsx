import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  size?: number;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn}
      style={{ width: `${props.size ? `${props.size * 8}rem` : "8rem"}` }}
    >
      {props.text}
    </div>
  );
};

export default Button;
