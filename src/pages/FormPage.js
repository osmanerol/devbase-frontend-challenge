import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { observer } from 'mobx-react-lite';
import store from '../store';

const FormPage = observer(props => {
    const [flag, setFlag]=useState('');
    const [alpha2Code, setAlpha2Code]=useState('');
    const [name, setName]=useState('');
    const [capital, setCapital]=useState('');
    const [population, setPopulation]=useState('');
    const [isUpdate, setIsUpdate]=useState(store.selectectedCountry!==undefined ? true : false);

    useEffect(()=>{
        if(isUpdate){
            setFlag(store.selectectedCountry.flag);
            setAlpha2Code(store.selectectedCountry.alpha2Code);
            setName(store.selectectedCountry.name);
            setCapital(store.selectectedCountry.capital);
            setPopulation(store.selectectedCountry.population);
        }
    },[])

    const disabled=(flag!=='' && alpha2Code!=='' && name!=='' && capital!=='' && population!=='') ? true : false;

    const update=()=>{
        const country={
            flag,
            alpha2Code,
            name,
            capital,
            population
        };
        console.log(country);
        store.update(country);
        props.history.push("/");
    }

    const addNewCountry=()=>{
        const country={
            flag,
            alpha2Code,
            name,
            capital,
            population
        };
        console.log(country);
        store.addNewCountry(country);
        props.history.push("/");
    }

    return (
        <div>
            <Navbar isFormPage={true} />
            <div className="row">
                <div className="col-md-5 col-12 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor="flag">Flag Url</label>
                            <input type="text" name="flag" value={flag} onChange={(event)=>setFlag(event.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" name="alpha2Code" value={alpha2Code} onChange={(event)=>setAlpha2Code(event.target.value)} className="form-control" disabled={isUpdate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="capital">Capital</label>
                            <input type="text" name="capital" value={capital} onChange={(event)=>setCapital(event.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="population">Population</label>
                            <input type="text" name="population" value={population} onChange={(event)=>setPopulation(event.target.value)} className="form-control" />
                        </div> 
                        <button type="button" className="btn btn-primary btn-block" onClick={()=> isUpdate ? update() : addNewCountry() } disabled={!disabled}>Save</button> 
                    </form>
                </div>
            </div>
        </div>
    );
}) 

export default FormPage;