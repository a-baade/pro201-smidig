import React, {useContext, useEffect, useState} from "react";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";

import PlaceholderBackground from "../pics/bg-pictures/charities-placeholder.jpg";
import PlaceholderLogo from "../pics/bg-pictures/charities-logo-placeholder.png";
import {fetchJSON} from "../lib/fetchJSON";

function CharityCard({charity: {name, description, categories, year}}){

    // Replace placeholders with actual charities images
  return (
      <div className={"charity-card"}>
        <div className={"charity-background"} style={{backgroundImage: `url( ${PlaceholderBackground} )`}}>
          <img className={"charity-img"} src={PlaceholderLogo} alt={"Logo"}/>
        </div>
        <div className={"charity-card-content"}>
          <h3>{name}</h3>
          <p>{description}</p>
            <p>Category: {categories}</p>
            <p>Year: {year}</p>
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
    <div>
          <div>
          <form onSubmit={handleSubmitQuery}>
              <label>Filter:
              <input
                id={"category-query"}
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
              />
                  <button>Filter</button>
              </label>
              <input value={search} onChange={(e) => handleSearch(e.target.value)} />
              {search && <div>Results for {search}</div>}
          </form>
          </div>
        <ul className={"charity-parent-cont"}>
          {data.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
          ))}
        </ul>
    </div>
  );
}