import React, {useContext} from "react";
import { ProfileContext } from "./login";

export function Profile() {
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