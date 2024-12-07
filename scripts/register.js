if (localStorage.getItem("currentUser")){
    location.href = "./index.html"
}
//lay the form dau tien
let form = document.querySelector("form")

form.addEventListener("submit",function(event){
event.preventDefault();//dung toan bo chuc nang mac dinh

let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
if (password.length < 6){
    alert("Mat khau can tren 6 ki tu")
} else {
    if (localStorage.getItem("users")){
        let users = JSON.parse(localStorage.getItem("users"))
        username.push({
            username,
            password,
            email,
        })
        localStorage.setItem("users", JSON.stringify(users));

    }else{
        localStorage.setItem(
            "users",
            JSON.stringify([{
                username,
                password,
                email,

            }])
        )
    }
    alert("ban da dang ki thanh cong")
    location.href = "./login.html"
}


});