import React from "react";

export function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div>
          <h3>Name: {user.google.name}</h3>
          <h3>Email: {user.google.email}</h3>
        </div>
        <div>
          <img src={user.google.picture} alt="Profile picture" />
        </div>
      </div>
    </div>
  );
}