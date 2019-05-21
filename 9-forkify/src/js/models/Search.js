import axios from 'axios';

export default class Search {
    constructor(query)
    {
        this.query = query;
    }

    async getResults() 
    {
        const key = 'a3c57d026d4193f715cafef824dd1faf';

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            console.log(error);
        }
    }
}