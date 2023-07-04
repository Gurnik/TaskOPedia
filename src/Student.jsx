// import { faker } from "@faker-js/faker";

export default function Student(props) {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img
            //src={`https://ui-avatars.com/api/?name=${props.name}`} // from : https://ui-avatars.com/api/
            // src={faker.image.avatar()} // from : https://fakerjs.dev/api/image.html#people
            src={props.headshot}
            className="w-100 py-2"
          ></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}
