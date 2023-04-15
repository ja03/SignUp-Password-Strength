const button= document.querySelector("button")
const strength= document.querySelector("#passwordSection")
const password = document.querySelector("#userPass")
const showPass = document.querySelector("small")
const spanElement = document.querySelector("span")
const form = document.querySelector("form")

showPass.addEventListener("click", ()=>{
    if (password.type == "password"){
        password.type= "text"
    }else{
        password.type= "password"
    }
})
var passwordValue;
var upperCaseFlag= false
var SpecialSymbolFlag= false

function hasUpperCase(str) {
    return /[A-Z]/.test(str);
}
function hasUnerScore(str) {
    return /_/.test(str);
}



password.addEventListener("keyup", ()=>{
    password.type= "password"
    passwordValue = password.value
    upperCaseFlag = false; 
    SpecialSymbolFlag = false;
    if(hasUpperCase(passwordValue)){
        console.log("big boyyy")
        upperCaseFlag =true
    }
    if(hasUnerScore(passwordValue)){
        console.log("underScore baby")
        SpecialSymbolFlag=true
    }
    if(upperCaseFlag==true && SpecialSymbolFlag==true){
        spanElement.innerHTML="Strong Password"
    }
    else if(upperCaseFlag ==true && SpecialSymbolFlag==false){
        spanElement.innerHTML="week password add _ to make it stronger"
    }
    else if(upperCaseFlag ==false && SpecialSymbolFlag==true){
        spanElement.innerHTML="week password add an upperCase to make it stronger"
    }
    else if(upperCaseFlag ==false && SpecialSymbolFlag==false){
        spanElement.innerHTML="password not valid please add a _ or at least one upperCase to use this password"
    }
    // form.append(spanElement)

})
// in order for the password to be strong 1 uppercase and 1 special symbol
// a week password it has just a 1 upper case or just 1 special symbol
// a password that wont work is a password that has nor an upper case or a special symbol
// The special Symbol is an _ underscore just that
//Conditions:
//1 upperCase 1 specialSymbol --> Strong Password
//1 upperCase 0 specialSymbol --> week password add an upperCase to make it stronger
//0 upperCase 1 specialSymbol --> week password add a _ to make it stronger
//0 upperCase 0 specialSymbol --> password not valid please add a _ or at least
                                  //one upperCase to use this password
/*
const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener("click", () => changeInout( pElement.textContent ))
            historyElement.append(pElement)
*/