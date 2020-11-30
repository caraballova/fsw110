/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

let output = document.getElementById("output");

window.addEventListener("keypress", function(){
    let str = "KeyboardEvent: Key ='" + event.key + "' Code = '" + event.code + "'";
    output = " " + str;
    document.body.append(output);
});