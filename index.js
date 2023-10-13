document.addEventListener('DOMContentLoaded', () => {
    // store your api inside a variable of api-url
    const api_url = "https://api.adviceslip.com/advice";
    
    // define an async func that gets the api url and passes it as a parameter
    async function getapi(url) {
        const response = await fetch(url); // we send a get request to the URL and wait for said response
        var data = await response.json(); // we parse the response as a json and assign it to the data variable
        console.log(data); // log the data on the console(in case there are any concerns to look out for)
        show(data); // call a show function to display the data within an element specified on the webpage
    }
    
    getapi(api_url); // cll the function that initiates the whole process mentioned above
    
    // define the show data function with the data parameter which defines the respective elements and displays them within the html as requested
    function show(data) {
        const adviceNumElement = document.getElementById('advice-num');
        const adviceElement = document.getElementById('advice');
    
        // extracts the advice num and text from the data object which has received from the get request
        const adviceNumber = data.slip.id;
        const adviceText = data.slip.advice;
    
        // defines a format for the text that is being displayed (makes it show up in quotes)
        const formattedAdvice = `"${adviceText}"`;
    
        adviceNumElement.textContent = `ADVICE #${adviceNumber}`;
        adviceElement.textContent = formattedAdvice;
    }
    
    // generates advice when clicked
    const diceIcon = document.querySelector('.icons img:nth-child(2)'); // Select the dice icon
    
    diceIcon.addEventListener('click', () => {
        getapi(api_url); // Fetch advice when the dice icon is clicked
    });
    
    // Initial advice fetch
    getapi(api_url);
});
