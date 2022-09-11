import React, { useEffect, useState } from "react";
// import { HiOutlineDesktopComputer } from "react-icons/hi";

import { Table } from "react-bootstrap";
// import { Badge } from "react-bootstrap";
// import useAuth from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";

export default function Rotesinfo() {
  const [routes, setRoutes] = useState();
   useEffect(() => {
       fetch('http://localhost:5000/addroutes')
         .then(res => res.json())
         .then(data => setRoutes(data));
     }, []);

  return (
    <div className="table bg-light my-2">
      <h4 className="">Here Your Road Information</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Route Number</th>
            <th>Start Location</th>
            <th>Labeling</th>
            <th>Start Time</th>
            <th>End Location</th>
          </tr>
        </thead>
        {routes?.map((routes) => (
          <tbody key={routes?._id}>
            <tr>
              <td>{routes?.route}</td>
              <td>{routes?.startlocation}</td>
              <td>{routes?.startlabel}</td>
              <td>{routes?.starttime}</td>
              <td>{routes?.endlocation}</td>
             
             
            </tr>
            
          </tbody>
        ))}
      </Table>
    </div>
  );
}