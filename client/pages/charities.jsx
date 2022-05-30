import React, { useContext } from "react";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";

import { Link } from "react-router-dom";

function CharityCard({
  charity: { _id, name, description, bgImage, charityLogo },
}) {
  // Replace placeholders with actual charities images
  return (
    <div className={"charity-card"}>
      <div
        className={"charity-background"}
        style={{ backgroundImage: `url( data:image/png;base64${bgImage} )` }}
      >
        <img
          src={`data:image/png;base64${charityLogo}`}
          className={"charity-img"}
        />
      </div>

      <div className={"charity-card-content"}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={"card-buttons"}>
          <Link to={{ pathname: "/charities/charity/id?id=" + _id }}>
            <button className="card-btn-left card-btn">Read more</button>
          </Link>
          <Link to={"/"}>
            <button className="card-btn-right card-btn">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Charities() {
  const { allCharities } = useContext(ApiContext);
  const { loading, error, data } = useLoading(
    async () => await allCharities(),
    []
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
          {data?.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
          ))}
        </ul>
      </div>
    </div>
  );
}
