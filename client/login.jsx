import React, {useContext, useEffect} from "react";
import {fetchJSON} from "./lib/fetchJSON";
import {useNavigate} from "react-router-dom";

export const ProfileContext = React.createContext({
    userinfo: undefined,
});

export function Login() {
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

export function LoginCallback({ reload }) {
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