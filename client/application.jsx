import React, {useEffect, useState} from "react";
import {fetchJSON} from "./lib/fetchJSON";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Login, LoginCallback, ProfileContext } from "./login";
import { FrontPage } from "./frontPage";
import { Profile } from "./profile";

export function Application() {
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState();
    useEffect(() => {
        loadingLogin();
    }, []);

    async function loadingLogin() {
        setLoading(true);
        setLogin(await fetchJSON("/api/login"));
        setLoading(false);
    }

    useEffect(() => {
        console.log({ login });
    }, [login]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ProfileContext.Provider value={login}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<FrontPage reload={loadingLogin} />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route
                        path={"/login/callback"}
                        element={<LoginCallback reload={loadingLogin} />}
                    />
                </Routes>
            </BrowserRouter>
        </ProfileContext.Provider>
    );
}
