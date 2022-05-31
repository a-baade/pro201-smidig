import React from "react";


export function Dashboard({ user }) {
  return (
      <div className={"dashboard-page"}>
          <div className={"dashboard-sidebar"}>
              <p>{user.google.name}</p>
              <p>My donations</p>
              <p>My subscriptions</p>
          </div>
          <div className={"dashboard-main"}>
              <div className={"dashboard-top-row"}>

              </div>
          </div>
      </div>
  );
}