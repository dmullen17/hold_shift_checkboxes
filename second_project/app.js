const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    // Check that the shift key is down and they are checking the box
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkBox => {
            // we can use comparison operators on DOM elements
            //console.log(checkBox === this);
            //console.log(checkBox === lastChecked);
            if (checkBox === this || checkBox === lastChecked) {
                // console.log('hi');
                inBetween = !inBetween;
                //console.log(inBetween);
            }
            if (inBetween) {
                // console.log(this); of course this is wrong - this is just the button that we previously clicked
                // this.checked = true;
                checkBox.checked = true;
            }
        })
    }
    
    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));