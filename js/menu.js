// Toggle between adding and removing the "responsive" class to navigation when the user clicks on the icon found at: https://www.w3schools.com/howto/howto_js_topnav.asp /
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
