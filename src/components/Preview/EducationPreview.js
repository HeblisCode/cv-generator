import React from "react";

class EducationPreview extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return <div></div>;
    return (
      <div className="educationsContainerPreview">
        {data.map((education) => {
          const { university, degree, subject, from, to, id } = education;
          return (
            <div key={id} className="educationPreview">
              <h3>{university}</h3>
              <p>Degree: {degree}</p>
              <p>Subject: {subject}</p>
              <p>
                {from} - {to}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationPreview;
