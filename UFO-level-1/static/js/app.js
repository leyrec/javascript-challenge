
// Assign the data from `data.js` to a descriptive variable (tableData)
var tableData = data;
// Console.log the data from data.js
console.log(tableData);
// YOUR CODE HERE!


//LEVEL 1: One filter (datetime)

// Get a reference to the table body in the html  (tbody) where data will be appended
var tbody = d3.select("tbody");

// Create the data structure of the table in the html (tr, td ) and append each data object (key, value) 
tableData.forEach((ufoReport) => {
  // Append one table row 'tr' for each element (array) 
    var row = tbody.append("tr");
  // Use `Object.entries` to copy the key and value for each element (array)
    Object.entries(ufoReport).forEach(([key, value]) => {
    // Use d3 (append) to append 'td' for each row of the table
      var cell = row.append("td");
    // Use d3 (text) to add values for each row of the table
      cell.text(value);
    });
  });
// Create the function to filter the table by different criterias (datetime, city, state, etc)
  var button = d3.select("#filter-btn-datetime");

  button.on("click", function() {
    // Remove any previous values from the tbody (important to make the filter work)
    tbody.html("");
    // Select the input element ("datertime") and get the HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element 
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter the data establishing the datetime as the input value
    var filteredData = tableData.filter(report => report.datetime === inputValue);
    console.log(filteredData);

    //Append the resulting filtered data 
    filteredData.forEach(function(filteredresults) {
      console.log(filteredresults);
      var row = tbody.append("tr");
      Object.entries(filteredresults).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
      });
      });  
  });

  