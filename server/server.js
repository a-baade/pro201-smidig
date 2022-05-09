import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const oauth_config = {
    discovery_endpoint:
        "https://accounts.google.com/.well-known/openid-configuration",
    client_id: process.env.CLIENT_ID_GOOGLE,
    scope: "openid email profile",
};

async function fetchJSON(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Error fetching ${url}: ${res.status} ${res.statusText}`);
    }
    return await res.json();
}

app.get("/api/login", async (req, res) => {
    const { access_token } = req.signedCookies;
    const discoveryEndpoint = await fetchJSON(
        oauth_config.discovery_endpoint
    );
    const { userinfo_endpoint } = discoveryEndpoint;

    let userinfo = undefined;
    try {
        userinfo = await fetchJSON(userinfo_endpoint, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
    } catch (error) {
        console.log({ error });
    }
    res.json({ userinfo, oauth_config }).status(200);
});

app.delete("/api/login", (req, res) => {
    res.clearCookie("access_token");
    res.sendStatus(200);
});

app.get("/api/config", (req, res) => {
    res.json(oauth_config).json;
});

app.post("/api/login/", (req, res) => {
    const { access_token } = req.body;
    res.cookie("access_token", access_token, { signed: true });
    res.sendStatus(200);
});

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Started on http://localhost:${server.address().port}`);
})