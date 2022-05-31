import React, { useContext } from "react";
import { ApiContext } from "./apiContext";
import { useLoading } from "./useLoading";

function OrganizationCard({
  organization: {
    firstName,
    lastName,
    img: { image },
  },
}) {
  return (
    <div>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <img src={`data:image/png;base64${image}`} width={"300px"} />
    </div>
  );
}

export function ListOrganizations() {
  const { allOrganizations } = useContext(ApiContext);
  const { loading, error, data } = useLoading(
    async () => await allOrganizations(),
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

  return (
    <div>
      <h1>All organizations</h1>
      <div>
        <ul>
          {data?.map((organization, index) => (
            <OrganizationCard key={index} organization={organization} />
          ))}
        </ul>
      </div>
    </div>
  );
}
