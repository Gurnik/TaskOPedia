//import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/style.css";
import Header from "./Header";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<React.StrictMode></React.StrictMode>);

function MainBody() {
  const whatWeWillLearn = "React JS";
  // let whatWeWillLearn = "React JS";
  // var whatWeWillLearn = "React JS"; typically not used
  const lectureCount = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!{" "}
        <br />
        Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foudation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/*
      <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> 
  */}
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Student />
    <Student />
    <Student />
    <Footer />
  </div>
);
