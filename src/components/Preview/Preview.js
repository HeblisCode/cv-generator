import React from "react";
import GeneralInfoPreview from "./GeneralInfoPreview";
import EducationPreview from "./EducationPreview";
import WorkPreview from "./WorkPreview";

class Preview extends React.Component {
  render() {
    const { generalInfos, works, educations } = this.props;

    return (
      <div className="preview">
        <GeneralInfoPreview data={generalInfos} />
        <EducationPreview data={educations} />
        <WorkPreview data={works} />
      </div>
    );
  }
}

export default Preview;
