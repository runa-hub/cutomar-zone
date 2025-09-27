import React from "react";
import Task from "../Task/Task";
const Tasks = ({ selectTickets, handleCompelet, resolved, setResolved }) => {
  // console.log(selectTickets)
  // console.log(resolved);
  return (
    <div >
      <h1 className="text-2xl font-bold">Tasks Status</h1>
    <div className="bg-white border-2 border-gray-100 shadow">
        {selectTickets.map((selectTicket) => (
        <Task
          selectTicket={selectTicket}
          handleCompelet={handleCompelet}
          resolved={resolved}
          setResolved={setResolved}
          selectTickets={selectTickets}
        ></Task>
      ))}
    </div>
    </div>
  );
};

export default Tasks;
