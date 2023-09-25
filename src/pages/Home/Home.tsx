import { useSelector } from "react-redux";
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
  const projects = useSelector((state: any) => state.projects.projects);

  return (
    <div className={styles.homePage}>
      <Navbar />
      <AddProgress />
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
