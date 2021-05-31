import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InfoBox from './InfoBox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from './Table';
import LineGraph from './LineGraph';
import Map from './Map';
import "leaflet/dist/leaflet.css";

import './App.css'

const App = () => {

    let [countries, setCountries] = useState([]);
    let [country, setCountry] = useState("worldwide");
    let [loading, setLoading] = useState(true);
    let [countryInfo, setCountryInfo] = useState([]);
    let [tableData, setTableData] = useState([]);
    let [mapData, setMapData] = useState([]);
    let [mapCenter, setMapCenter] = useState({ lat: 25.0902, lng: -95.7129 });
    let [mapZoom, setMapZoom] = useState(3);
    let [caseType, setCaseType] = useState("cases");

    const sortData = (country) => {
        country.sort((a, b) => {
            if (a.cases > b.cases) {
                return -1
            }
            else {
                return 1
            }
        })

        return country;
    }

    const getFirstLoad = async () => {
        setLoading(true);
        let response = await fetch(`https://disease.sh/v3/covid-19/all`);
        let jsonData = await response.json();

        if (jsonData) {
            setCountryInfo(jsonData)
        }
    }

    const getAllCountries = async () => {
        setLoading(true);
        let response = await fetch(`https://disease.sh/v3/covid-19/countries`);
        let jsonData = await response.json();

        if (jsonData) {
            const newArr = jsonData.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
            }));
            let sort = sortData(jsonData);
            setCountries(newArr);
            setMapData(jsonData);
            setTableData(sort)
            setLoading(false);
        }

    }



    const onCountryChange = async (e) => {
        let code = e.target.value;

        let url = code === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${code}`;

        let response = await fetch(url);
        let jsonData = await response.json();

        if (jsonData) {
            setCountryInfo(jsonData)
            setCountry(code)
            if (code == "worldwide") {
                setMapCenter({ lat: 34.80746, lng: -40.4796 })
            } else {
                setMapCenter({ lat: jsonData.countryInfo.lat, lng: jsonData.countryInfo.long })
            }
        }

    }

    console.log(countryInfo)

    useEffect(() => {
        getAllCountries();
        getFirstLoad();
    }, [])

    if (loading) {
        return (
            <>
            <div className="container">
                <h1>loading...</h1>
            </div>
            </>
        )
    } else {

        return (
            <>
                <div className="app">
                    <div className="app_left">
                        <div className="header">
                            <div className="header-title">
                                <div className="header-img">
                                    <img src="coronavirus.png" alt="" />
                                </div>
                                <div className="header-corona">
                                    <h1>Corona Tracker</h1>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <FormControl className="app__dropdown">
                                    <Select
                                        variant="outlined"
                                        value={country}
                                        onChange={onCountryChange}
                                    >
                                        <option value="worldwide">Worldwide</option>
                                        {countries.map((country) => (
                                            <option value={country.value}>{country.name}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className="card">
                            <div onClick={() => { setCaseType("cases") }}>
                                <InfoBox title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases} caseType={caseType} />
                            </div>
                            <div onClick={() => setCaseType("recovered")} >
                                <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                            </div>
                            <div onClick={() => setCaseType("deaths")}>
                                <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} caseType={caseType} />
                            </div>
                        </div>

                        <div className="map">
                            <Map center={mapCenter} zoom={mapZoom} countries={mapData} casesType={caseType} />
                        </div>
                    </div>
                    <div className="app_right" >
                        <Card >
                            <CardContent>
                                <h3>Live Cases by Country</h3>
                                <Table countries={tableData} />
                                <h3>Worldwide new {caseType}</h3>
                                <LineGraph caseType={caseType} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

export default App;