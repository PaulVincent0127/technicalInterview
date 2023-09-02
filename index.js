// Function to sort characters in a string in descending order
function sortStringDescending(str) {
    return str.split('').sort((a, b) => b.localeCompare(a)).join('');
  }

  // Function to recursively sort an object's keys and values
  function sortObjectDescending(obj) {
    const sortedObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const sortedKey = sortStringDescending(key);
        const value = obj[key];

        if (typeof value === 'object' && value !== null) {
          // If the value is an object, recursively sort it
          sortedObj[sortedKey] = sortObjectDescending(value);
        } else if (typeof value === 'string') {
          // If the value is a string, sort it
          sortedObj[sortedKey] = sortStringDescending(value);
        } else {
          // Otherwise, keep the value as is
          sortedObj[sortedKey] = value;
        }
      }
    }

    return sortedObj;
  }

  // Event listener for the button click
  document.getElementById('descButton').addEventListener('click', function () {
    const url = document.getElementById('urlInput').value;

    // Fetch the JSON data from the user-entered URL
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        // Call the sorting function on the JSON object
        const sortedJsonData = sortObjectDescending(jsonData);

        // Display the sorted JSON data
        document.getElementById('descJson').textContent = JSON.stringify(sortedJsonData, null, 2);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('descJson').textContent = 'Error fetching data.';
      });
  });