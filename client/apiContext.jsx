import React from "react";
import { fetchJSON } from "./lib/fetchJSON";
import { postJSON } from "./lib/postJSON";

export const ApiContext = React.createContext({
  async fetchLogin() {
    return await fetchJSON("/api/login");
  },

  async allCharities(query) {
    return await fetchJSON("/api/charities?" + new URLSearchParams(query));
  },

  async oneCharity(id) {
    return await fetchJSON("/api/charities/charity/id?id=" + id);
  },

  async donateCharity(id) {
    return await fetchJSON("/api/charities/donate/id?id=" + id);
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
