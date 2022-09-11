import React, { useEffect, useState } from "react";
// import { HiOutlineDesktopComputer } from "react-icons/hi";

import { Table } from "react-bootstrap";
// import { Badge } from "react-bootstrap";
// import useAuth from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";

export default function Viewdemands() {
  const [demands, setDemands] = useState();
   useEffect(() => {
       fetch('http://localhost:5000/groups')
         .then(res => res.json())
         .then(data => setDemands(data));
     }, []);

  return (
    <div className="table bg-light my-2">
      <h4 className="">Here Your Road Information</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Route Number</th>
            <th>Student Time Slot</th>
            <th>Student Quantity</th>
            <th>Teacher Route Number</th>
            <th>Teacher Time Slot</th>
            <th>Teacher Quantity</th>
            <th>Staff or Official Route Number</th>
            <th>Staff or Official Time Slot</th>
            <th>Staff or Official Quantity</th>
            <th>Event Route Number</th>
            <th>Event Time Slot</th>
            <th>Event Quantity</th>
          </tr>
        </thead>
        {demands?.map((demands) => (
          <tbody key={demands?._id}>
            <tr>
              <td>{demands?.studroute}</td>
              <td>{demands?.studtime}</td>
              <td>{demands?.studquantity}</td>
              <td>{demands?.tchrroute}</td>
              <td>{demands?.tchrtime}</td>
              <td>{demands?.tchrquantity}</td>
              <td>{demands?.staffroute}</td>
              <td>{demands?.stafftime}</td>
              <td>{demands?.staffquantity}</td>
              <td>{demands?.eventroute}</td>
              <td>{demands?.eventtime}</td>
              <td>{demands?.eventquantity}</td>

             
             
            </tr>
            
          </tbody>
        ))}
      </Table>
    </div>
  );
}