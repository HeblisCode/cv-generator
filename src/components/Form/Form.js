import "./Form.css";
import React from "react";
import EducationInfos from "./EducationInfos";
import GeneralInfos from "./GeneralInfos";
import WorkInfos from "./WorkInfos";

class Form extends React.Component {
  render() {
    const {
      generalInfoChangeHandler,
      educationsChange,
      educationsArray,
      addEducation,
      deleteEducation,
      worksArray,
      worksChange,
      deleteWork,
      addWork,
      addPhoto,
    } = this.props;

    return (
      <div className="mainElement form">
        <GeneralInfos
          changeHandler={generalInfoChangeHandler}
          addPhoto={addPhoto}
        />

        <EducationInfos
          changeHandler={educationsChange}
          educationsArray={educationsArray}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />

        <WorkInfos
          changeHandler={worksChange}
          worksArray={worksArray}
          addWork={addWork}
          deleteWork={deleteWork}
        />
      </div>
    );
  }
}

export default Form;
