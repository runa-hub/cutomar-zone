import Nav from "./Components/Navbar/Nav";
import Tickets from "./Components/Tickets/Tickets";
import { Suspense, useState } from "react";
import Footer from "./Components/Footer/Footer";

import Resolved from "./Components/Resolved/Resolved";
// import vector1 from './assets/vector1.png'
import { toast, ToastContainer } from "react-toastify";
const fetchTickets = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchpromise = fetchTickets();
  const [selectTickets, setSelectTickets] = useState([]);
  const [resolved, setResolved] = useState([]);
  // console.log(resolved);
  // console.log(selectTickets);
  const handleCompelet = (ticket) => {
    const filterData = selectTickets.filter((t) => t.id !== ticket.id);
    toast("your work is compeleted");
    const filter = selectTickets.find((t) => t.title == selectTickets.title);
    // console.log(filterData);
    setSelectTickets(filterData);

    setResolved((resolved) => [...resolved, ticket]);
  };

  return (
    <>
      <Nav resolved={resolved} selectTickets={selectTickets}></Nav>
      <Suspense fallback={<p>please wait</p>}>
        <Tickets
          handleCompelet={handleCompelet}
          selectTickets={selectTickets}
          setSelectTickets={setSelectTickets}
          fetchpromise={fetchpromise}
          resolved={resolved}
          setResolved={setResolved}
        ></Tickets>
      </Suspense>
      <ToastContainer></ToastContainer>

      <Footer></Footer>
    </>
  );
}

export default App;
