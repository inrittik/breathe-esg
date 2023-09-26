import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import DropDown from "../../components/DropDown/DropDown";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import AddProgress from "../../components/AddProgress/AddProgress";
import GraphComponent from "../../components/GraphComponent/GraphComponent";
import { useNavigate } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

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
  const navigate = useNavigate();
  const projects = useAppSelector((state) => state.projects.projects);
  const addModal = useAppSelector((state) => state.projects.addModal);
  const [selectedProject, setSelectedProject] = useState(0); // state for project selection for bar chart
  let items: MenuProps["items"] = [];
  projects.forEach((project) => {
    if (items)
      items.push({
        label: <div>{project.name}</div>,
        key: String(project.id),
      });
  });

  const loginState = useAppSelector((state) => state.auth.loginState);
  useEffect(() => {
    // checks login state to redirect to auth page
    if (!loginState) {
      navigate("/auth");
    }
  }, []);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedProject(Number(key) - 1);
  };

  return (
    <div className={styles.homePage}>
      <Navbar />

      {/* modal */}
      {addModal.active && <AddProgress />} 

      <div className={styles.homeMain}>
        <div className={styles.homeHead}>
          <div className={styles.homeTitle}>Programme</div>
          <DropDown />
        </div>

        <div className={styles.homeBody}>
          {/* project cards */}
          <div className={styles.projectCards}>
            {projects.map((project: projectIn) => {
              return <ProjectCard {...project} key={String(project.id)} />;
            })}
          </div>

          {/* bar chart */}
          <div className={styles.dataChart}>
            <div className={styles.chartHead}>
              <div className={styles.chartTitle}>
                <div className={styles.name}>Target</div>
                <div className={styles.name2}>Covered</div>
              </div>
              <div style={{ marginRight: "2rem" }}>
                <Dropdown menu={{ items, onClick }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ cursor: "pointer" }}>
                      <MoreOutlined />
                    </Space>
                  </a>
                </Dropdown>
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
                {projects[selectedProject].monthlyScores.map((score, ind) => {
                  // bar graph element
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
