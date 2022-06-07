import React, { useContext } from "react";
import { Link, useSearchParams} from "react-router-dom";
import { ApiContext } from "../apiContext";
import { useLoading } from "../useLoading";
import Arrow from "../pics/icons/arrow.png";
import NewsImg1 from "../pics/bg-pictures/img_3.png";
import NewsImg2 from "../pics/bg-pictures/img_4.png";
import NewsImg3 from "../pics/bg-pictures/img_5.jpg";
import Facebook from "../pics/icons/facebook.png";
import Instagram from "../pics/icons/instagram.png";
import Snapchat from "../pics/icons/snapchat.png";
import Tiktok from "../pics/icons/tiktok.png";
import WWW from "../pics/icons/world-wide-web.png";
import LoadingWheel from "../components/loadingSpinner";

function Charity({charity:
    { _id, name, description, bgImage, charityLogo }
}) {

  // Charity page
  return (
    <div>
      <Link to={"/charities"}>
        <div className={"back-button custom-shadow-button"}>
          <img src={Arrow} />
        </div>
      </Link>
      <img
        src={`data:image/png;base64${bgImage}`}
        className={"charity-page-background"}
      />
      <div className={"charity-page-content"}>
        <div className={"charity-page-description"}>
          <div className={"charity-description-top"}>
            <img
              src={`data:image/png;base64${charityLogo}`}
              className={"charity-description-logo"}
            />
            <h2>{name}</h2>
          </div>
          <div className={"charity-description-text"}>
            <p>{description}</p>
          </div>
        </div>
        <div className={"charity-page-side"}>
          <Link to={{ pathname: "/charities/donate/id?id=" + _id }}>
            <button className={"charity-page-donate-button custom-shadow-button"}>Donate</button>
          </Link>
          <a
            href={"https://www.google.com/"}
            className={"charity-social-links"}
          >
            <img src={WWW} /> examplecharity.com
          </a>
          <a
            href={"https://www.facebook.com/"}
            className={"charity-social-links"}
          >
            <img src={Facebook} /> Example Charity
          </a>
          <a
            href={"https://www.instagram.com/"}
            className={"charity-social-links"}
          >
            <img src={Instagram} /> @examplecharity
          </a>
          <a
            href={"https://www.tiktok.com/"}
            className={"charity-social-links"}
          >
            <img src={Tiktok} /> @examplecharity
          </a>
          <a
            href={"https://www.snapchat.com/"}
            className={"charity-social-links"}
          >
            <img src={Snapchat} /> examplecharity
          </a>
        </div>
      </div>
      <div className={"newsfeed-container custom-shadow"}>
        <h1>NEWSFEED</h1>
        <div className={"newsfeed-items-container"}>
          <div className={"newsfeed-item custom-shadow"}>
            <img
                src={NewsImg1}
                className={"newsfeed-image"}
                alt={"Afghan children in school"}
            />
            <p>
              Afghan refugee children enrolling in norwegian nurseries 2 weeks
              after coming to norway. Prime minister hopes that these efforts
              will help stabilize the everyday life of the children and that
              they will integrate quicker.
            </p>
            <p className={"read-more"}>Read more</p>
          </div>
          <div className={"newsfeed-item custom-shadow"}>
            <img
                src={NewsImg2}
                className={"newsfeed-image"}
                alt={"Deers in nature"}
            />
            <p>
              Hunting season has ended, yet people are still hunting animals
              illegally. Protecting nature is our responsibility, and make sure
              that the next generation can enjoy wilderness like us.
            </p>
            <p className={"read-more"}>Read more</p>
          </div>
          <div className={"newsfeed-item custom-shadow"}>
            <img
                src={NewsImg3}
                className={"newsfeed-image"}
                alt={"Akeem in karate training"}
            />
            <p>
              Thanks to the support of charities, children like Akeem are able
              to partake in after school activities. Children like Akeem would
              not be able to afford ...
            </p>
            <p className={"read-more"}>Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CharityPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const {oneCharity} = useContext(ApiContext);
  const {loading, error, data} = useLoading(
    async () => await oneCharity(id),
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
    <div className={"page-margin"}>
      <ul className={"charity-page-container"}>
        {data.map((charity, index) => (
          <Charity key={index} charity={charity} />
        ))}
      </ul>
    </div>
  );
}
