
// https://www.food2fork.com/api/search
// a3c57d026d4193f715cafef824dd1faf

import axios from 'axios';

async function getResults(query) 
{
    const key = 'a3c57d026d4193f715cafef824dd1faf';

    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        console.log(error);
    }
}

getResults('chinese');