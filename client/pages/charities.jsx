import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";

function CharityCard({charity:
    { _id, name, description, bgImage, charityLogo }
}) {

  // Charity card with button to donate or charity page
  return (
    <div className={"charity-card custom-shadow"}>
      <div
        className={"charity-background"}
        style={{ backgroundImage: `url( data:image/png;base64${bgImage} )` }}
      >
        <img
          src={`data:image/png;base64${charityLogo}`}
          className={"charity-img custom-shadow"}
        />
      </div>

      <div className={"charity-card-content"}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={"card-buttons"}>
          <Link to={{ pathname: "/charities/charity/id?id=" + _id }}>
            <button className="card-button custom-shadow-button">Read more</button>
          </Link>
          <Link to={{ pathname: "/charities/donate/id?id=" +_id }}>
            <button className="card-button custom-shadow-button">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Charities() {
  const {allCharities} = useContext(ApiContext);
  const {loading, error, data} = useLoading(
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
    <div className={"page-margin"}>
      <div>
        <ul className={"charity-cards-container"}>
          {data?.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
          ))}
        </ul>
      </div>
    </div>
  );
}
