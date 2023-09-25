import {useEffect} from 'react'
import { useAppSelector } from "../../app/hooks";
import DropDown from "../../components/DropDown/DropDown";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import AddProgress from "../../components/AddProgress/AddProgress";

interface projectIn {
  id: number,
  name: string,
  target: number,
  score: number,
  prevScore:number
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
            {
              projects.map((project:projectIn) => {
                return <ProjectCard {...project} key={String(project.id)} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
