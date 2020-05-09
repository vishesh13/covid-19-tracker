import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountryDetails } from '../services/service';
import './countryselection.css';

const CountrySelectionContainer = ({ handleOnCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            setCountries(await getCountryDetails());
        };

        getDetails();
    }, []);

    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e) => handleOnCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountrySelectionContainer;