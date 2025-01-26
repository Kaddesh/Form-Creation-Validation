// Asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Container for API data

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list to display user names
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user name as list item text
            userList.appendChild(listItem); // Append list item to the list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the fetchUserData function after the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
