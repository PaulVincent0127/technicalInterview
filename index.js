function fetchAndQueryJSON() {
    const url = document.getElementById('urlInput').value;

    async function fetchAndDisplayJSON() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Convert the JSON array to a string for display
            const jsonArrayString = JSON.stringify(data, null, 2);

            // Display the JSON array on the page
           document.getElementById('filteredJson').textContent = jsonArrayString;

        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('filteredJson').textContent = 'Error fetching data.';
        }       
    }



    // Call the function to fetch and display the JSON array
    fetchAndDisplayJSON();
}



