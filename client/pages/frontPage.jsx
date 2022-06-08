import React from "react";
import FrontBg from "../pics/bg-pictures/water-pic.png";
import Nature from "../pics/bg-pictures/img.png";
import Welfare from "../pics/bg-pictures/img_1.png";
import Education from "../pics/bg-pictures/img_2.png";
import NewsImg1 from "../pics/bg-pictures/img_3.png";
import NewsImg2 from "../pics/bg-pictures/img_4.png";
import NewsImg3 from "../pics/bg-pictures/img_5.jpg";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div className={"page-margin"}>
      <div
        className={"front-image"}
        style={{ backgroundImage: `url(${FrontBg})` }}
      >
        <h1 className={"front-image-text custom-font-knowledge"}>
          Meliora Impact
        </h1>
        <Link to={"/signup"}>
          <button className={"front-image-button custom-shadow-button"}>
            Join us
          </button>
        </Link>
      </div>

      <div className={"about-us-div"}>
        <div className={"about-us-title"}>
          <h1>About us</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          viverra, eros at luctus molestie, dolor risus convallis orci, ut
          tempus tellus nunc quis nulla. Maecenas libero lectus, pharetra ut
          magna in, rutrum luctus lorem. Nulla blandit augue nulla, sit amet
          porta dolor interdum eu. Phasellus suscipit porttitor urna, non
          vestibulum dui volutpat quis. Donec viverra lectus diam, sed
          sollicitudin quam pretium at. Curabitur nisl ligula, porta nec finibus
          eu, venenatis vitae quam. Curabitur facilisis magna condimentum
          maximus feugiat. Aliquam erat volutpat. Mauris posuere vel mi non
          commodo. Nunc dapibus libero ipsum, placerat posuere augue vulputate
          vitae. Aenean volutpat sollicitudin accumsan. Vestibulum at maximus
          purus, in hendrerit eros. Phasellus id tellus a eros volutpat rutrum
          et in ligula. Donec quis odio augue. Mauris pellentesque feugiat lacus
          eget ornare.
        </p>
        <Link to={"/about"}>
          <button className={"about-us-button custom-shadow-button"}>
            Read more
          </button>
        </Link>
      </div>
      <div className={"topic-container"}>
        <div className={"topic"}>
          <h4>Protecting nature</h4>
          <div className={"topic-image"}>
            <img src={Nature} alt={"Picture of nature"} />
          </div>
          <p>
            Nature is by design sustainable, it has supported itself for decades
            but human intervention across the past centuries has been weakening
            the very infrastructure it stands on. We always aim to protect and
            invest in what is already here so we as well it stands a chance for
            future growth.
          </p>
        </div>
        <div className={"topic"}>
          <h4>Welfare</h4>
          <div className={"topic-image"}>
            <img src={Welfare} alt={"Picture of poor children"} />
          </div>
          <p>
            The clean water crisis persist as a leading issue in several large
            parts of the world. It is a human right and necessity yet is
            consistently overlooked and lacking in support. Our aim is to uplift
            and highlight these core violations of human rights to foster more
            support for the communities at large.
          </p>
        </div>
        <div className={"topic"}>
          <h4>Education</h4>
          <div className={"topic-image"}>
            <img src={Education} alt={"Picture of child in school"} />
          </div>
          <p>
            Studies prove that education plays a large role in how well people
            in communities of all ranges fare supporting themselves and breaking
            cycles generational poverty and trauma. We strongly believe it is a
            right to have access to quality education and learning which is why
            it is part of our focus.
          </p>
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
