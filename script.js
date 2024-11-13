import {submitSignupInfo, LogintoAccount } from "./scripts1.js"
const signInBtnLink = document.getElementById('signInBtn-link');
const signUpBtnLink = document.getElementById('signUpBtn-link');
const inc = document.getElementById('incorrect-linkk');
const loginBtn = document.querySelector('.loginBtn');
const submitBtn = document.querySelector('.submitBtn');
const wrapper = document.querySelector('.wrapper'); 
const forgotpassword = document.querySelector('.frgrPsswrd-link');
const affiramtivee = document.getElementById("affirmativee");

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

signUpBtnLink.addEventListener('click', () => {
    if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
        wrapper.classList.add('one');
        return;
    }
    for (let d = 1; d < wrapper.classList.length; d++){
        if (wrapper.classList.item(d).toString() != ('one')){
            wrapper.classList.replace(wrapper.classList.item(d),'one');
        }
        else {
            continue;
        }

       
    }
    
});
signInBtnLink.addEventListener('click', () => {

    //two

    if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){

        wrapper.classList.add('two');
        return;
    }
    for (let d = 1; d < wrapper.classList.length; d++){
        if (wrapper.classList.item(d).toString() == ('two')){
            continue;
        }
        else {
            wrapper.classList.replace(wrapper.classList.item(d),'two');
        }

       
    }
});

loginBtn.addEventListener('click', () => {
    LogintoAccount();
    document.getElementById("temm").innerHTML = "Loading...";
    localStorage.setItem('faceit-name', document.getElementById("usrr").value);
    
});

submitBtn.addEventListener('click', () => {
//TODO: CHECK IF THE INPUTS FOR THE FORM ARE CORRECT OR NOT
        if (!isNaN(document.getElementById("passwordd")) && !isNaN(parseFloat(document.getElementById("passwordd")))){
                 //three
                submitSignupInfo();
                if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
            
                    wrapper.classList.add('three');
                    return;
                }
                for (let d = 1; d < wrapper.classList.length; d++){
                    if (wrapper.classList.item(d).toString() == ('three')){
                        continue;
                    }
                    else {
                        wrapper.classList.replace(wrapper.classList.item(d),'three');
                    }

                
                } 
        }
        else{
            alert("Your PIN needs to have numbers yo");
        }
        document.getElementById("temm").innerHTML = "Loading...";
});



inc.addEventListener('click', () => {
    if (wrapper.classList.contains('fart')){
        if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
            wrapper.classList.add('two');
            return;
        }
        for (let d = 1; d < wrapper.classList.length; d++){
            if (wrapper.classList.item(d).toString() == ('two')){
                continue;
            }
            else {
                wrapper.classList.replace(wrapper.classList.item(d),'two');
            }
    
           
        }
        return;
    }
    //four
    else if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
        wrapper.classList.add('one');
        return;
    }
    for (let d = 1; d < wrapper.classList.length; d++){
        if (wrapper.classList.item(d).toString() == ('one')){
            continue;
        }
        else {
            wrapper.classList.replace(wrapper.classList.item(d),'one');
        }

       
    }
});

forgotpassword.addEventListener('click', () =>{
    if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
    
        wrapper.classList.add('five');
        return;
    }
    for (let d = 1; d < wrapper.classList.length; d++){
        if (wrapper.classList.item(d).toString() == ('five')){
            continue;
        }
        else {
            wrapper.classList.replace(wrapper.classList.item(d),'five');
        }

       
    }
});

affiramtivee.addEventListener('click', () =>{
    console.log("BUTTON CLICKED");
    
});


