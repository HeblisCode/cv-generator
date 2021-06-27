import React from "react";
import { SidebarListElement } from "./SideBarListElement";

class SideBarPreview extends React.Component {
  render() {
    const { telephone, address, email } = this.props.data;
    return (
      <div className="sideBarPreview">
        <div className="image"></div>
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
