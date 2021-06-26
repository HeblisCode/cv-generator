import React from "react";

class GeneralInfoPreview extends React.Component {
  render() {
    const { name, surname, qualification, telephone, address, email } =
      this.props.data;
    return (
      <div className="generalInfoPreview">
        <h2 className="previewNameTitle">
          {name} {surname}
        </h2>
        <p className="qualificationPreview">{qualification}</p>
        <div className="contacts">
          <h3 className="contactsTitlePreview">Contacts</h3>
          <p>{telephone}</p>
          <p>{address}</p>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfoPreview;
