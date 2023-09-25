import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  size?: number;
  handler?: Function
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn}
      style={{ width: `${props.size ? `${props.size * 8}rem` : "8rem"}` }}
      onClick={() => {
        if(props.handler) props.handler()
      }}
    >
      {props.text}
    </div>
  );
};

export default Button;
