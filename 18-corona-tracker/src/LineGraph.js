import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import './LineGraph.css'


const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

const LineGraph = (props) => {

    let {caseType}=props;
    console.log(caseType)

    let [data, setData] = useState([]);

    const buildChartData = (jsonData, type) => {
        let chartArr = [];
        let lastEndPoint;
        console.log("h")

        for (let key in jsonData[type]) {
            if (lastEndPoint) {
                let newArr = {
                    x: key,
                    y: jsonData[type][key] - lastEndPoint
                }
                chartArr.push(newArr);
            }
            lastEndPoint = jsonData[type][key]
        }

        return chartArr;
    }

    const fetchData = async () => {
        let response = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
        let jsonData = await response.json();

        if (jsonData) {
            let chartData = buildChartData(jsonData, caseType)
            setData(chartData);
        }


    }

    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        fetchData();
    }, [caseType])



    let dataset={}
    if(caseType==='cases'){
        dataset={
            backgroundColor: "rgba(204, 16, 52, 0.5)",
            borderColor: "#CC1034",
            data: data
        }
    }else if(caseType==="recovered"){
        dataset={
            backgroundColor:"#cce6cc",
            borderColor:"green",
            data:data
        }
    }else{
        dataset={
            backgroundColor:"#ff9999",
            borderColor:"#990000",
            data:data
        }
    }

    return (
        <>
            <div className="lineGraph">
                {data.length > 0 && (
                    <Line
                        data={{
                            datasets: [
                                dataset
                            ],
                        }}
                        options={options}
                    />
                )}
            </div>
        </>
    )
}

export default LineGraph;



