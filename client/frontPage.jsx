
import React from "react";
import FrontBg from "./bg-pictures/water-pic.png";
import Nature from "./bg-pictures/img.png";
import Welfare from "./bg-pictures/img_1.png";
import Education from "./bg-pictures/img_2.png";
import NewsImg1 from "./bg-pictures/img_3.png";
import NewsImg2 from "./bg-pictures/img_4.png";
import NewsImg3 from "./bg-pictures/img_5.png";


export function FrontPage() {

    return (
      <div>
       <div>
         <img src={ FrontBg } className={ "front-bg" }/>
       </div>

        <div className={"about-us-div"}>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur viverra,
            eros at luctus molestie, dolor risus convallis orci,
            ut tempus tellus nunc quis nulla. Maecenas libero lectus,
            pharetra ut magna in, rutrum luctus lorem. Nulla blandit augue nulla,
            sit amet porta dolor interdum eu. Phasellus suscipit porttitor urna, non vestibulum dui volutpat quis.
            Donec viverra lectus diam, sed sollicitudin quam pretium at.
            Curabitur nisl ligula, porta nec finibus eu, venenatis vitae quam.
            Curabitur facilisis magna condimentum maximus feugiat. Aliquam erat volutpat.
            Mauris posuere vel mi non commodo. Nunc dapibus libero ipsum, placerat posuere augue vulputate vitae.
            Aenean volutpat sollicitudin accumsan. Vestibulum at maximus purus, in hendrerit eros.
            Phasellus id tellus a eros volutpat rutrum et in ligula. Donec quis odio augue.
            Mauris pellentesque feugiat lacus eget ornare.</p>
          <button className={"about-us-btn"}>Read more</button>
        </div>

        <div className={"category-container"}>
          <div className={"nature"}>
            <h4>Protecting nature</h4>
            <div className={"nature-pic"}>
              <img src={ Nature } className={ "cat-pic" }/>
            </div>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Fusce viverra id metus ut scelerisque.
              Morbi luctus tincidunt neque, sed sagittis ligula
              consectetur nec. Vivamus consequat neque at varius faucibus.
              Sed tortor nisi, luctus a ullamcorper in, ultricies non erat.
              Cras arcu lorem, venenatis vitae pulvinar vel, consectetur sed ex.
            </p>
          </div>
          <div className={"welfare"}>
            <h4>Welfare</h4>
            <div className={"nature-pic"}>
              <img src={ Welfare } className={ "cat-pic" }/>
            </div>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Fusce viverra id metus ut scelerisque.
              Morbi luctus tincidunt neque, sed sagittis ligula
              consectetur nec. Vivamus consequat neque at varius faucibus.
              Sed tortor nisi, luctus a ullamcorper in, ultricies non erat.
              Cras arcu lorem, venenatis vitae pulvinar vel, consectetur sed ex.
            </p>
          </div>
          <div className={"education"}>
            <h4>Education</h4>
            <div className={"nature-pic"}>
              <img src={ Education } className={ "cat-pic" }/>
            </div>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Fusce viverra id metus ut scelerisque.
              Morbi luctus tincidunt neque, sed sagittis ligula
              consectetur nec. Vivamus consequat neque at varius faucibus.
              Sed tortor nisi, luctus a ullamcorper in, ultricies non erat.
              Cras arcu lorem, venenatis vitae pulvinar vel, consectetur sed ex.
            </p>
          </div>
        </div>
        <div className={"newsfeed-parent"}>
          <h1>NEWSFEED</h1>
          <div className={"newsfeed-child"}>
            <div className={"newsfeed-item"}>
              <img src={ NewsImg1 } className={ "newsfeed-pic" }/>
              <p>Afghan refugee children enrolling in norwegian nurseries 2 weeks after coming to norway. Prime minister hopes that these efforts will help stabalise the everyday life of the children and that they will integrate quicker.</p>
              <p className={"read-more-btn"}>Read more</p>
            </div>
            <div className={"newsfeed-item"}>
              <img src={ NewsImg2 } className={ "newsfeed-pic" }/>
              <p>Hunting season has ended, yet people are still hunting animals illegally. Protecting nature is our responsibilty, and make sure that the next generation can enjoy wildnerness like us.</p>
              <p className={"read-more-btn"}>Read more</p>
            </div>
            <div className={"newsfeed-item"}>
              <img src={ NewsImg3 } className={ "newsfeed-pic" }/>
              <p>Thanks to the support of charities, children like Akeem are able to partake in after school activities.

                Children like Akeem would not be able to afford ...</p>
              <p className={"read-more-btn"}>Read more</p>
            </div>
          </div>
        </div>
      </div>
    );
}
