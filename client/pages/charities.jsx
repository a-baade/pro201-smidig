import React, { useContext } from "react";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";

import PlaceholderBackground from "../pics/bg-pictures/charities-placeholder.jpg";
import PlaceholderLogo from "../pics/bg-pictures/charities-logo-placeholder.png";

function CharityCard({charity: {name, description}}){

    // Replace placeholders with actual charities images
  return (
      <div className={"charity-card"}>
        <div className={"charity-background"} style={{backgroundImage: `url( ${PlaceholderBackground} )`}}>
          <img className={"charity-img"} src={PlaceholderLogo}/>
        </div>
        <div className={"charity-card-content"}>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={"card-buttons"}>
            <button className="card-btn-left card-btn">Read more</button>
            <button className="card-btn-right card-btn">Donate</button>
          </div>
        </div>
      </div>
  );
}

export function Charities() {
  const {allCharities} = useContext(ApiContext);
  const {loading, error, data} = useLoading(
    async () => await allCharities(), []
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  // Add category filter
  return (
    <div>
      <div>
        <ul className={"charity-parent-cont"}>
          {data.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
          ))}
        </ul>
      </div>
    </div>
  );
}