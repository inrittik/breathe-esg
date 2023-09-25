import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import DropDown from "../../components/DropDown/DropDown";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import AddProgress from "../../components/AddProgress/AddProgress";
import GraphComponent from "../../components/GraphComponent/GraphComponent";

interface projectIn {
  id: number;
  name: string;
  target: number;
  score: number;
  prevScore: number;
  monthlyScores: {
    month: string;
    target: number;
    covered: number;
  }[];
}

const Home = () => {
  const projects = useAppSelector((state) => state.projects.projects);
  const addModal = useAppSelector((state) => state.projects.addModal);

  return (
    <div className={styles.homePage}>
      <Navbar />
      {addModal.active && <AddProgress />}
      <div className={styles.homeMain}>
        <div className={styles.homeHead}>
          <div className={styles.homeTitle}>Programme</div>
          <DropDown />
        </div>

        <div className={styles.homeBody}>
          <div className={styles.projectCards}>
            {projects.map((project: projectIn) => {
              return <ProjectCard {...project} key={String(project.id)} />;
            })}
          </div>

          <div className={styles.dataChart}>
            <div className={styles.chartHead}>
              <div className={styles.chartTitle}>
                <div className={styles.name}>Target</div>
                <div className={styles.name2}>Covered</div>
              </div>
            </div>
            <div className={styles.chartBody}>
              <div className={styles.chartLine}>
                <div>250</div>
              </div>
              <div className={styles.chartLine}>
                <div>200</div>
              </div>
              <div className={styles.chartLine}>
                <div>150</div>
              </div>
              <div className={styles.chartLine}>
                <div>100</div>
              </div>
              <div className={styles.chartLine}>
                <div>50</div>
              </div>
              <div className={styles.chartLine}>
                <div>0</div>
              </div>

              <div className={styles.barchartCnt}>
                {projects[0].monthlyScores.map((score, ind) => {
                  return (
                    <GraphComponent
                      key={ind}
                      label={score.month}
                      target={score.target}
                      covered={score.covered}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
