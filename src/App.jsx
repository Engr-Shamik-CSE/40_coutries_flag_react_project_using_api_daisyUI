// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import { Suspense } from 'react'

//fetch countries API
const countriesPromise = fetch("https://restcountries.com/v3.1/all?fields=name,capital,ccn3,independent,capital,flags,currencies,population")
  .then(res => res.json());

// const countriesPromiseFlag = fetch("https://restcountries.com/v3.1/all?fields=flags")
//   .then(res => res.json());

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev"><img src={viteLogo} className="logo"/></a>
        <a href="https://react.dev"><img src={reactLogo} className="logo react"/></a>
      </div>
      <h1>Countries project</h1>

      <Suspense fallback={<p>All countries info is loading............</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      
      
    </>
  )
}

export default App
