import BarItm from "../BarItm/BarItm";
import styles from "./styles.module.scss";

interface GraphComponentProps {
  label: string;
  target: number;
  covered: number;
}

// bar graph component consisting of two bar elements with different scale factor
const GraphComponent = (props: GraphComponentProps) => {
  let scaleFactor1 = props.target / 250,
    scaleFactor2 = props.covered / 250;
  return (
    <div className={styles.gCompCnt}>
      <div className={styles.gBars}>
              <BarItm color="#39b54a" size={scaleFactor1} value={props.target} />
        <BarItm color="#3779B9" size={scaleFactor2} value={props.covered} />
      </div>
      <div className={styles.gLabel}>{props.label}</div>
    </div>
  );
};

export default GraphComponent;
