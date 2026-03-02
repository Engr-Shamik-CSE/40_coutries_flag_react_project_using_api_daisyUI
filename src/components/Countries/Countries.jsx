// shortcut: rsc + tab
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const countriesInfo = use(countriesPromise);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedContriesFlags, setvisitedContriesFlags] = useState([]); 
    
    //by default we should have to give an empty array this is because we have to all the visited countries info will be added into that array
    const handleVisitedContriesFlags = (countryInfo) =>{

        const isVisitedFlag = visitedContriesFlags.includes(countryInfo);
        console.log(isVisitedFlag);
            //It checks whether the object countryInfo already exists in the visitedContries array.
            if(isVisitedFlag) {
                // const visitedCountriesFlagRecheck = visitedContriesFlags.filter(c=>c.ccn3 != flag.ccn3)
                const visitedCountriesFlagRecheck = visitedContriesFlags.filter(f=>f.ccn3 != countryInfo.ccn3);
                console.log(visitedCountriesFlagRecheck);
                //  Here, we’re removing the selected country from the list. We use .filter() to loop through all countries, and keep only those whose ccn3 code does not match the clicked one. In simpler terms: we’re saying — "Keep everything except this country."
                setvisitedContriesFlags(visitedCountriesFlagRecheck);
                return;
            };

        const newVisitedContriesFlags = [...visitedContriesFlags,countryInfo];
        setvisitedContriesFlags(newVisitedContriesFlags);

    }

    const handleVisitedCountries = (countryInfo) =>{
            console.log("Countries visited clicked will be added.",countryInfo);

            const isVisited = visitedCountries.includes(countryInfo);
            //It checks whether the object countryInfo already exists in the visitedContries array.
            if(isVisited) {
                const visitedCountriesRecheck = visitedCountries.filter(c=>c.ccn3 != countryInfo.ccn3)
                //  Here, we’re removing the selected country from the list. We use .filter() to loop through all countries, and keep only those whose ccn3 code does not match the clicked one. In simpler terms: we’re saying — "Keep everything except this country."
                setVisitedCountries(visitedCountriesRecheck);
                return;
            };

            const newVisitedCountriesArr = [...visitedCountries, countryInfo];
            setVisitedCountries(newVisitedCountriesArr);
    }
    return (
        <div>
            <h1>Traveling Countries : {countriesInfo.length}</h1>
            <h2>Total Coutries I have traveled = {visitedCountries.length}</h2>
            
            
            <h2>Visited countries flags: </h2>
            <div className="flag-image-container">
                {
                    visitedContriesFlags.map((countriesInfo, index) => (
                    <div className="flag-box" >
                        {/* <img src={flag.flags.png} key={index}/> */}
                        <img src={countriesInfo.flags.png} key={index}/>
                    </div>
                    ))
                }
            </div>
            <div>
                {/* <h2>Visited countries: {visitedContries.map(countryInfo =>countryInfo.name.common).join(',')}</h2> */}
                <h2>Visited countries: {visitedCountries.map(countryInfo =><li>{countryInfo.name.common}</li>)}</h2>
            </div>
            
            <div className='countries'>
                {
                    countriesInfo.map(countryInfo => <Country 
                        key={countryInfo.ccn3} 
                        countryInfo={countryInfo}
                        visitedContriesFlags={visitedContriesFlags}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedContriesFlags={handleVisitedContriesFlags}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

