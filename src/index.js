//import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<React.StrictMode></React.StrictMode>);

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

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
      <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div>
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
    <Footer />
  </div>
);
