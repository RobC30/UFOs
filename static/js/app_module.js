// import the data from data.js
const tableData = data;

// Reference the html using d3
var tbody = d3.select('tbody');

// function buildtable
function buildTable(data) {
    // clear text; always good practice to add before executing a function
    tbody.html('');
    // loop thru each row of data.js
    data.forEach((dataRow) => {
        // find <tbody> tag and add a table row
        let row = tbody.append('tr');
        // loop through data rows
        Object.values(dataRow).forEach((val) => {
        let cell = row.append('td');
        cell.text(val);
        }
        );
    });
}

//function handleclick
function handleClick() {
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    // if date is entered, fill with entered date to filter data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
      };
    // Rebuild the table using the filtered data; if no data entered, will return all data
    buildTable(filteredData);
}

// listen for clicks (#filter-btn will be set in html)
d3.selectAll('#filter-btn').on('click', handleClick);

// Build the table when the page loads
buildTable(tableData);