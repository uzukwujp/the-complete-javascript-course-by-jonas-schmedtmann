import Search from './models/Search';

/** Global state of the app
 * Search Object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */

const state = [];

const controlSearch = async () => {
    // 1. Get the query from the view
    const query = 'pizza';

    if (query) 
    {
        // 2. New search object and add to state.
        state.search = new Search(query);

        // 3. Prepate UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // Render result on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// const search = new Search('pizza');
// console.log(search);
// search.getResults();

