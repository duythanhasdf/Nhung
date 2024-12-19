// Element của trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");


// Lắng nghe sự kiện submit form đăng nhập tài khoản
formLogin.addEventListener("submit",function(e){
     // Ngăn chặn sự kiện load lại trang
     e.preventDefault();

    // Validate dữ liệu đầu vào

    // Lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm kiếm email và mật khẩu mà người dùng nhập vào có tồn tại trên locak 
    const findUser = userLocal.find(user => user.email === emailElement.value && user.password === passwordElement.value);
    if (!findUser)   {
        // Nếu ko thì thông báo cho người dùng nhập lại dữ liệu
        alert("Email hoặc mật khẩu không đúng");

    }else{
        // Nếu có thì đăng nhập thành công và chuyển hướng về trang chủ
        window.location.href = "../indexx.html";

    }
    

    

    
})  