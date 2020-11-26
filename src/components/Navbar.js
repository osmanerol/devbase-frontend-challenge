import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import store from '../store';

const Navbar = props => {
    const { sortCountries, isFormPage }=props;
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Countries</Link>
                {
                    !isFormPage && 
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown show">
                            <span className="nav-link dropdown-toggle" data-toggle="dropdown">Sort</span>
                            <div className="dropdown-menu">
                                <span className="dropdown-item" onClick={()=>store.sortCountries('alpha2Code','asc')}>Sort by code ascending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('alpha2Code','desc')}>Sort by code descending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('name','asc')}>Sort by name ascending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('name','desc')}>Sort by name descending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('capital','asc')}>Sort by capital ascending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('capital','desc')}>Sort by capital descending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('population','asc')}>Sort by population ascending</span>
                                <span className="dropdown-item" onClick={()=>store.sortCountries('population','desc')}>Sort by population descending</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/country/new-country" className="nav-link btn btn-primary" data-toggle="modal" data-target="#modal"><FaIcons.FaPlus /> <span className="d-md-block d-none">Add New Country</span></Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    );
};

export default Navbar;