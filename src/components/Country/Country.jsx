import React, { useState } from 'react';
import "./Country.css"

const Country = ({countryInfo,handleVisitedCountries,handleVisitedContriesFlags,visitedContriesFlags}) => {
    // const isVisitedFlag = visitedContriesFlags.some(
    //       (c) => c.ccn3 === countryInfo.ccn3
    // );

    // console.log(countryInfo.flags);
    const[visited,setVisited] = useState(false);
    const handleVisited = () =>{
        // if(visited == true){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
        setVisited(!visited); // alternative of if else. It will also give same output 
        handleVisitedCountries(countryInfo);
    }
    
    // Handle Toggle between "Remove Visited Flag" : "Add Visited Flag"
    console.log({visitedContriesFlags,countryInfo});
    const isVisitedFlag = visitedContriesFlags.find((country)=> country.ccn3 == countryInfo.ccn3)
    console.log(isVisitedFlag);
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h4>Name: {countryInfo.name.common}, Official Name: {countryInfo.name.official}</h4>
            <img src={countryInfo.flags.png} alt="" />
            <p>Capital: {countryInfo.capital}</p>
            <p>{countryInfo.independent ? 'Independent' : 'Not independent'}</p>
            <p>population: {countryInfo.population.toLocaleString('en-US')}</p>
            <button onClick={handleVisited}>{
                visited? "Visited":"Not visited"
            }</button>
            {/* we can't write the onClick={handleVisitedContriesFlags(countryInfo.flags.png)} event handler like this way because without clicking the button it will automatically call all the counties flag. To avoid this problem we have to write it using ()=> arrow function */}
            {/* <button onClick={()=> handleVisitedContriesFlags(countryInfo)}>Add Visited Flag</button> */}
            <button onClick={()=> handleVisitedContriesFlags(countryInfo)}>
                {
                    isVisitedFlag? "Remove Visited Flag" : "Add Visited Flag"
                }
            </button>
        </div>
    );
};

export default Country;