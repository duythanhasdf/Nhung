// Lấy ra elements của trang

const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("rePassword");
const addressElement = document.getElementById("address");


// Element liên quan đến lỗi
const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const rePasswordError = document.getElementById("rePasswordError");

//Lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];


/**
 * Validate địa chỉ email
 * @param {*} email 
 * @returns : Dữ liệu nếu email đúng định dang, undifined nếu email ko đúng định dạng
 * Author: NDTHANH(12/10/2024)
 */
function validateEmail  (email)  {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// Lắng nghe sự kiện form Submit đăng ký tài khoản
formRegister.addEventListener("submit", function(e) {

// Ngăn chặn sự kiện load lại trang  
e.preventDefault();    

// Validate dữ liệu đầu vào
if (!userNameElement.value) {
   // Hiển thị lỗi
   userNameError.style.display = "block" ;
}else {
    // Ẩn lỗi
   userNameError.style.display = "none" ;
   }
 
   // Validate dữ liệu đầu vào
if (!emailElement.value) {
    // Hiển thị lỗi
    emailError.style.display = "block" ;
 }else {
     // Ẩn lỗi
    emailError.style.display = "none" ;
    // Kiểm tra định dạng email
    if (!validateEmail(emailElement.value)){
        // Hiển thị lỗi
    emailError.style.display = "block" ;
    emailError.innerHTML = "Email không đúng định dạng";    
}
    }

    // Validate dữ liệu đầu vào
if (!passwordElement.value) {
    // Hiển thị lỗi
    passwordError.style.display = "block" ;
 }else {
     // Ẩn lỗi
    passwordError.style.display = "none" ;
    }

    // Validate dữ liệu đầu vào
if (!rePasswordElement.value) {
    // Hiển thị lỗi
    rePasswordError.style.display = "block" ;
 }else {
     // Ẩn lỗi
    rePasswordError.style.display = "none" ;
    }
   
    // Kiểm tra mật khẩu với nhập lại mật khẩu
    if(passwordElement.value !== rePasswordElement.value){
        rePasswordError.style.display = "block" ;
        rePasswordError.innerHTML = "Mật khẩu không khớp";
   }

   // Gửi dữ liệu từ form lên localStorage
   if(userNameElement.value && emailElement.value && passwordElement.value && rePasswordElement.value && 
    passwordElement.value === rePasswordElement.value && validateEmail(emailElement.value) 
){
     // Lấy dữ liệu từ form và gộp thành đối tượng user 
     const user = {
        userId: Math.ceil(Math.random() * 100000000),
        userName: userNameElement.value,
        email: emailElement.value,
        password: passwordElement.value,
        address: addressElement.value,
        };
     
    // push user vào trong mảng userLocal
    userLocal.push(user);

    // Lưu trữ dữ liệu lên local
    localStorage.setItem("users",JSON.stringify(userLocal));

    // Chuyển hướng về trang đăng nhập
    window.location.href = "login.html";
}
         
    }
);
