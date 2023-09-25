import { useAppDispatch } from "../../app/hooks";
import { activateModal } from "../../features/projects/projectSlice";
import styles from "./styles.module.scss";
import { Progress } from "antd";

interface ProjectCardProps {
  id: number;
  name: string;
  target: number;
  score: number;
  prevScore: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  let percentInc = 0;
  if (props.score && props.prevScore) {
    percentInc = Math.round(
      ((props.score - props.prevScore) / props.prevScore) * 100
    );
  } else if (props.score) {
    percentInc = 100;
  }
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(activateModal(props.id));
  };
  return (
    <div className={styles.cardCnt} onClick={handleClick}>
      <div className={styles.cardHead}>{props.name}</div>
      <div className={styles.cardBody}>
        <div className={styles.pCardScore}>
          {Math.round((props.score / props.target) * 100)}/100
        </div>
        <div className={styles.pCardChange}>
          <div className={styles.arrow}></div>
          {percentInc}%
        </div>
      </div>
      <div className={styles.cardTarget}>
        TARGET
        <Progress
          showInfo={false}
          percent={Math.round((props.score / props.target) * 100)}
          strokeColor="#39b54a"
          trailColor="#E6F2EA"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
