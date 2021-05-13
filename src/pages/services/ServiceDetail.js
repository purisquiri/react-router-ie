import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";

export default function ServiceDetail(props) {
  const { serviceId } = useParams();
  console.log(serviceId);
  const thisService = servicesData.find((service) => service._id === serviceId);

  return (
    <div>
      <h1>Service Details</h1>
      <h3>
        {" "}
        {thisService.name} ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
    </div>
  );
}
