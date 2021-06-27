import "./Preview.css";
import React from "react";
import EducationPreview from "./EducationPreview";
import WorkPreview from "./WorkPreview";
import SideBarPreview from "./SideBarPreview";
import HeaderPreview from "./HeaderPreview";

class Preview extends React.Component {
  render() {
    const { generalInfos, works, educations } = this.props;

    return (
      <div className="preview mainElement">
        <HeaderPreview data={generalInfos} />
        <SideBarPreview data={generalInfos} />
        <div className="mainPreview">
          <EducationPreview data={educations} />
          <WorkPreview data={works} />
        </div>
      </div>
    );
  }
}

export default Preview;
