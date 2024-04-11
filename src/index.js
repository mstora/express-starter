import './style.css';
const URL_ADDRESS = "http://localhost:3001/";
const buttonEl = document.getElementById("submit");
buttonEl.addEventListener("click", () => {
    const inputEl = document.getElementById("textInpt");
    console.log(inputEl.value);  
    fetch(URL_ADDRESS + inputEl.value)
    .then(response => response.json())
    .then(responseJson => alert(responseJson.message))
    .catch(error => alert(error))
});
