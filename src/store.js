import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class Store{
    countries=[];
    selectectedCountry=undefined;

    constructor(){
        makeAutoObservable(this);
    }

    getCountries=async ()=>{
        const allCountries=await axios.get('https://restcountries.eu/rest/v2/all')
                            .then(response=>response.data)
                            .catch(error=>console.log(error));
        this.countries=allCountries;
        this.selectectedCountry=undefined;
    }

    deleteCountry=alpha2Code=>{
        this.countries=this.countries.filter(country=>country.alpha2Code!==alpha2Code);
        this.selectectedCountry=undefined;
    }

    sortCountries=(data,type)=>{
        let allCountries;
        switch(data){
        case 'alpha2Code':
            allCountries=type==='asc' ? _.sortBy(this.countries,'alpha2Code') : _.sortBy(this.countries,'alpha2Code').reverse();
            this.countries=allCountries;
            break;
        case 'name':
            allCountries=type==='asc' ? _.sortBy(this.countries,'name') : _.sortBy(this.countries,'name').reverse();
            this.countries=allCountries;
            break;
        case 'capital':
            allCountries=type==='asc' ? _.sortBy(this.countries,'capital') : _.sortBy(this.countries,'capital').reverse();
            this.countries=allCountries;
            break;
        case 'population':
            allCountries=type==='asc' ? _.sortBy(this.countries,'population') : _.sortBy(this.countries,'population').reverse();
            this.countries=allCountries;
            break;
        default:
            break;
        }
    }

    setSelectCountry=country=>{
        this.selectectedCountry=country;
    }

    update=country=>{
        console.log(country);
        this.countries=this.countries.filter(data=>{
            if(data.alpha2Code===country.alpha2Code){
              data.flag=country.flag;
              data.alpha2Code=country.alpha2Code;
              data.name=country.name;
              data.capital=country.capital;
              data.population=country.population;
            }
            return data;
        });
        this.selectectedCountry=undefined;
    }

    addNewCountry=country=>{
        this.countries=[country, ...this.countries];
        this.selectectedCountry=undefined;
    }

}

export default new Store();