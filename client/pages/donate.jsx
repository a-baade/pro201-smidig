import React, {useContext} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {ApiContext} from "../apiContext";
import {useLoading} from "../useLoading";
import Arrow from "../pics/icons/arrow.png";
import LoadingWheel from "../components/loadingSpinner";

export function DonateModule({ charity:
    { name, _id, bgImage, charityLogo }
}) {

  // Not functional
  return (
    <div className={"donate-page page-margin custom-shadow"}>
      <Link to={"/charities"}>
        <div className={"back-button custom-shadow-button"}>
          <img src={Arrow} />
        </div>
      </Link>
      <div className={"donate-page-top"}>
        <img src={bgImage} />
      </div>
      <div className={"donate-page-content"}>
        <img src={charityLogo} className={"donate-logo custom-shadow"} />
        <h2>Donate to {name}</h2>
        <p>Select amount (minimum $ 10.00)</p>
        <div className={"donate-form-amount"}>
          <button className={"custom-shadow-button"}>$ 100.00</button>
          <button className={"custom-shadow-button"}>$ 50.00</button>
          <button className={"custom-shadow-button"}>$ 25.00</button>
          <input type={"text"} placeholder={"Other amount"} />
        </div>
        <div className={"donate-text-div"}>
          <p>How often would you like to donate</p>
          <div className={"information-icon"}>
            ?
            <div className={"information-box"}>
              Choose how often you would like to donate selected amount to this
              charity. You can change amount and frequency at any time.
            </div>
          </div>
        </div>

        <div className={"donate-form-frequency"}>
          <div>
            <input
              type={"radio"}
              id={"monthly"}
              name={"donation-frequency"}
              value={"monthly"}
            />
            <label htmlFor={"monthly"}>Monthly</label>
          </div>
          <div>
            <input
              type={"radio"}
              id={"quarterly"}
              name={"donation-frequency"}
              value={"quarterly"}
            />
            <label htmlFor={"quarterly"}>Quarterly</label>
          </div>
          <div>
            <input
              type={"radio"}
              id={"semiannually"}
              name={"donation-frequency"}
              value={"semiannually"}
            />
            <label htmlFor={"semiannually"}>Semiannually</label>
          </div>
          <div>
            <input
              type={"radio"}
              id={"annually"}
              name={"donation-frequency"}
              value={"annually"}
            />
            <label htmlFor={"annually"}>Annually</label>
          </div>
        </div>
        <p className={"donate-text-button"}>
          Donate $ XXXX to {name} every XX month(s)
        </p>
        <div>
          <button className={"donate-page-button custom-shadow-button"}>
            Donate with Debit or Credit Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default function donate() {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const {donateCharity} = useContext(ApiContext);
  const {loading, error, data} = useLoading(
    async () => await donateCharity(id),
    []
  );

  if (loading) {
    return <LoadingWheel/>;;
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
      <ul className={"donate-page-container"}>
        {data.map((charity, index) => (
          <DonateModule key={index} charity={charity} />
        ))}
      </ul>
    </div>
  );
}
