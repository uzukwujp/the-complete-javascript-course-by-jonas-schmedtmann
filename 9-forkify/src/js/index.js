import str from './models/Search';
// import {add as a, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

// console.log(`Using imported functions: ${a(ID, 2)} and ${multiply(3, 5)}. ${str}`);
console.log(`Using imported functions: ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);