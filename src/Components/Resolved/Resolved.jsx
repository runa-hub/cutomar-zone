import React from "react";
import Resolve from "../Resolve/Resolve";

const Resolved = ({ resolved }) => {
  // console.log(resolved)
  return (
    <div>
      <h1 className="font-bold text-2xl ">Resolved Task</h1>
      {resolved.map((resolve)=><Resolve resolve={resolve}></Resolve>)}
    </div>
  );
};

export default Resolved;
