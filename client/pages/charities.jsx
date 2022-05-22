import React, { useContext } from "react";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";

function CharityCard({charity: {name, description}}){
  return (
    <div className="flex-container">
      <div className={"charity-card"}>
        <p>{name}</p>
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

  return (
    <div>
      <div>
        <ul>
          {data.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
          ))}
        </ul>
      </div>
    </div>
  );
}