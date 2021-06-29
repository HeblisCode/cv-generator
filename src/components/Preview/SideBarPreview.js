import React from "react";
import { SidebarListElement } from "./SideBarListElement";
import placeHolder from "../../images/placeHolder.png";

class SideBarPreview extends React.Component {
  render() {
    const { telephone, address, email, photoURL } = this.props.data;
    console.log(photoURL || "#");
    return (
      <div className="sideBarPreview">
        <div className="image">
          <img src={photoURL || placeHolder} alt=""></img>
        </div>
        <div className="contacts">
          <div className="previewHeader">
            <h3>Contacts</h3>
          </div>
          <SidebarListElement text={address} icon="location_on" />
          <SidebarListElement text={telephone} icon="phone" />
          <SidebarListElement text={email} icon="email" />
        </div>
      </div>
    );
  }
}

export default SideBarPreview;
