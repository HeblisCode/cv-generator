import React from "react";

class HeaderPreview extends React.Component {
  render() {
    const { name, surname, qualification } = this.props.data;
    return (
      <div className="headerPreview">
        <h2>
          {name} {surname}
        </h2>
        <h3>{qualification}</h3>
      </div>
    );
  }
}

export default HeaderPreview;
