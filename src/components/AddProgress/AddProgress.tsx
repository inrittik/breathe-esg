import { useState } from "react";
import Button from "../Button/Button";
import styles from "./styles.module.scss";
import { Slider } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  inactivateModal,
  updateProject,
} from "../../features/projects/projectSlice";

const AddProgress = () => {
  const dispatch = useAppDispatch();
  const addModal = useAppSelector((state) => state.projects.addModal);
  const projects = useAppSelector((state) => state.projects.projects);
  const [sliderValue, setSliderValue] = useState(0);
  const selectedProject = projects[addModal.projectId - 1];
  const handleClick = (e: any) => {
    if (e.target.className !== "_modalCnt_1kilg_12") return;

    dispatch(inactivateModal());
  };

  const handleSubmit = () => {
    if (!addModal.active) return;
    dispatch(
      updateProject({
        id: addModal.projectId,
        scoreAdded: sliderValue,
      })
    );
    dispatch(inactivateModal());
  };
  return (
    <div className={styles.modalCnt} onClick={handleClick}>
      <div className={styles.modal}>
        <div className={styles.modalHead}>Add Progress</div>
        <div className={styles.modalBody}>
          <div className={styles.addProjectElement}>
            <div className={styles.elementTitle}>Programme Name</div>
            <div className={styles.elementName}>{selectedProject.name}</div>
          </div>
          <div className={styles.addProjectElement}>
            <div className={styles.elementTitle}>Add progress count</div>
            <div className={styles.elementName}>
              <Slider
                max={selectedProject.target - selectedProject.score}
                value={sliderValue}
                onChange={(value) => {
                  setSliderValue(value);
                }}
              />
            </div>
          </div>
          <div className={styles.modalCntrols}>
            <div onClick={handleSubmit}>
              <Button text="Submit" size={0.4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProgress;
