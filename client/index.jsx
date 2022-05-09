import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import { fetchJSON } from "./lib/fetchJSON";

const ProfileContext = React.createContext({
    userinfo: undefined,
});

function FrontPage({ reload }) {
    const { userinfo } = useContext(ProfileContext);

    async function handleLogout() {
        await fetch("/api/login", { method: "delete" });
        reload();
    }

    return (
        <div>
            {!userinfo && (
                <div>
                    <Link to={"/login"}>Log in</Link>
                </div>
            )}
            {userinfo && (
                <div>
                    <Link to={"/profile"}>{userinfo.name}'s Profile</Link>
                </div>
            )}
            {userinfo && (
                <div>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            )}
        </div>
    );
}

function Login() {
    const { oauth_config } = useContext(ProfileContext);
    useEffect(() => {
        async function handleAuthorize() {
            const { discovery_endpoint, client_id, scope } = oauth_config;
            const discoveryEndpoint = await fetchJSON(discovery_endpoint);
            const { authorization_endpoint } = discoveryEndpoint;
            const parameters = {
                response_type: "token",
                response_mode: "fragment",
                client_id,
                scope,
                redirect_uri: window.location.origin + "/login/callback",
            };
            window.location.href =
                authorization_endpoint + "?" + new URLSearchParams(parameters);
        }

        handleAuthorize();
    }, []);

    return (
        <div>
            <h1>Please wait...</h1>
        </div>
    );
}

function LoginCallback({ reload }) {
    const navigate = useNavigate();
    useEffect(() => {
        async function handleCallback() {
            const { access_token } = Object.fromEntries(
                new URLSearchParams(window.location.hash.substring(1))
            );
            console.log(access_token);

            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ access_token }),
            });
            if (res.ok) {
                reload();
                navigate("/");
            }
        }
        handleCallback();
    }, []);
    return <h1>Please wait...</h1>;
}

function Profile() {
    const { userinfo } = useContext(ProfileContext);

    return (
        <div>
            <h1>
                Profile for {userinfo.name} ({userinfo.email})
            </h1>
            <div>
                <img src={userinfo.picture} alt="Profile picture" />
            </div>
        </div>
    );
}

function Application() {
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

ReactDOM.render(<Application />, document.getElementById("app"));