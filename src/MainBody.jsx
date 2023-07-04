import Student from "./Student";

function MainBody() {
  const whatWeWillLearn = "React JS";
  // let whatWeWillLearn = "React JS";
  // var whatWeWillLearn = "React JS"; typically not used
  const lectureCount = 3;

  return (
    <div style={{ minHeight: "70vh" }}>
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
    </div>
  );
}

export default MainBody;
