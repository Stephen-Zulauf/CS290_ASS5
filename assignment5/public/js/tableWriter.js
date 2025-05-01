import data from './data.js';

// Don't change anything above this comment


// Feel free to define more functions if you want.


/**
 * Create and return an HTML table element using the value of variable 'data.'
 * The value of data is an array in which each element in turn is an array.
 * The top level array can have any number of elements greater than 1.
 * Each nested array will have the same number of elements.
 * This number will always be greater tha 0.
 * The HTML element created by this function will have as many columns
 * as the length of each nested array.
 * The elements in the first nested array (i.e., the array at index 0 in "data")
 * will be used to create <th> elements in the <thead> element of the table
 * The values of all other nested arrays will be used to create rows in the table,
 * one row for each of the other nested arrays, and using the value in a
 * nested array to create <td> elements in that row of the table.
 * @return HTML table element
 */
function createTableElement(){
    let tableElement = document.createElement('table');
    // Add your code here to create the HTML table


    // return the HTML table element
    return tableElement;
}

// Don't change anything below this comment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dynamicTable').appendChild(createTableElement())
})
