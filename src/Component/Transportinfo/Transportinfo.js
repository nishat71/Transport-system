import React, { useEffect, useState } from "react";
// import { HiOutlineDesktopComputer } from "react-icons/hi";

import { Table } from "react-bootstrap";
// import { Badge } from "react-bootstrap";
// import useAuth from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";

export default function Transportinfo() {
  const [info, setInfo] = useState();
   useEffect(() => {
       fetch('http://localhost:5000/suggestions')
         .then(res => res.json())
         .then(data => setInfo(data));
     }, []);

  return (
    <div className="table bg-light my-2">
      <h4 className="">Here Your Transport Information</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Bus Code Number</th>
            <th>Student Bus Route</th>
            <th>Student Bus Time Schedule</th>
          
            <th>Teacher Bus Code Number</th>
            <th>Teacher Bus Route</th>
            <th>Teacher Bus Time Schedule</th>
            <th>Staff Bus Code Number</th>
            <th>Staff Bus Route</th>
            <th>Staff Bus Time Schedule</th>
          
          </tr>
        </thead>
        {info?.map((info) => (
          <tbody key={info?._id}>
            <tr>
              <td>{info?.studbuscodename}</td>
              <td>{info?.studroute}</td>
              <td>{info?.studtime}</td>
              <td>{info?.tchrcodename}</td>
              <td>{info?.tchrroute}</td>
              <td>{info?.tchrtime}</td>
              <td>{info?.staffcodename}</td>
              <td>{info?.staffroute}</td>
              <td>{info?.stafftime}</td>
            </tr>
            
          </tbody>
        ))}
      </Table>
    </div>
  );
}