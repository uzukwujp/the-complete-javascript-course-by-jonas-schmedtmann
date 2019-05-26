import axios from 'axios';
import { key, key2, key3, key4 } from '../config';

export default class Search {
    constructor(query)
    {
        this.query = query;
    }

    async getResults() 
    {
        

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key4}&q=${this.query}`);
        this.result = res.data.recipes;
        } catch (error) {
            console.log(error);
        }
    }
}