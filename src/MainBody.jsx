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
    </div>
  );
}

export default MainBody;
