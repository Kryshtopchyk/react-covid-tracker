import React from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({countries, handleCountryChange}) => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
