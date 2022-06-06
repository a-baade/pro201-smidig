import React from "react";
import Edit from "../pics/icons/edit.png";
import {Link} from "react-router-dom";

export function Profile({ user }) {
  return (
    <div className={"wrap page-margin"}>
      <div className={"main-card"}>
          <div className={"color-block"}></div>
          <div className={"first-row"}>
              <div className={"img-btn"}>
                  <img src={user.google.picture} alt="Profile picture" className={"pfp"}/>
                  <button className={"photo-upload-btn"}>Upload photo</button>
              </div>
              <h2 className={"company-name"}>Dyrevernalliansen</h2>
          </div>
          <div className={"second-row"}>
              <div className={"company-contact"}>
                  <h3>company contact</h3>
                  <p>{user.google.name}</p>
                  <p>+47 95262419</p>
                  <p>{user.google.email}</p>
                  <p>ceo assistant</p>
              </div>
              <div className={"edit-icons"}>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
              </div>
              <div className={"payment-details"}>
                  <h3>payment details</h3>
                  <p>{user.google.name}</p>
                  <p>12345667890</p>
                  <p>1234 4567 4567 6789</p>
              </div>
              <div className={"edit-icons"}>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
                  <img src={Edit} className={"edit"} alt={"editIcon"}/>
              </div>
          </div>
          <div className={"third-row"}>
              <div><button className={"profile-btn"}>Update</button></div>
              <Link to={"/login/endsession"}>
                  <button className={"profile-btn"}>Sign out</button>
              </Link>
          </div>
      </div>
    </div>
  );
}