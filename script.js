// Assignment Code
const generate_btn = document.querySelector("#generate");

// Write password to the #password input
function write_password() {
    const password = generate_password();
    const password_text = document.querySelector("#password");

    password_text.value = password;

}
/// @min: inclusive minimum value
/// @max: exclusive maximum value
/// @ret: Number
function int_rand_range(min,max) {
    return Math.floor((Math.random()*(max-min))+min);
}
/// @ret: ?String
function generate_password() {
    const password_length=document.querySelector("#password_length");
    const special_chars=document.querySelector("#password_special_chars").checked;
    const uppercase=document.querySelector("#password_uppercase").checked;
    const lowercase=document.querySelector("#password_lowercase").checked;
    const numbers=document.querySelector("#password_numbers").checked;
    if (password_length.value=="") {
        alert("Password length has not been specified");
        return null;
    }
    const length=Number(password_length.value);
    let password=String();
    for (let i=0;i<length;i+=1) {
        let choices=[];
        if (special_chars) {
            let choices2=[];
            choices2.push(int_rand_range(32,48));
            choices2.push(int_rand_range(58,65));
            choices2.push(int_rand_range(91,97));
            choices2.push(int_rand_range(123,127));
            choices.push(choices2[int_rand_range(0,4)]);
        }
        if (uppercase) {
            choices.push(int_rand_range(65,91));
        }
        if (lowercase) {
            choices.push(int_rand_range(97,123));
        }
        if (numbers) {
            choices.push(int_rand_range(48,58));
        }
        if (choices.length==0) {
            alert("No character ranges selected. Please check at least one of these boxes: uppercase letters, lowercase letters, numbers, or special characters.");
            return;
        }
        // String.fromCodePoint(Math.floor((Math.random()*94))+32)
        password+=String.fromCodePoint(choices[int_rand_range(0,choices.length)]);
    }
    return password;
}

// Add event listener to generate button
generate_btn.addEventListener("click", write_password);
