import React, { useState } from "react";
import { use } from "react";
import Ticket from "../Ticket/Ticket";
import Tasks from "../TasksStutus/Tasks";
import Resolved from "../Resolved/Resolved";

const Tickets = ({
  fetchpromise,
  selectTickets,
  setSelectTickets,
  handleCompelet,
  resolved,
  setResolved,
}) => {
  const tickets = use(fetchpromise);
  // const [data, setData] = useState(tickets);
  // const filterData = data.filter((item) => {
  //   resolved.map((element) => element.id !== item.id);
  // });
  // console.log(filterData);
  return (
    <div className="flex flex-col sm:flex-row justify-between w-11/12 mx-auto my-5">
      <div className="">
        <h1 className="font-bold text-2xl ">Customer Tickets</h1>
        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            {tickets.map((ticket) => (
              <Ticket
                selectTickets={selectTickets}
                setSelectTickets={setSelectTickets}
                ticket={ticket}
                setResolved={setResolved}
                resolved={resolved}
              ></Ticket>
            ))}
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex-col w-[300px]">
        <Tasks
          selectTickets={selectTickets}
          handleCompelet={handleCompelet}
          resolved={resolved}
          setResolved={setResolved}
        ></Tasks>
        <div className="my-5">
          <Resolved resolved={resolved}></Resolved>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
