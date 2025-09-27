import React from "react";

const Task = ({ selectTicket, handleCompelet, resolved, setResolved }) => {
  //   console.log(selectTicket);
  //   const handleresolved = () => {
  //     const currentData = [...resolved, selectTicket];
  //     console.log(resolved);
  //     setResolved(currentData);
  //     // console.log(currentData);
  //   };
  return (
    <div className="bg-gray-100 border-0 shadow ">
     
        <h1 className="text-lg bg-white ">{selectTicket.title}</h1>
        <button
          onClick={() => handleCompelet(selectTicket)}
          className="bg-green-400 text-lg w-full rounded-lg"
        >
          Compelete
        </button>
      </div>
    
  );
};

export default Task;
