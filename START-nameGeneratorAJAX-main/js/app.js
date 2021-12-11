document.querySelector('#generate-names').addEventListener('submit', loadNames);



// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();


    //Read the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //Build the URL
    let url ='http://uinames.com/api/?';
    //Read the Origin and Append to the URL
    if(origin !== '') {
        url += `region=${origin}&`;
    }

        //Read the Genre and Append to the URL
    if(genre !== '') {
        url += `gender=${genre}&`;
    }
    //Read the Amount and Append to the URL
    if(amount !== '') {
        url += `amount=${amount}&`;
    }
    //Ajax Call
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET',url, true);

    //Execute the function
    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse(this.responseText);
            console.log(names);
        }
    }

    //Send the request
    xhr.send();
}