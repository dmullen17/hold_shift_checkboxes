let count = 0;

function updatecheckBoxes(input) {
    if (input.checked === true) count++; 
    if(count === 1) input.checked = true;
}

function resetCount() {
    count = 0;
}

function checkBoxes(e) {
    // console.log(e); one of the properties of click is '.shiftkey' which returns a boolean value of whether the shift key was pressed when the click event occured
    // console.log(e.shiftKey);
    if (!e.shiftKey) return; 
    const inputs = document.querySelectorAll('input');
/*    console.log(inputs);
    const booleans = Array.from(inputs).map(input => input.checked);
    console.log(booleans);*/
    inputs.forEach(input => updatecheckBoxes(input));
    resetCount();
    
}
document.addEventListener('click', checkBoxes);

// ----------------------------------
// TESTING CODE 
//--------------------------------------------
// look at a checked box.  Here we set the first on to checked with <input type='checkbox' checked>
let checkedBox = document.querySelector('#checked');
console.dir(checkedBox);
// this has a checked property that is true 
// Lets try selecting a non-checked input 
let uncheckedBox = document.querySelector('#unchecked');
console.dir(uncheckedBox);


// Add a function that updates which "input" element we have last previously checked 
/*let lastCheckedInput; 
function updateLastCheckedInput() {
    // console.log(this.checked);
    lastCheckedInput = this; 
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('click', updateLastCheckedInput));*/


/*// Check if updating the 'checked' attribute through JS will update the input element 
function updateCheckedBox() {
    let input = document.querySelector('#test');
    let value = input.checked;
    input.checked = !value;
}
document.addEventListener('click', updateCheckedBox);
// ^ this does work! */