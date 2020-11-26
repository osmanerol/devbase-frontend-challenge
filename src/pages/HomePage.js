import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';
import { observer } from 'mobx-react-lite';
import store from '../store';

const HomePage =observer( props => {

    const deleteCountry=alpha2Code=>{
        store.deleteCountry(alpha2Code);
    }

    const setSelectedCountry=country=>{
        store.setSelectCountry(country);
        props.history.push("/country/update");
    }

    const table=(
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Flag</th>
                <th>Code</th>
                <th>Name</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                store.countries.map((country,index)=>(
                  <tr key={index}>
                    <td><img src={country.flag} alt="country-flag"/></td>
                    <td>{country.alpha2Code}</td>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.population}</td>
                    <td style={{cursor:'pointer'}} onClick={()=>setSelectedCountry(country)}><GrIcons.GrUpdate  data-toggle="modal" data-target="#modal" /> </td>
                    <td style={{cursor:'pointer'}}><FaIcons.FaTrashAlt onClick={()=>deleteCountry(country.alpha2Code)} /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    );

    return (
        <div>
            <Navbar />
            <div className="container">
                { 
                    table
                }
            </div>
        </div>
    );
}
)

export default HomePage;