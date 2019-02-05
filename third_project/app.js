/* Select DOM elements and define variables */
const inputs = document.querySelectorAll('input[type="checkbox"]');
let lastCheckedInput;
let inBetween = false; // flag 

/* Define functions */
function checkBoxes(e) {
    //console.log('hi');
    // lastCheckedInput = this; // need to put this at the end
    //console.log(e);
    if (e.shiftKey == true && lastCheckedInput) {
        //console.log('shift key pressed!');
        inputs.forEach(input => {
            //console.log(input);
            if (input == lastCheckedInput || input == this) {
                //console.log('switched value'); // helped me diagnose that it was only switching once between lastCheckedInput and this were equal
                inBetween = !inBetween;
            }
            //console.log(inBetween);
            if (inBetween == true) {
                input.checked = true;
            }
        });
    }
    if (this.checked == true) {
        lastCheckedInput = this;
    } else {
        lastCheckedInput = null;
    }
}

/* Set up Event Listeners */
inputs.forEach(input => input.addEventListener('click', checkBoxes));