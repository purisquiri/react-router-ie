import React from "react";
import { useParams, useHistory } from "react-router-dom";
import servicesData from "./servicesData";

export default function ServiceDetail(props) {
  const { serviceId } = useParams();
  const history = useHistory();
  const thisService = servicesData.find((service) => service._id === serviceId);

  const handleClick = () => {
    console.log("submitting...");
    setTimeout(() => {
      history.push("/products");
    }, 2000);
  };

  return (
    <div>
      <h1>Service Details</h1>
      <h3>
        {" "}
        {thisService.name} ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
      <button onClick={handleClick}>go back to services</button>
    </div>
  );
}
