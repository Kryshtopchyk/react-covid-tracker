import React, {useState, useEffect} from 'react';

import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css'
import {fetchCountries, fetchDailyData, fetchData} from "./api";
import Cards from './components/Cards/Cards';

function App() {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState({});
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        fetchDataApi('');
        fetchDailyApi('');
        fetchCountriesApi();
    }, []);

    const fetchDataApi = async (country) => {
        setData(await fetchData(country));
    }
    const fetchDailyApi = async (country) => {
        setDailyData(await fetchDailyData(country));
    }
    const fetchCountriesApi = async () => {
        setCountries(await fetchCountries());
    }

    const handleCountryChange = async (country) => {
        setCountry(country)
        fetchDataApi(country);
        fetchDailyApi(country);
    }

    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker countries={countries} handleCountryChange={handleCountryChange}/>
            <Chart dailyData={dailyData} country={country} data={data}/>
        </div>
    );
}

export default App;
