function showLogin(){
    document.getElementById("register-form").style.display="none";
    document.getElementById("login-form").style.display="block";
}
function showRegister(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("register-form").style.display="block";
}

function handleRegister(){
var uname = document.getElementById("regUsername").value
var pword = document.getElementById("regPassword").value
var mail = document.getElementById("regEmail").value

  if(uname ==="" || pword === "" || mail === ""){
    alert("Each field is mandatory")
  }else{
    var userData = {
        username : uname,
        email:mail,
        password : pword
        }
       localStorage.setItem("registeredUser",JSON.stringify(userData))
       alert("Registration Successful...!")
       showLogin();
  } 

}
function handleLogin(){
var loginpword = document.getElementById("loginPassword").value
var loginmail = document.getElementById("loginEmail").value


var savedData = JSON.parse(localStorage.getItem("registeredUser"))

if( loginpword === "" || loginmail === ""){
    alert("Each field is mandatory")

  }else

  if(savedData&&savedData.email==loginmail&&savedData.password==loginpword){
    alert(`Hi ${savedData.username} , Welcome to SpendCraft...!`)
    window.location.href = "budget.html"

  } 
  else{
    alert("Invalid Email or Password ....!")
  }
}

window.onload = function(){
  if(window.location.hash === "#login-form"){
    showLogin()
  }
}




