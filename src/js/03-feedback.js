
import trottle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

const STORAGE_KEY ="feedback-form-state";
const message =document.querySelector('textarea[name ="message"]');
const inputName = document.querySelector('input[name = "email"]');

textMessage()
let formData = {}

formEl.addEventListener("input", trottle(handleInputText, 500))

function handleInputText (ev) {
    formData[ev.target.name] = ev.target.value
    localStorage.setItem( STORAGE_KEY ,JSON.stringify(formData))
}

function textMessage (){
    const saveMessage =JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saveMessage) {
        inputName.value =saveMessage.email
        message.value =saveMessage.message
    }
    console.log("email:",inputName.value)
    console.log("message:",message.value)
}
formEl.addEventListener("submit", handleSubmitForm)

function handleSubmitForm(ev){
    ev.preventDefault()
    if (inputName.value === "" || message.value === ""){
        return alert ("всі поля мають бути заповнені")}
        localStorage.removeItem(STORAGE_KEY)
        ev.currentTarget.reset()
    }


    


    

