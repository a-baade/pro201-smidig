import React from "react";
import MainBg from "../pics/about-us-pictures/main-bg.png";

export function Profile({ user }) {
  return (
    <div className={"wrap"}>
      <div className={"main-card"}>
          <div className={"color-block"}></div>
          <div className={"first-row"}>
              <div className={"img-btn"}>

                  <img src={user.google.picture} alt="Profile picture" className={"pfp"}/>
                  <button>Upload photo</button>
              </div>
              <h2>Dyrevernalliansen</h2>
          </div>
          <div className={"second-row"}>
              <div className={"company-contact"}>
                  <h3>company contact</h3>
                  <p>{user.google.name}</p>
                  <p>+47 95262419</p>
                  <p>{user.google.email}</p>
                  <p>ceo assistant</p>
              </div>
              <div className={"payment-details"}>
                  <h3>payment details</h3>
                  <p>{user.google.name}</p>
                  <p>12345667890</p>
                  <p>1234 4567 4567 6789</p>
              </div>
          </div>
          <div className={"third-row"}>
              <button>Update</button>
              <button>Sign out</button>
          </div>
          {/*<div>
            <h3>Name: {user.google.name}</h3>
            <h3>Email: {user.google.email}</h3>
        </div>
          <div>
              <img src={user.google.picture} alt="Profile picture" />
        </div>*/}
      </div>
    </div>
  );
}