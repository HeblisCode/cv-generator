import React from "react";
import EducationInfos from "./EducationInfos";
import GeneralInfos from "./GeneralInfos";
import WorkInfos from "./WorkInfos";

class Form extends React.Component {
  render() {
    const { generalInfoChangeHandler, educationsChange, educationsArray } =
      this.props;

    return (
      <div className="main">
        <GeneralInfos changeHandler={generalInfoChangeHandler} />
        <WorkInfos
          changeHandler={educationsChange}
          educationsArray={educationsArray}
        />
        <EducationInfos />
      </div>
    );
  }
}

export default Form;
