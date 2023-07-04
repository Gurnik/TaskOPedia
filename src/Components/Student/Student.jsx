// import { faker } from "@faker-js/faker";
import React from "react";

//export default function Student(props) {
//const Student = (props) => {
class Student extends React.Component {
  render() {
    return (
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-2">
            <img
              //src={`https://ui-avatars.com/api/?name=${props.name}`} // from : https://ui-avatars.com/api/
              // src={faker.image.avatar()} // from : https://fakerjs.dev/api/image.html#people
              // src={props.headshot} // without this in class component --> Error: 'props' is not defined  no-undef
              src={this.props.headshot}
              className="w-100 py-2"
            ></img>
          </div>
          <div className="col-8">
            {this.props.name}
            <br />
            Coding Experience {this.props.experience} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Student;
