import trottle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const STORAGE_KEY ="feedback-form-state";

formEl.addEventListener('submit',onSubmit);
formEl.addEventListener('input', trottle(inputChange, 500));

function onPageReload() {
    if (localStorage.getItem(STORAGE_KEY)) {
        formEl.elements.email.value = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ).email || "";
        formEl.elements.message.value = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ).message || "";
    }
}
onPageReload()

const backValues =
JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function inputChange(e) {

    const backValues =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    backValues[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(backValues));
}

console.log(backValues);

function onSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(backValues);
    
}




    

