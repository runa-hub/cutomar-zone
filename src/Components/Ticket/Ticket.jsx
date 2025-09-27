import React, { useState } from "react";
import { toast } from "react-toastify";

const Ticket = ({
  ticket,
  setSelectTickets,
  selectTickets,
  setResolved,
  resolved,
}) => {
  const { title, description, id, priority, customer, createdAt, status } =
    ticket;
  // const [isOpen, setIsOpen] = useState(true);
  const handlerTicket = (tickets) => {
    // setIsOpen((isOpen) => !isOpen);
    toast("in progresing");
    setSelectTickets([...selectTickets, tickets]);
  };

  return (
    <div>
      <div
        onClick={() => handlerTicket(ticket)}
        className="border-2 border-gray-100 p-5 cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">{title}</h1>
          <button
            className={`p-1 rounded-lg ${
              status === "Open" ? "bg-green-200" : " "
            } ${status === "In Progress" ? "bg-yellow-100" : " "}`}
          >
            <i
              className={`fa-solid fa-circle text-[10px] 
      ${status === "Open" ? "text-green-800" : ""}
      ${status === "In Progress" ? "text-yellow-500" : ""}
      ${status === "Closed" ? "text-gray-500" : ""}
    `}
            ></i>
            {status}
          </button>
        </div>
        <p className="text-[14px] text-gray-500">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-2">
            <p>{id}</p>
            <p
              className={`${priority === "High" ? "text-red-400" : " "} ${
                priority === "Medium" ? "text-yellow-300" : " "
              } ${priority === "Low" ? "text-green-900" : " "} ${
                priority === "Critical" ? "text-orange-500" : " "
              }`}
            >
              {priority}
            </p>
          </div>
          <div className="flex justify-between gap-5">
            <h1>{customer}</h1>
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
