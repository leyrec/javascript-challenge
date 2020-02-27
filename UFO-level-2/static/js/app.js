
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

  //LEVEL 2: MULTIPLE FILTERS
  //Filter city:
  // Define and select the button 
  var citybutton = d3.select("#filter-btn-city");

  citybutton.on("click", function() {
    // Remove any previous values from the tbody (important to make the filter work)
    tbody.html("");
    // Select the input element ("city") and get the HTML nodes
    var cityinputElement = d3.select("#city");
    // Get the value property of the input element 
    var cityinputValue = cityinputElement.property("value");
    console.log(cityinputValue);
    //Filter the data establishing the city as the input value
    var cityfilteredData = tableData.filter(cityreport => cityreport.city === cityinputValue);
    console.log(cityfilteredData);

    //Fill the data with the filtered data looping through each filtered row and adding the values 
    cityfilteredData.forEach(function(cityfilteredresults) {
      console.log(cityfilteredresults);
      var cityrow = tbody.append("tr");
      Object.entries(cityfilteredresults).forEach(function([key, value]) {
          console.log(key, value);
          var citycell = cityrow.append("td");
          citycell.text(value);
      });
      });  
  });
    //Filter state:
  var statebutton = d3.select("#filter-btn-state");

  statebutton.on("click", function() {
    // Remove any previous values from the tbody (important to make the filter work)
    tbody.html("");
    // Select the input element ("city") and get the HTML nodes
    var stateinputElement = d3.select("#state");
    // Get the value property of the input element 
    var stateinputValue = stateinputElement.property("value");
    console.log(stateinputValue);
    //Filter the data establishing the city as the input value
    var statefilteredData = tableData.filter(statereport => statereport.state === stateinputValue);
    console.log(statefilteredData);

    //Fill the data with the filtered data looping through each filtered row and adding the values 
    statefilteredData.forEach(function(statefilteredresults) {
      console.log(statefilteredresults);
      var staterow = tbody.append("tr");
      Object.entries(statefilteredresults).forEach(function([key, value]) {
          console.log(key, value);
          var statecell = staterow.append("td");
          statecell.text(value);
      });
      });  
  });
  //Filter country:
  var countrybutton = d3.select("#filter-btn-country");

  countrybutton.on("click", function() {
    // Remove any previous values from the tbody (important to make the filter work)
    tbody.html("");
    // Select the input element ("city") and get the HTML nodes
    var countryinputElement = d3.select("#country");
    // Get the value property of the input element 
    var countryinputValue = countryinputElement.property("value");
    console.log(countryinputValue);
    //Filter the data establishing the city as the input value
    var countryfilteredData = tableData.filter(countryreport => countryreport.country === countryinputValue);
    console.log(cityfilteredData);

    //Fill the data with the filtered data looping through each filtered row and adding the values 
    countryfilteredData.forEach(function(countryfilteredresults) {
      console.log(countryfilteredresults);
      var countryrow = tbody.append("tr");
      Object.entries(countryfilteredresults).forEach(function([key, value]) {
          console.log(key, value);
          var countrycell = countryrow.append("td");
          countrycell.text(value);
      });
      });  
  });
  //Filter shape:
  var shapebutton = d3.select("#filter-btn-shape");

  shapebutton.on("click", function() {
    // Remove any previous values from the tbody (important to make the filter work)
    tbody.html("");
    // Select the input element ("city") and get the HTML nodes
    var shapeinputElement = d3.select("#shape");
    // Get the value property of the input element 
    var shapeinputValue = shapeinputElement.property("value");
    console.log(shapeinputValue);
    //Filter the data establishing the city as the input value
    var shapefilteredData = tableData.filter(shapereport => shapereport.shape === shapeinputValue);
    console.log(shapefilteredData);

    //Fill the data with the filtered data looping through each filtered row and adding the values 
    shapefilteredData.forEach(function(shapefilteredresults) {
      console.log(shapefilteredresults);
      var shaperow = tbody.append("tr");
      Object.entries(shapefilteredresults).forEach(function([key, value]) {
          console.log(key, value);
          var shapecell = shaperow.append("td");
          shapecell.text(value);
      });
      });  
  });

  