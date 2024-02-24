const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const username=form.username.value
    const password=form.password.value

    const AuthenticationSuccess=auth(username,password)
    if(AuthenticationSuccess){
        window.location.href="main.html"
    }else{
        alert("FAILURE");
    }
})

function auth(username, password) {
    if(username ==="ansrSource" && password ==="1234"){
        return true
    }else{
        return false
    }
}