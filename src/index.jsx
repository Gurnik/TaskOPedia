//import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/style.css";
import Header from "./Header";
import Student from "./Student";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<React.StrictMode></React.StrictMode>);

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Student
      experience={2}
      name="Kris Walley"
      headshot="https://robohash.org/6VH.png?set=set4"
    />
    <Student
      experience={5}
      name="Angel Patrice"
      headshot="https://robohash.org/MA0.png?set=set4"
    />
    <Student
      experience={7}
      name="Rene Parker"
      headshot="https://robohash.org/5DF.png?set=set4"
    />
    <Footer />
  </div>
);
