import React from "react";

import "./Builder.css";

const Builder = (props) => {
  return (
    <div className="builder">
      <div>{props.title}</div>
      <button onClick={props.add}>اضافه</button>
      <button onClick={props.remove}>حذف</button>
    </div>
  );
};

export default Builder;
