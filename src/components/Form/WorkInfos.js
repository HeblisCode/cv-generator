import React from "react";
import { InputElement } from "./inputElement";

class WorkInfos extends React.Component {
  render() {
    const { changeHandler, worksArray, addWork, deleteWork } = this.props;

    return (
      <div className="formSection">
        <h2 className="sectionTitle">Works</h2>
        {worksArray.map((work) => {
          return (
            <div className="formSubsection" key={work.id}>
              <button onClick={deleteWork} data-id={work.id}>
                Delete
              </button>
              <InputElement
                changeHandler={changeHandler}
                name="position"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="company"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="city"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="from"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="to"
                id={work.id}
              />
            </div>
          );
        })}
        <button onClick={addWork}>Add Work</button>
      </div>
    );
  }
}

export default WorkInfos;
