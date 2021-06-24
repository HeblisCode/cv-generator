import React from "react";

class Preview extends React.Component {
  render() {
    const { generalInfos, works, educations } = this.props;

    return (
      <div className="preview">
        <p>{generalInfos}</p>
        <p>{works}</p>
        <p>{educations}</p>
      </div>
    );
  }
}

export default Preview;
