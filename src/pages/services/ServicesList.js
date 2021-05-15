import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import servicesData from "./servicesData";

export default function ServicesList() {
  const { url } = useRouteMatch();

  const services = servicesData.map((service) => (
    <h3 key={service._id}>
      <Link to={`${url}/${service._id}`}>{service.name}</Link>${service.price}
    </h3>
  ));
  return (
    <div>
      <h1>Services Page</h1>
      {services}
    </div>
  );
}
