function init() {
    // Add event listener to 'AlertMe' div
    function buttonAlert() {
        var textOutput = document.getElementById("textoutput"); // Text below button
        var userInput = document.getElementById("entryinput").value; // Text field
        textOutput.innerHTML = userInput; // Display user input below button
        alert("Josh Reginaldo: " + userInput); // Display user input in an alert box
    }
    var button = document.getElementById("entrybutton");
    button.addEventListener("click", buttonAlert);
}
window.addEventListener('load', init);
