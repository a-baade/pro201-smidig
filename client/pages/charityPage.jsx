import {ApiContext} from "../apiContext";
import {useLoading} from "../useLoading";
import {useContext} from "react";
import {useSearchParams} from "react-router-dom";
import PlaceholderBackground from "../pics/bg-pictures/charities-placeholder.jpg";
import PlaceholderLogo from "../pics/bg-pictures/charities-logo-placeholder.png";

function Charity({charity: {name, description}}){

    // Replace placeholders with actual charities images
    return (
        <p>{name}</p>
    );
}

export default function charityPage(){
    let [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id");

    const {oneCharity} = useContext(ApiContext);
    const {loading, error, data} = useLoading(
        async () => await oneCharity(id), []
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }

    return (
        <div>
            <ul className={"charity-parent-cont"}>
                {data.map((charity, index) => (
                    <Charity key={index} charity={charity} />
                ))}
            </ul>
        </div>
    );
}