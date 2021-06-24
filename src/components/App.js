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
    const index = e.target.key;
    const updatedEducation = {
      ...this.state.educations[index],
      [e.target.name]: e.target.value,
    };
    this.setState({
      educations: this.state.educations.map((educ, i) =>
        i === index ? updatedEducation : educ
      ),
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
