import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./frontPage";
import React, { useContext } from "react";
import { LoginPage } from "./loginPage";
import { useLoading } from "./useLoading";
import { ApiContext } from "./apiContext";
import { Profile } from "./profile";
import "./style.css";
import { Charities } from "./charities";
import Navigation from "./navigation";
import Footer from "./footer";
import { RegisterNewUser } from "./registerNewUser";
import { AboutUs } from "./aboutUs";


function UserActions({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return <Link to={"/login"}>Login</Link>;
  }

  return (
    <>
      <Link to={"/profile"}>
        {user.google?.name ? `Profile for ${user.google.name}` : "Profile"}
      </Link>
      <Link to={"/login/endsession"}>Log out</Link>
    </>
  );
}

export function Application() {
  const { fetchLogin } = useContext(ApiContext);
  const { data, error, loading, reload } = useLoading(fetchLogin);

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }
  if (loading) {
    return <div>Please wait...</div>;
  }

  return (
    <BrowserRouter>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />
          <Route path={"/charities"} element={<Charities />}/>
          <Route path={"/register"} element={<RegisterNewUser />}/>
          <Route path={"/about"} element={<AboutUs />}/>
          <Route
            path={"/login/*"}
            element={<LoginPage config={data.config} reload={reload} />}
          />
          <Route path={"/profile"} element={<Profile user={data?.user} />} />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}
