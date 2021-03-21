window.onload = pageLoad;

let information = [];
  
function pageLoad(){

    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
// function myFunc()
// {
//     information = {
//         firstname: document.getElementById("firstname").value,
//         lastname: document.getElementById("lastname").value,
//         birthday: document.getElementById("birthday").value,
//         email: document.getElementById("email").value,
//         username: document.getElementById("username").value,
//         password: document.getElementById("password").value,
//         repassword: document.getElementById("repassword").value,
//     };
// let test = [information.firstname,information.lastname,
//     information.birthday,information.email,
//     information.username,information.password,information.repassword];

//     console.log(test[4]);
//     for(i = 0 ; i < test.length ; i++)
//     {
//     if(test[i] == "")
//         {
//         alert("Please complete all required fields");
//         console.log(test[i]);
//         }
//     }  
//     // if(information.password != information.repassword)
//     // {
//     //     console.log("Error");
//     //     return false;
//     // }
// }
function validateForm() {
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if(password != repassword)
    {
        alert("Invalid password");
        return false;
    }
    else{
        alert("Success");
    }
}