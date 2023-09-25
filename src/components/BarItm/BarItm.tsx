import styles from "./styles.module.scss";

interface BarItmProps {
  color: string;
  size: number;
  value: number;
}

const BarItm = (props: BarItmProps) => {
  return (
    <span
      className={styles.bar}
      style={{ backgroundColor: props.color, height: `${props.size * 100}%` }}
      title={String(props.value)}
    ></span>
  );
};

export default BarItm;
