import "./App.css";
import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfos: {
        name: "",
        surname: "",
        qualification: "",
        telephone: "",
        address: "",
        email: "",
      },
      works: [],
      educations: [],
    };

    this.generalInfosChange = this.generalInfosChange.bind(this);
    this.educationsChange = this.educationsChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  generalInfosChange(e) {
    this.setState({
      generalInfos: {
        ...this.state.generalInfos,
        [e.target.name]: e.target.value,
      },
    });
  }

  educationsChange(e) {
    this.setState({
      educations: this.state.educations.map((educ) => {
        if (educ.id === e.target.dataset.id) {
          const obj = {
            ...educ,
            [e.target.name]: e.target.value,
          };
          return obj;
        }
        return educ;
      }),
    });
  }

  addEducation() {
    this.setState({
      educations: [
        ...this.state.educations,
        {
          university: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: Math.floor(Math.random() * 99999).toString(),
        },
      ],
    });
  }

  deleteEducation(e) {
    this.setState({
      educations: this.state.educations.filter((educ) => {
        console.log(e.target.dataset.id);
        return educ.id !== e.target.dataset.id;
      }),
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />
        <Form
          generalInfoChangeHandler={this.generalInfosChange}
          educationsChange={this.educationsChange}
          educationsArray={this.state.educations}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
        />
        <Preview
          generalInfos={JSON.stringify(this.state.generalInfos)}
          works={JSON.stringify(this.state.works)}
          educations={JSON.stringify(this.state.educations)}
        />
      </div>
    );
  }
}

export default App;
