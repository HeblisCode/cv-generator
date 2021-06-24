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
    } = this.props;

    return (
      <div className="main">
        <GeneralInfos changeHandler={generalInfoChangeHandler} />
        <WorkInfos />
        <EducationInfos
          changeHandler={educationsChange}
          educationsArray={educationsArray}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
      </div>
    );
  }
}

export default Form;
