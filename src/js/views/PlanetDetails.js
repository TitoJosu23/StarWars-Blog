import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";


 const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
  const params = useParams();

  console.log("I need to render the planet ", params.planet_id)
  console.log("this is the store",store.planets)
  const myPlanet = store.planets.find(p => p.uid === params.planet_id)
  if(myPlanet === null || myPlanet === undefined) {
    return <img className="fixed mx-auto" src="https://mpudata.sfo2.digitaloceanspaces.com/original/2X/6/6f7d37cd5f7ef08a2a17602e0aa6ad3a6880d747.jpeg" />
  }
	return (
		<div className="card mb-3" style={{maxWidth:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://mpudata.sfo2.digitaloceanspaces.com/original/2X/6/6f7d37cd5f7ef08a2a17602e0aa6ad3a6880d747.jpeg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 text-center">
      <div className="card-body px-5">
        <h5 className="card-title">{myPlanet.name}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
	);
};

export default PlanetDetails;