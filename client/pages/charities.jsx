import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";
import {fetchJSON} from "../lib/fetchJSON";

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
  const {category, setCategory} = useState("");
  const {categoryQuery, setCategoryQuery} = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const {loading, error} = useLoading(
    async () => await allCharities({ category }),
    [category]
  );

    useEffect(() => {
        if (search === "") {
            fetchJSON("/api/charities").then((jsonData) => {
                setData(jsonData);
            });
        } else {
            fetchJSON(`/api/charities/search/?name=${search}`).then(
                (jsonData) => {
                    setData(jsonData);
                }
            );
        }
    }, [search]);

    function handleSubmitQuery(e) {
        e.preventDefault();
        setCategory(categoryQuery);
    }

    async function handleSearch(event) {
        await setSearch(event);
    }

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
            <input value={search} onChange={(e) => handleSearch(e.target.value)} />
            {search && <div>Results for {search}</div>}
            <form onSubmit={handleSubmitQuery}>
                    <button  id={"category-query"}
                             value={categoryQuery}
                             onChange={(e) => setCategoryQuery(e.target.value)}>Water</button>
                    <button  id={"category-query"}
                         value={categoryQuery}
                         onChange={(e) => setCategoryQuery(e.target.value)}>Knowledge</button>
            </form>
        </div>
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
