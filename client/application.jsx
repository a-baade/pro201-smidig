import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontPage";
import React, { useContext } from "react";
import { LoginPage } from "./pages/loginPage";
import { useLoading } from "./useLoading";
import { ApiContext } from "./apiContext";
import { Profile } from "./pages/profile";
import { Charities } from "./pages/charities";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { RegisterNewUser } from "./pages/registerNewUser";
import { AboutUs } from "./pages/aboutUs";
import { SignUp } from "./pages/signUp";
import CharityPage from "./pages/charityPage";
import { Contact } from "./pages/contact";
import { Dashboard } from "./pages/dashboard";
import Donate from "./pages/donate";
import LoadingWheel from "./components/loadingSpinner";

export function Application() {
  const { fetchLogin } = useContext(ApiContext);
  const { data, error, loading, reload } = useLoading(fetchLogin);

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }
  if (loading) {
    return <LoadingWheel />;
  }

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />

          <Route path={"/charities"} element={<Charities />} />
          <Route path={"/charities/charity/:id"} element={<CharityPage />} />
          <Route path={"/charities/donate/:id"} element={<Donate />} />
          <Route path={"/register"} element={<RegisterNewUser />} />
          <Route path={"/about"} element={<AboutUs />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/signup"} element={<SignUp config={data.config} />} />
          <Route
            path={"/dashboard"}
            element={<Dashboard user={data?.user} />}
          />

          <Route
            path={"/login/*"}
            element={<LoginPage config={data.config} reload={reload} />}
          />
          <Route
            path={"/signup/*"}
            element={<LoginPage config={data.config} reload={reload} />}
          />
          <Route path={"/profile"} element={<Profile user={data?.user} />} />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
