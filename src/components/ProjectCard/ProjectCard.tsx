import styles from "./styles.module.scss";

interface ProjectCardProps {
  name: string;
  target: number;
  score: number;
  prevScore: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  let percentInc = 0;
  if (props.score && props.prevScore) {
    percentInc = (props.score - props.prevScore) / props.prevScore * 100;
  } else if (props.score) {
    percentInc = 100;
  }
  return (
    <div className={styles.cardCnt}>
      <div className={styles.cardHead}>{props.name}</div>
      <div className={styles.cardBody}>
        <div className={styles.pCardScore}>
          {(props.score / props.target) * 100}/100
        </div>
        <div className={styles.pCardChange}>{percentInc}%</div>
      </div>
      <div className={styles.cardTarget}>TARGET</div>
    </div>
  );
};

export default ProjectCard;
