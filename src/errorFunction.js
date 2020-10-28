function errorFunction(input) {
    if (input === 0) {
        alert("فیلدهای * دار نباید خالی باشند");
    }
    else if (input === 1) {
        alert("نام فقط باید از حروف کوچک و بزرگ باشند");
        document.getElementById("fname1").value = "";
    }
    else if (input === 2) {
        alert("نام خانوادگی فقط باید از حروف کوچک و بزرگ باشند");
        document.getElementById("lname1").value = "";
    }
    else if (input === 3) {
        alert("ایمیل را صحیح وارد کنید");
        document.getElementById("email1").value = "";
    }
    else if (input === 4) {
        alert("رمزعبور و تکرار رمزعبور باید برابر باشند");
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
    }
}
module.exports = errorFunction;
