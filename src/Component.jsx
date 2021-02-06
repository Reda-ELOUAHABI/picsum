import React from "react";
import "../src/styles.css";
var d = new Date();
const img = "https://picsum.photos/200";
export default Component;
function Component() {
  return (
    <div>
      <h1> hello</h1>
      <p alt="ah" contentEditable="true">
        {" "}
        created by Reda{" "}
      </p>
      <p> Copyright &#169; {d.getFullYear()} </p>
      <img alt="hello" src={img + "?grayscale"} />
    </div>
  );
}
