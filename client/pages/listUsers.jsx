import React, { useContext, useEffect, useState } from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { useLoading } from "../useLoading";
import { ApiContext } from "../apiContext";

function UserCard({
  organization: {
    jobTitle,
    img: { image },
    firstName,
    lastName,
    companyName,
  },
}) {
  return (
    <div>
      <h2>{companyName}</h2>
      <p>
        {firstName} {lastName}
      </p>
      {image && (
        <img
          src={`data:image/png;base64${image}`}
          style={{ width: "200px" }}
          alt={"Profile Pic"}
        />
      )}
      <p>{jobTitle}</p>
    </div>
  );
}

export function ListUsers() {
  const { allOrganizations } = useContext(ApiContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search === "") {
      fetchJSON("/api/register").then((jsonData) => {
        setData(jsonData);
      });
    } else {
      fetchJSON(`/api/register/search/?companyName=${search}`).then(
        (jsonData) => {
          setData(jsonData);
        }
      );
    }
  }, [search]);

  const { error, loading } = useLoading(
    async () => await allOrganizations(),
    []
  );

  async function handleSearch(event) {
    await setSearch(event);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }

  return (
    <div>
      <h2>Search Members:</h2>

      <input value={search} onChange={(e) => handleSearch(e.target.value)} />
      {search && <div>Results for {search}</div>}

      {data && (
        <div>
          {data?.map((organization, index) => (
            <div key={index}>
              <UserCard key={index} organization={organization} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
