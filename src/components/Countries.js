import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [playOnce, setPlayOnce] = useState(true)
    const [rangeValue, setRangeValue] = useState(40)
    const [selectedRadio, setSelectedRadio] = useState('')
    const radios = ['Africa', 'Europe', 'Asia', 'America', 'Oceania']

    useEffect(() => {
        if(playOnce) {
            axios.get('https://restcountries.com/v2/all?fields=name,population,region,capital,flag')
            .then(res => {
                setData(res.data)
                setPlayOnce(false)
            })
        }
        
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map(i => data[i])
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })
            sortedArray.length = rangeValue;
            setSortedData(sortedArray)
        }

        sortedCountry()
    }, [data, playOnce, rangeValue]) 

    return (
        <div className="countries">
        <div className="sort-container">
            <input type="range" min="1" max="250" 
                value={rangeValue}
                onChange={e => {
                setRangeValue(e.target.value)
            }}/>
            <ul>
            {radios.map(radio => {
                return(
                    <li key={radio}>
                        <input type="radio" value={radio} id={radio}
                        checked={radio === selectedRadio} onChange={e => setSelectedRadio(e.target.value)}/>
                        <label htmlFor={radio}>{radio}</label>
                    </li>
                )
            })}
            </ul>
        </div>
        <div className="cancel">
            {selectedRadio && <h5 onClick={() => setSelectedRadio('')}>Annuler la recherche</h5>}
            
        </div>
            <ul className="countries-list">
                {sortedData
                    .filter(country => country.region.includes(selectedRadio))
                    .map(country => (
                    <Cards country = {country} key={country.name} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;