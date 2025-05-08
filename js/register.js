function validateForm(){
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let age = document.getElementById("age")
    let male = document.getElementById("male")
    let female = document.getElementById("female")

    if(username.value = "" || username.value.length < 3){
        alert ("Username must be filled and more than 3 characters!")
    }else if(!email.value.endsWith("@gmail.com") && !email.value.endsWith("@yahoo.com")){
        alert ("Email must ends with @gmail.com or @yahoo.com!")
    }else if (!isAlphaNumeric(password.value)){
        alert ("Password must be alphanumeric!")
    }else if(!ageIsNumeric(age.value)){
        alert("Your age must be number!")
    }else if (!female.checked && !male.checked){
        alert("Please select a gender!")
    }else{
        alert("Form successfully submitted!")
    }

    document.querySelector("registerForm")


}

function isAlphaNumeric(str){
    let isAlpha = false
    let isNumeric = false

    for(let i=0; i<str.length; i++){
        if(isNaN(str[i])){
            isAlpha = true
        }else{
            isNumeric = true;
        }
        if(isAlpha && isNumeric){
            return true
        }
    }

    return false
}

function ageIsNumeric(ageValue) {
    return !isNaN(ageValue) && ageValue.trim() !== "";
}