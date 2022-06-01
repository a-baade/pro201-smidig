import { Chart } from "react-google-charts";

export const data1 = [
    ["Organization", "Donations"],
    ["Norgesgruppen", 1500000],
    ["DNB", 1225678],
    ["Varner", 740000],
    ["Komplett", 550000],
];

export const options1 = {
    title: "Donations from similar sized organizations",
    titleTextStyle: {color: "#ffffff"},
    chartArea: {
        width: "50%",
        backgroundColor: "#66a2ad"
    },
    backgroundColor: "#66a2ad",
    colors: ["#35656f"],
    hAxis: {
        title: "Donated",
        titleTextStyle: {color: "#ffffff"},
        minValue: 0,
    },
    vAxis: {
        title: "Organization",
        titleTextStyle: {color: "#ffffff"},
    },
};

export function Chart1(){
    return(
        <Chart
            className={"dashboard-charts"}
            id={"dashboard-chart1"}
            chartType="BarChart"
            data={data1}
            width="700px"
            height="500px"
            legendToggle
            options={options1}
        />
    );
}

export const data2 = [
    ["Month", "Donations"],
    ["January", 19000],
    ["February", 20000],
    ["March", 23000],
    ["April", 21000],
    ["May", 22000],
];

export const options2 = {
    title: "My donations the last year in USD",
    curveType: "function",
    colors: ["#35656f"],
    legend: { position: "bottom" },
};

export function Chart2(){
    return(
        <Chart
            className={"dashboard-charts"}
            id={"dashboard-chart2"}
            chartType="LineChart"
            width="700px"
            height="500px"
            data={data2}
            options={options2}
        />
    );
}

export default function charts(){

}