import React from "react";

class WorkPreview extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return <div></div>;
    return (
      <div className="educationsContainerPreview">
        {data.map((education) => {
          const { position, company, city, from, to, id } = education;
          return (
            <div key={id} className="educationPreview">
              <h3>{position}</h3>
              <p>
                {company}, {city}
              </p>
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

export default WorkPreview;
