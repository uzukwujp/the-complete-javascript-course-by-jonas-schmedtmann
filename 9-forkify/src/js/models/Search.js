import axios from 'axios';

export default class Search {
    constructor(query)
    {
        this.query = query;
    }

    async getResults() 
    {
        const key = 'a3c57d026d4193f715cafef824dd1faf';
        const key2 = 'f55920ca3ce962617dc9df23d3e0e252';

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key2}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            console.log(error);
        }
    }
}