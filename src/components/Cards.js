import React from 'react';

const Cards = ({ country }) => {

    const numberFormat = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }


    return (
        <li className="cards">
            <img src={country.flag} alt="drapeau du pays" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Cards;