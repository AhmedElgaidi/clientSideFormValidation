// our refrences
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwodCheck = document.getElementById('passwordCheck');

// our used functions
// frist secondary func.
let setSuccessFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add sucess message inside small tag
    small.innerHTML = message;
    // add error class to .form-control
    formControl.className = ('form-control success');
};
// second secondary func.
let setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small tag
    small.innerHTML = message;
    // add error class to .form-control
    formControl.className = 'form-control error'
};
// third secondary func.
let isEmailValid = email => {
    const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};
// main function
let checkInputs = () => {
    // get inputs values
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwodCheckValue = passwodCheck.value.trim();
    // validating username 
    if(userNameValue === '') {
        // show error
        // add error class
        setErrorFor(userName, "can't be empty......");
        userName.focus();

    }else if(+userNameValue ){
        setErrorFor(userName, "can't be numbers only......");
        userName.focus();
    }else {
        // add success class
        setSuccessFor(userName, "well done....")
    };
    // validating email
    if(emailValue === '') {
        setErrorFor(email, "can't be empty......")
    }else if(!isEmailValid(emailValue)) {
        setErrorFor(email, "Email isn't valid......")
    }else {
        setSuccessFor(email, "well done....")
    }
    // validation password
    if(passwordValue !== '' || passwordValue === passwodCheckValue) {
        const regex1 = /^(?=.*[a-z])$/;
        const regex2 = /^(?=.*[A-Z])$/;
        const regex3 = /^(?=.*[0-9])$/;
        const regex4 = /^(?=.*[!@#{}/\|+$%^&*])$/;

        if(passwordValue.length < 6) {
            setErrorFor(password, "can't be less than 6 characters...");
            setErrorFor(passwordCheck, "")
            password.focus();
        }else if(passwordValue.includes(userNameValue)) {
            setErrorFor(password, "can't include the user name......");
            setErrorFor(passwordCheck, "")
            password.focus();
        }else if(!regex1.test(passwordValue)){
            setErrorFor(password, "must contain at least lowercase character");   
            password.focus();
        }else if(!regex2.test(passwordValue)){
            setErrorFor(password, "must contain at least uppercase character");   
            password.focus();
        }else if(!regex3.test(passwordValue)){
            setErrorFor(password, "must contain at least a number");   
            password.focus();
        }else if(!regex4.test(passwordValue)){
            setErrorFor(password, "must contain a special character");   
            password.focus();
        }
        
    }else {
            setErrorFor(passwordCheck, "")
            setErrorFor(password, "two passwords aren't same......")
        };

};


// add event listener
form.addEventListener('submit', e => {{
    e.preventDefault();
    checkInputs();
}})