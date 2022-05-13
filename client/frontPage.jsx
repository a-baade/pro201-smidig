import { Link } from "react-router-dom";
import React from "react";


export function FrontPage() {
    return (
      <div>
          <h1>Meliora Impact</h1>
        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/pprofile"}>Profile</Link>
          </li>
        </ul>
      </div>
    );
}
