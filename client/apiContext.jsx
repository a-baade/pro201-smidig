import { fetchJSON } from "./lib/fetchJSON";
import { postJSON } from "./lib/postJSON";
import React from "react";

export const ApiContext = React.createContext({
  async fetchLogin() {
    return await fetchJSON("/api/login");
  },

  async allCharities() {
    return await fetchJSON("/api/charities");
  },

  async allOrganizations() {
    return await fetchJSON("/api/register");
  },

  async registerNewOrganization(organization) {
    return await postJSON("/api/register", organization);
  },

  async registerLogin(provider, login) {
    return await postJSON(`/api/login/${provider}`, login);
  },
  async endSession() {
    const res = await fetch("/api/login", { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
  },
});
